(function($) {

  // Takes a list of oa:annotations passed
  // by reference and renders their regions,
  // registering updates.

  $.OsdCanvasRenderer = function(options) {

    jQuery.extend(this, {
      osd:       null,
      osdViewer: null,
      elements:  null,
      list:      null,
      parent:    null,
      annoTooltips: {},
      tooltips:  null
    }, options);
  };

  $.OsdCanvasRenderer.prototype = {
    parseRegion: function(url) {
      var regionString;
      if (typeof url === 'object') {
        regionString = url.selector.value;  
      } else {
        regionString = url.split('#')[1];
      }
      var regionArray = regionString.split('=')[1].split(',');
      return regionArray;
    },

    getOsdFrame: function(region) {
      var rectX = region[0],
      rectY = region[1],
      rectW = region[2],
      rectH = region[3];

      return this.osdViewer.viewport.imageToViewportRectangle(rectX,rectY,rectW,rectH);

    }, 

    render: function() {
      var _this = this;
      _this.hideAll();
      this.list.forEach(function(annotation) {
        var region = _this.parseRegion(annotation.on);
        var osdOverlay = document.createElement('div');
        osdOverlay.className = 'annotation';
        osdOverlay.id = annotation['@id'];
        _this.osdViewer.addOverlay({
          element: osdOverlay,
          location: _this.getOsdFrame(region)
        });
      });
      
      this.tooltips = jQuery(_this.osdViewer.element).qtip({
            overwrite : false,
            content: {
             text : ''
             },
             position : {
              target : 'mouse',
              adjust : {
                mouse: false
              }
             },
             style : {
              classes : 'qtip-bootstrap'
             },
             show: {
              ready: false,
              event : false,
              delay: 0
             },
             hide: {
                fixed: true,
                delay: 10
             },
             events: {
               show: function(event, api) {_this.annotationEvents(event, api);}
             } 
            });

      this.bindEvents();
    },

    select: function(annotationId) {
      // jQuery(annotation element).trigger('click');
    },

    getAnnoFromRegion: function(regionId) {
      return this.list.filter(function(annotation) {
        return annotation['@id'] === regionId;
      });
    },

    getAnnotationsFromPosition: function(event, imageViewElem) {
      var _this = this,
      annos = imageViewElem.find('.annotation').map(function() {
        var self = jQuery(this),
        offset = self.offset(),
        l = offset.left,
        t = offset.top,
        h = self.height(),
        w = self.width(),
        x = new OpenSeadragon.getMousePosition(event).x,
        y = new OpenSeadragon.getMousePosition(event).y,
        maxx = l+w,
        maxy = t+h;

        // console.log(y, maxy, t, x, maxx, l);
        if ((y <= maxy && y >= t) && (x <= maxx && x >= l)) {
          // console.log(_this.getAnnoFromRegion(this.id));
        }

        return (y <= maxy && y >= t) && (x <= maxx && x >= l) ? _this.getAnnoFromRegion(this.id) : null;
      });
      return annos;
    },

    getAnnoIdsFromPosition: function(event, imageViewElem) {
      var _this = this,
      annos = imageViewElem.find('.annotation').map(function() {
        var self = jQuery(this),
        offset = self.offset(),
        l = offset.left,
        t = offset.top,
        h = self.height(),
        w = self.width(),
        x = new OpenSeadragon.getMousePosition(event).x,
        y = new OpenSeadragon.getMousePosition(event).y,
        maxx = l+w,
        maxy = t+h;

        return (y <= maxy && y >= t) && (x <= maxx && x >= l) ? this.id : null;
      });

      return annos;
    },

    getOverlaysFromPosition: function(event) {
      var _this = this;
      var annos = jQuery(_this.osdViewer.canvas).find('.annotation').map(function() {
        var self = jQuery(this),
        offset = self.offset(),
        l = offset.left,
        t = offset.top,
        h = self.outerHeight(),
        w = self.outerWidth(),
        x = new OpenSeadragon.getMousePosition(event).x,
        y = new OpenSeadragon.getMousePosition(event).y,
        maxx = l+w,
        maxy = t+h;

        return (y <= maxy && y >= t) && (x <= maxx && x >= l) ? this : null;
      });

      return annos;
    },

    bindEvents: function() {
      var _this = this;
      // be sure to properly delegate your event handlers
      jQuery(this.osdViewer.canvas).parent().on('click', '.annotation', function() { _this.onSelect(); });

      jQuery(this.osdViewer.canvas).on('mouseenter', '.annotation', function(event) { 
        console.log('entering '+this.id);
        _this.onHover(event, _this.getOverlaysFromPosition(event));
      });

      jQuery(this.osdViewer.canvas).parent().on('mouseleave', '.annotation', function() {
        _this.onMouseLeave();
      });
    },

    update: function() {
      this.render();
    },

    hideAll: function() {
      this.osdViewer.clearOverlays();
    },

    getElements: function() {
      this.elements = this.osdViewer.currentOverlays.reduce(function(result, currentOverlay) {
        currentOverlay = jQuery(currentOverlay);
        return result.add(currentOverlay);
      });
      return elements;
    },

    onHover: function(event, overlays) {
      console.log("in onhover");
      var renderAnnotations = [],
      _this = this,
      annoTooltip = new $.AnnotationTooltip(); // pass permissions
      var offset = 0,
      annotations = [];
      jQuery.each(overlays, function(index, overlay) {
        annotations.push(_this.getAnnoFromRegion(overlay.id)[0]);
      });
      if (annotations.length > 0) {
          //console.log(overlays.first());
            var tooltipApi = this.tooltips.qtip('api');
            //console.log("calling hide!");
            //tooltipApi.hide();
            console.log(event.pageX, event.pageY);
            console.log(tooltipApi.mouse);
            tooltipApi.mouse = event;
            tooltipApi.set({'content.text' : annoTooltip.getViewer(annotations),
            'show.target' : overlays,
            'hide.target' : overlays
            //'position.target' : 'mouse',
            });
            tooltipApi.reposition(event, false);
            console.log(tooltipApi.mouse);
            tooltipApi.show(); 
        }
    },

    annotationEvents: function(event, api) {
      var _this = this;
      jQuery('.annotation-display a.delete').on("click", function(event) {
        event.preventDefault();
        
        if (!window.confirm("Do you want to delete this annotation?")) { 
          return false;
        }

    /*jQuery('<div />').qtip({
        content: {
            text: message.add(ok).add(cancel),
            title: 'Please confirm'
        },
        position: {
            my: 'center', at: 'center',
            target: jQuery(window)
        },
        show: {
            ready: true,
            modal: {
                on: true,
                blur: false
            }
        },
        hide: false,
        style: 'dialogue',
        events: {
            render: function(event, api) {
                jQuery('button', api.elements.content).click(function(e) {
                    api.hide(e);
                });
            },
            hide: function(event, api) { api.destroy(); }
        }
    });*/
        
        console.log("clicked delete");
        var display = jQuery(this).parents('.annotation-display'),
        id = display.attr('data-anno-id'),
        oaAnno = _this.getAnnoFromRegion(id)[0];
        //jQuery.publish('annotationDeleted.'+_this.parent.windowId, [oaAnno]);

        //remove this annotation's overlay from osd
        //should there be some sort of check that it was successfully deleted?
        //_this.osdViewer.removeOverlay(jQuery(_this.osdViewer.element).find(".annotation#"+id)[0]);
        
        //if there will be no more displayed annotations after removing current one from dom, then hide the qtip
        if(jQuery(this).parents('.all-annotations').find('.annotation-display').length-1 === 0) {
          api.hide();
        }
        display.remove(); //remove this annotation display from dom
      });

      jQuery('.annotation-display a.edit').on("click", function(event) {
        event.preventDefault();
        console.log("clicked edit");
      });
    },

    onMouseLeave: function() {
      var tooltipApi = this.tooltips.qtip('api');
      tooltipApi.hide();
    },

    onSelect: function(annotation) {

    }
  };
})(Mirador);

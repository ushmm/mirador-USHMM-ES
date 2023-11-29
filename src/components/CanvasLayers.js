import { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import DragHandleIcon from '@material-ui/icons/DragHandleSharp';
import MoveToTopIcon from '@material-ui/icons/VerticalAlignTopSharp';
import VisibilityIcon from '@material-ui/icons/VisibilitySharp';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOffSharp';
import OpacityIcon from '@material-ui/icons/OpacitySharp';
import Typography from '@material-ui/core/Typography';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import MiradorMenuButton from '../containers/MiradorMenuButton.js';
import IIIFThumbnail from '../containers/IIIFThumbnail.js';

/** */
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/** */
export class CanvasLayers extends Component {
  /** */
  static getUseableLabel(resource, index) {
    return (resource
      && resource.getLabel
      && resource.getLabel().length > 0)
      ? resource.getLabel().getValue()
      : String(index + 1);
  }

  /** */
  constructor(props) {
    super(props);
    this.droppableId = uuid();
    this.onDragEnd = this.onDragEnd.bind(this);
    this.handleOpacityChange = this.handleOpacityChange.bind(this);
    this.setLayerVisibility = this.setLayerVisibility.bind(this);
    this.moveToTop = this.moveToTop.bind(this);
  }

  /** */
  handleOpacityChange(layerId, value) {
    const {
      canvasId, updateLayers, windowId,
    } = this.props;

    const payload = {
      [layerId]: { opacity: value / 100.0 },
    };

    updateLayers(windowId, canvasId, payload);
  }

  /** */
  onDragEnd(result) {
    const {
      canvasId, layers, updateLayers, windowId,
    } = this.props;
    if (!result.destination) return;
    if (result.destination.droppableId !== this.droppableId) return;
    if (result.source.droppableId !== this.droppableId) return;

    const sortedLayers = reorder(
      layers.map(l => l.id),
      result.source.index,
      result.destination.index,
    );

    const payload = layers.reduce((acc, layer) => {
      acc[layer.id] = { index: sortedLayers.indexOf(layer.id) };
      return acc;
    }, {});

    updateLayers(windowId, canvasId, payload);
  }

  /** */
  setLayerVisibility(layerId, value) {
    const {
      canvasId, updateLayers, windowId,
    } = this.props;

    const payload = {
      [layerId]: { visibility: value },
    };

    updateLayers(windowId, canvasId, payload);
  }

  /** */
  moveToTop(layerId) {
    const {
      canvasId, layers, updateLayers, windowId,
    } = this.props;

    const sortedLayers = reorder(layers.map(l => l.id), layers.findIndex(l => l.id === layerId), 0);

    const payload = layers.reduce((acc, layer) => {
      acc[layer.id] = { index: sortedLayers.indexOf(layer.id) };
      return acc;
    }, {});

    updateLayers(windowId, canvasId, payload);
  }

  /** @private */
  renderLayer(resource, index) {
    const {
      classes,
      layerMetadata,
      t,
    } = this.props;

    const { width, height } = { height: undefined, width: 50 };

    const layer = {
      opacity: 1,
      visibility: true,
      ...(layerMetadata || {})[resource.id],
    };

    return (
      <div style={{ flex: 1 }}>
        <div style={{ alignItems: 'flex-start', display: 'flex' }}>
          <IIIFThumbnail
            maxHeight={height}
            maxWidth={width}
            resource={resource}
            classes={{ image: classes.image, root: classes.thumbnail }}
          />
          <Typography
            className={classes.label}
            component="div"
            variant="body1"
          >
            {CanvasLayers.getUseableLabel(resource, index)}
            <div>
              <MiradorMenuButton aria-label={t(layer.visibility ? 'layer_hide' : 'layer_show')} edge="start" size="small" onClick={() => { this.setLayerVisibility(resource.id, !layer.visibility); }}>
                { layer.visibility ? <VisibilityIcon fontSize="large" /> : <VisibilityOffIcon fontSize="large" /> }
              </MiradorMenuButton>
              { layer.index !== 0 && (
                <MiradorMenuButton aria-label={t('layer_moveToTop')} size="small" onClick={() => { this.moveToTop(resource.id); }}>
                  <MoveToTopIcon fontSize="large" />
                </MiradorMenuButton>
              )}
            </div>
          </Typography>
        </div>
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <Tooltip title={t('layer_opacity')}>
            <OpacityIcon className={classes.opacityIcon} color={layer.visibility ? 'inherit' : 'disabled'} fontSize="medium" />
          </Tooltip>
          <Input
            classes={{ input: classes.opacityInput }}
            disabled={!layer.visibility}
            value={Math.round(layer.opacity * 100)}
            type="number"
            min={0}
            max={100}
            onChange={e => this.handleOpacityChange(resource.id, e.target.value)}
            endAdornment={<InputAdornment disableTypography position="end"><Typography variant="caption">%</Typography></InputAdornment>}
            inputProps={{
              'aria-label': t('layer_opacity'),
            }}
          />
          <Slider
            className={classes.slider}
            disabled={!layer.visibility}
            value={layer.opacity * 100}
            onChange={(e, value) => this.handleOpacityChange(resource.id, value)}
          />
        </div>
      </div>
    );
  }

  /** @private */
  renderDraggableLayer(resource, index) {
    const {
      classes,
      t,
    } = this.props;

    return (
      <Draggable key={resource.id} draggableId={resource.id} index={index}>
        {(provided, snapshot) => (
          <ListItem
            ref={provided.innerRef}
            {...provided.draggableProps}
            component="li"
            className={clsx(
              classes.listItem,
              {
                [classes.dragging]: snapshot.isDragging,
              },
            )}
            disableGutters
            key={resource.id}
          >
            <div {...provided.dragHandleProps} className={classes.dragHandle}>
              <Tooltip title={t('layer_move')}>
                <DragHandleIcon fontSize="large" />
              </Tooltip>
            </div>
            {this.renderLayer(resource, index)}
          </ListItem>
        )}
      </Draggable>
    );
  }

  /** */
  render() {
    const {
      classes,
      index,
      label,
      layers,
      t,
      totalSize,
    } = this.props;

    return (
      <>
        { totalSize > 1 && (
          <Typography className={classes.sectionHeading} variant="overline">
            {t('annotationCanvasLabel', { context: `${index + 1}/${totalSize}`, label })}
          </Typography>
        )}
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId={this.droppableId}>
            {(provided, snapshot) => (
              <List
                className={classes.list}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {
                  layers && layers.map((r, i) => (
                    this.renderDraggableLayer(r, i)
                  ))
                }
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </>
    );
  }
}

CanvasLayers.propTypes = {
  canvasId: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.string),
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  layerMetadata: PropTypes.objectOf(PropTypes.shape({
    opacity: PropTypes.number,
  })),
  layers: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  t: PropTypes.func.isRequired,
  totalSize: PropTypes.number.isRequired,
  updateLayers: PropTypes.func.isRequired,
  windowId: PropTypes.string.isRequired,
};

CanvasLayers.defaultProps = {
  classes: {},
  layerMetadata: undefined,
};

import { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/InfoSharp';
import AnnotationIcon from '@material-ui/icons/CommentSharp';
import AttributionIcon from '@material-ui/icons/CopyrightSharp';
import LayersIcon from '@material-ui/icons/LayersSharp';
import SearchIcon from '@material-ui/icons/SearchSharp';
import CanvasIndexIcon from './icons/CanvasIndexIcon.js';

/** */
function TabButton({ t, value, ...tabProps }) {
  return (
    <Tooltip title={t('openCompanionWindow', { context: value })}>
      <Tab
        {...tabProps}
        value={value}
        aria-label={
          t('openCompanionWindow', { context: value })
        }
        disableRipple
      />
    </Tooltip>
  );
}

TabButton.propTypes = {
  t: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

/**
 *
 */
export class WindowSideBarButtons extends Component {
  /** */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * @param {object} event the change event
   * @param {string} value the tab's value
  */
  handleChange(event, value) {
    const { addCompanionWindow } = this.props;

    addCompanionWindow(value);
  }

  /**
   * render
   *
   * @return {type}  description
   */
  render() {
    const {
      classes,
      hasAnnotations,
      hasAnyAnnotations,
      hasAnyLayers,
      hasCurrentLayers,
      hasSearchResults,
      hasSearchService,
      panels,
      PluginComponents,
      sideBarPanel,
      t,
    } = this.props;

    return (
      <Tabs
        classes={{ flexContainer: classes.tabsFlexContainer, indicator: classes.tabsIndicator }}
        value={sideBarPanel === 'closed' ? false : sideBarPanel}
        onChange={this.handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        orientation="vertical"
        aria-orientation="vertical"
        aria-label={t('sidebarPanelsNavigation')}
      >
        { panels.info && (
          <TabButton
            value="info"
            onKeyUp={this.handleKeyUp}
            classes={{ root: classes.tab, selected: classes.tabSelected }}
            t={t}
            icon={(<InfoIcon fontSize="large" />)}
          />
        )}
        { panels.attribution && (
          <TabButton
            value="attribution"
            onKeyUp={this.handleKeyUp}
            classes={{ root: classes.tab, selected: classes.tabSelected }}
            t={t}
            icon={(<AttributionIcon fontSize="large" />)}
          />
        )}
        { panels.canvas && (
          <TabButton
            value="canvas"
            onKeyUp={this.handleKeyUp}
            classes={{ root: classes.tab, selected: classes.tabSelected }}
            t={t}
            icon={(<CanvasIndexIcon fontSize="large" />)}
          />
        )}
        {panels.annotations && (hasAnnotations || hasAnyAnnotations) && (
          <TabButton
            value="annotations"
            onKeyUp={this.handleKeyUp}
            classes={{ root: classes.tab, selected: classes.tabSelected }}
            t={t}
            icon={(
              <Badge overlap="rectangular" classes={{ badge: classes.badge }} invisible={!hasAnnotations} variant="dot">
                <AnnotationIcon fontSize="large" />
              </Badge>
            )}
          />
        )}
        {panels.search && hasSearchService && (
          <TabButton
            value="search"
            onKeyUp={this.handleKeyUp}
            classes={{ root: classes.tab, selected: classes.tabSelected }}
            t={t}
            icon={(
              <Badge overlap="rectangular" classes={{ badge: classes.badge }} invisible={!hasSearchResults} variant="dot">
                <SearchIcon fontSize="large" />
              </Badge>
            )}
          />
        )}
        { panels.layers && hasAnyLayers && (
          <TabButton
            value="layers"
            onKeyUp={this.handleKeyUp}
            classes={{ root: classes.tab, selected: classes.tabSelected }}
            t={t}
            icon={(
              <Badge overlap="rectangular" classes={{ badge: classes.badge }} invisible={!hasCurrentLayers} variant="dot">
                <LayersIcon fontSize="large" />
              </Badge>
            )}
          />
        )}
        { PluginComponents
          && PluginComponents.map(PluginComponent => (
            <TabButton
              onKeyUp={this.handleKeyUp}
              classes={{ root: classes.tab, selected: classes.tabSelected }}
              t={t}
              key={PluginComponent.value}
              value={PluginComponent.value}
              icon={<PluginComponent />}
            />
          ))}
      </Tabs>
    );
  }
}

WindowSideBarButtons.propTypes = {
  addCompanionWindow: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string),
  hasAnnotations: PropTypes.bool,
  hasAnyAnnotations: PropTypes.bool,
  hasAnyLayers: PropTypes.bool,
  hasCurrentLayers: PropTypes.bool,
  hasSearchResults: PropTypes.bool,
  hasSearchService: PropTypes.bool,
  panels: PropTypes.arrayOf(PropTypes.bool),
  PluginComponents: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  sideBarPanel: PropTypes.string,
  t: PropTypes.func,
};

WindowSideBarButtons.defaultProps = {
  classes: {},
  hasAnnotations: false,
  hasAnyAnnotations: false,
  hasAnyLayers: false,
  hasCurrentLayers: false,
  hasSearchResults: false,
  hasSearchService: false,
  panels: [],
  PluginComponents: null,
  sideBarPanel: 'closed',
  t: key => key,
};

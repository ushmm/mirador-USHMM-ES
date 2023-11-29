import { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Skeleton from '@material-ui/lab/Skeleton';
import { Img } from 'react-image';
import CompanionWindow from '../containers/CompanionWindow.js';
import { LabelValueMetadata } from './LabelValueMetadata.js';
import ns from '../config/css-ns.js';
import { PluginHook } from './PluginHook.js';

/**
 * WindowSideBarInfoPanel
 */
export class AttributionPanel extends Component {
  /**
   * render
   * @return
   */
  render() {
    const {
      manifestLogo,
      requiredStatement,
      rights,
      windowId,
      id,
      classes,
      t,
    } = this.props;

    return (
      <CompanionWindow
        title={t('attributionTitle')}
        paperClassName={ns('attribution-panel')}
        windowId={windowId}
        id={id}
      >
        <div className={classes.section}>
          { requiredStatement && (
            <LabelValueMetadata labelValuePairs={requiredStatement} defaultLabel={t('attribution')} />
          )}
          {
            rights && rights.length > 0 && (
              <dl className={ns('label-value-metadata')}>
                <Typography variant="subtitle2" component="dt">{t('rights')}</Typography>
                { rights.map(v => (
                  <Typography variant="body1" component="dd" key={v.toString()}>
                    <Link target="_blank" rel="noopener noreferrer" href={v}>
                      {v}
                    </Link>
                  </Typography>
                )) }
              </dl>
            )
          }
        </div>

        { manifestLogo && (
          <div className={classes.section}>
            <Img
              src={[manifestLogo]}
              alt=""
              role="presentation"
              className={classes.logo}
              unloader={
                <Skeleton className={classes.placeholder} variant="rect" height={60} width={60} />
              }
            />
          </div>
        )}

        <PluginHook {...this.props} />
      </CompanionWindow>
    );
  }
}

AttributionPanel.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  manifestLogo: PropTypes.string,
  requiredStatement: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  rights: PropTypes.arrayOf(PropTypes.string),
  t: PropTypes.func,
  windowId: PropTypes.string.isRequired,
};

AttributionPanel.defaultProps = {
  classes: {},
  manifestLogo: null,
  requiredStatement: null,
  rights: null,
  t: key => key,
};

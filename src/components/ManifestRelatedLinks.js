import { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import classNames from 'classnames';
import CollapsibleSection from '../containers/CollapsibleSection';
import ns from '../config/css-ns';
import { PluginHook } from './PluginHook.js';

/**
 * ManifestRelatedLinks
 */
export class ManifestRelatedLinks extends Component {
  /**
   * render
   * @return
   */
  render() {
    const {
      classes,
      homepage,
      manifestUrl,
      related,
      renderings,
      seeAlso,
      id,
      t,
    } = this.props;

    return (
      <CollapsibleSection
        id={`${id}-related`}
        label={t('related')}
      >
        <Typography
          aria-labelledby={`${id}-related ${id}-related-heading`}
          id={`${id}-related-heading`}
          variant="h4"
          component="h5"
        >
          {t('links')}
        </Typography>
        <dl className={classNames(ns('label-value-metadata'), classes.labelValueMetadata)}>
          { homepage && (
            <>
              <Typography variant="subtitle2" component="dt">{t('iiif_homepage')}</Typography>
              {
                homepage.map(page => (
                  <Typography key={page.value} variant="body1" component="dd">
                    <Link target="_blank" rel="noopener noreferrer" href={page.value}>
                      {page.label || page.value}
                    </Link>
                  </Typography>
                ))
              }
            </>
          )}
          { renderings && renderings.length > 0 && (
            <>
              <Typography variant="subtitle2" component="dt">{t('iiif_renderings')}</Typography>
              {
                renderings.map(rendering => (
                  <Typography key={rendering.value} variant="body1" component="dd">
                    <Link target="_blank" rel="noopener noreferrer" href={rendering.value}>
                      {rendering.label || rendering.value}
                    </Link>
                  </Typography>
                ))
              }
            </>
          )}
          { related && (
            <>
              <Typography variant="subtitle2" component="dt">{t('iiif_related')}</Typography>
              {
                related.map(relatedItem => (
                  <Typography key={relatedItem.value} variant="body1" component="dd">
                    <Link target="_blank" rel="noopener noreferrer" href={relatedItem.value}>
                      {relatedItem.label || relatedItem.value}
                    </Link>
                    { relatedItem.format && (
                      <Typography component="span">{` (${relatedItem.format})`}</Typography>
                    )}
                  </Typography>
                ))
              }
            </>
          )}
          { seeAlso && (
            <>
              <Typography variant="subtitle2" component="dt">{t('iiif_seeAlso')}</Typography>
              {
                seeAlso.map(seeAlsoItem => (
                  <Typography key={seeAlsoItem.value} variant="body1" component="dd">
                    <Link target="_blank" rel="noopener noreferrer" href={seeAlsoItem.value}>
                      {seeAlsoItem.label || seeAlsoItem.value}
                    </Link>
                    { seeAlsoItem.format && (
                      <Typography component="span">{` (${seeAlsoItem.format})`}</Typography>
                    )}
                  </Typography>
                ))
              }
            </>
          )}
          { manifestUrl && (
            <>
              <Typography variant="subtitle2" component="dt">{t('iiif_manifest')}</Typography>
              <Typography variant="body1" component="dd">
                <Link target="_blank" rel="noopener noreferrer" href={manifestUrl}>
                  {manifestUrl}
                </Link>
              </Typography>
            </>
          )}
        </dl>
        <PluginHook {...this.props} />
      </CollapsibleSection>
    );
  }
}

ManifestRelatedLinks.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  homepage: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  id: PropTypes.string.isRequired,
  manifestUrl: PropTypes.string,
  related: PropTypes.arrayOf(PropTypes.shape({
    format: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  renderings: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  seeAlso: PropTypes.arrayOf(PropTypes.shape({
    format: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  t: PropTypes.func,
};

ManifestRelatedLinks.defaultProps = {
  homepage: null,
  manifestUrl: null,
  related: null,
  renderings: null,
  seeAlso: null,
  t: key => key,
};

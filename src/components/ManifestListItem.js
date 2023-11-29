import { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { Img } from 'react-image';
import ManifestListItemError from '../containers/ManifestListItemError.js';
import ns from '../config/css-ns.js';

/**
 * Represents an item in a list of currently-loaded or loading manifests
 * @param {object} props
 * @param {object} [props.manifest = string]
 */

/** */
export class ManifestListItem extends Component {
  /** */
  constructor(props) {
    super(props);
    this.handleOpenButtonClick = this.handleOpenButtonClick.bind(this);
  }

  /** */
  componentDidMount() {
    const {
      fetchManifest, manifestId, ready, isFetching, error, provider,
    } = this.props;

    if (!ready && !error && !isFetching && provider !== 'file') fetchManifest(manifestId);
  }

  /**
   * Handling open button click
   */
  handleOpenButtonClick() {
    const {
      addWindow,
      handleClose,
      manifestId,
    } = this.props;

    addWindow({ manifestId });
    handleClose();
  }

  /** */
  render() {
    const {
      active,
      buttonRef,
      manifestId,
      ready,
      title,
      thumbnail,
      manifestLogo,
      size,
      classes,
      provider,
      t,
      error,
      isCollection,
      isMultipart,
    } = this.props;

    const placeholder = (
      <Grid container className={ns('manifest-list-item')} spacing={2}>
        <Grid item xs={3} sm={2}>
          <Skeleton className={classes.placeholder} variant="rect" height={80} width={120} />
        </Grid>
        <Grid item xs={9} sm={6}>
          <Skeleton className={classes.placeholder} variant="text" />
        </Grid>
        <Grid item xs={8} sm={2}>
          <Skeleton className={classes.placeholder} variant="text" />
          <Skeleton className={classes.placeholder} variant="text" />
        </Grid>
        <Grid item xs={4} sm={2}>
          <Skeleton className={classes.placeholder} variant="rect" height={60} width={60} />
        </Grid>
      </Grid>
    );

    if (error) {
      return (
        <ListItem divider className={classes.root} data-manifestid={manifestId}>
          <ManifestListItemError manifestId={manifestId} />
        </ListItem>
      );
    }

    return (
      <ListItem divider className={[classes.root, active ? classes.active : ''].join(' ')} data-manifestid={manifestId}>
        {ready ? (
          <Grid container className={ns('manifest-list-item')} spacing={2}>
            <Grid item xs={12} sm={6} className={classes.buttonGrid}>
              <ButtonBase
                ref={buttonRef}
                className={ns('manifest-list-item-title')}
                style={{ width: '100%' }}
                onClick={this.handleOpenButtonClick}
              >
                <Grid container spacing={2} className={classes.label} component="span">
                  <Grid item xs={4} sm={3} component="span">
                    { thumbnail
                      ? (
                        <Img
                          className={[classes.thumbnail, ns('manifest-list-item-thumb')].join(' ')}
                          src={[thumbnail]}
                          alt=""
                          height="80"
                          unloader={(
                            <Skeleton
                              variant="rect"
                              animation={false}
                              className={classes.placeholder}
                              height={80}
                              width={120}
                            />
                          )}
                        />
                      )
                      : <Skeleton className={classes.placeholder} variant="rect" height={80} width={120} />}
                  </Grid>
                  <Grid item xs={8} sm={9} component="span">
                    { isCollection && (
                      <Typography component="div" variant="overline">
                        { t(isMultipart ? 'multipartCollection' : 'collection') }
                      </Typography>
                    )}
                    <Typography component="span" variant="h6">
                      {title || manifestId}
                    </Typography>
                  </Grid>
                </Grid>
              </ButtonBase>
            </Grid>
            <Grid item xs={8} sm={4}>
              <Typography className={ns('manifest-list-item-provider')}>{provider}</Typography>
              <Typography>{t('numItems', { count: size, number: size })}</Typography>
            </Grid>

            <Grid item xs={4} sm={2}>
              { manifestLogo
                && (
                <Img
                  src={[manifestLogo]}
                  alt=""
                  role="presentation"
                  className={classes.logo}
                  unloader={(
                    <Skeleton
                      variant="rect"
                      animation={false}
                      className={classes.placeholder}
                      height={60}
                      width={60}
                    />
                  )}
                />
                )}
            </Grid>
          </Grid>
        ) : (
          placeholder
        )}
      </ListItem>
    );
  }
}

ManifestListItem.propTypes = {
  active: PropTypes.bool,
  addWindow: PropTypes.func.isRequired,
  buttonRef: PropTypes.elementType,
  classes: PropTypes.objectOf(PropTypes.string),
  error: PropTypes.string,
  fetchManifest: PropTypes.func.isRequired,
  handleClose: PropTypes.func,
  isCollection: PropTypes.bool,
  isFetching: PropTypes.bool,
  isMultipart: PropTypes.bool,
  manifestId: PropTypes.string.isRequired,
  manifestLogo: PropTypes.string,
  provider: PropTypes.string,
  ready: PropTypes.bool,
  size: PropTypes.number,
  t: PropTypes.func,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};

ManifestListItem.defaultProps = {
  active: false,
  buttonRef: undefined,
  classes: {},
  error: null,
  handleClose: () => {},
  isCollection: false,
  isFetching: false,
  isMultipart: false,
  manifestLogo: null,
  provider: null,
  ready: false,
  size: 0,
  t: key => key,
  thumbnail: null,
  title: null,
};

import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MoreHorizontalIcon from '@material-ui/icons/MoreHorizSharp';
import MiradorMenuButton from '../containers/MiradorMenuButton.js';
import WorkspaceOptionsMenu from '../containers/WorkspaceOptionsMenu.js';

/**
 * WorkspaceOptionsButton ~
*/
export class WorkspaceOptionsButton extends Component {
  /**
   * constructor -
   */
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  /**
   * @private
   */
  handleMenuClick(event) {
    this.setState({
      anchorEl: event.currentTarget,
      open: true,
    });
  }

  /**
   * @private
   */
  handleMenuClose() {
    this.setState({
      anchorEl: null,
      open: false,
    });
  }

  /**
   * Returns the rendered component
  */
  render() {
    const { classes, t } = this.props;
    const { anchorEl, open } = this.state;

    return (
      <>
        <MiradorMenuButton
          aria-label={t('workspaceOptions')}
          className={
            classNames(classes.ctrlBtn, (open ? classes.ctrlBtnSelected : null))
          }
          onClick={this.handleMenuClick}
        >
          <MoreHorizontalIcon fontSize="large" />
        </MiradorMenuButton>

        <WorkspaceOptionsMenu
          anchorEl={anchorEl}
          handleClose={this.handleMenuClose}
          open={open}
        />
      </>
    );
  }
}

WorkspaceOptionsButton.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  t: PropTypes.func.isRequired,
};

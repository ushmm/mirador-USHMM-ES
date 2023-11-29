import { withStyles } from '@material-ui/core/styles';
import { SanitizedHtml } from '../components/SanitizedHtml.js';

/**
 * Styles for withStyles HOC
 */
const styles = theme => ({
  root: {
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
    },
  },
});

export default withStyles(styles)(SanitizedHtml);

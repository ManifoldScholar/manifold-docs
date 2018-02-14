// Import Polyfills
import 'babel-polyfill';

// Import Styles
import './sass/styles.scss';

// Import JS
import DocsTheme from './js/docs-theme';
const theme = new DocsTheme();
theme.init();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider, createGlobalStyle} from 'styled-components';

// Import Styles
import Theme from './assets/style/Theme.js';
import ResetCSS from './assets/style/ResetCSS.js';
import BaseCSS from './assets/style/BaseCSS.js';



// Define Global Styles
const GlobalStyle = createGlobalStyle`
    ${ResetCSS}
    ${BaseCSS}
`;


ReactDOM.render(
  <React.Fragment>
    <GlobalStyle/>
      <ThemeProvider theme={Theme}>
        <App/>
      </ThemeProvider>
  </React.Fragment>
  ,document.getElementById('root')
);


serviceWorker.unregister();

import 'assets/fonts/fonts.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-circular-progressbar/dist/styles.css';

import React from 'react';
import { debugContextDevtool } from 'react-context-devtool';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reset from 'react-style-reset/string';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyles = createGlobalStyle`
  ${reset};
  #root {
  font-family: 'Roboto', sans-serif;
  }
`;

const container = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyles />
        <App />
    </BrowserRouter>,
    container,
);

debugContextDevtool(container, {
    disable: process.env.NODE_ENV === 'production',
});

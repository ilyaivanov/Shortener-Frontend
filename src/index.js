/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import App from './App';

require('./favicon.ico');
import './styles/styles.scss';

import './../node_modules/bootstrap/dist/css/bootstrap.css';

render(<App/>, document.getElementById('app'));

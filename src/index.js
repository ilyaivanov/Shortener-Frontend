/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import App from './App';

require('./favicon.ico');
import './styles/bootstrap-isolated.scss';
import './styles/styles.scss';

render(<App/>, document.getElementById('app'));

/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory, Route, IndexRoute} from 'react-router';
import App from './App';
import SearchPage from './components/ShortenPage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage.js';

require('./favicon.ico');
import './styles/styles.scss';

import './../node_modules/bootstrap/dist/css/bootstrap.css';

var routes = <Route path="/" component={App}>
    <IndexRoute component={SearchPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
</Route>;

render(
    <Router history={browserHistory} routes={routes} />
    ,
    document.getElementById('app')
);

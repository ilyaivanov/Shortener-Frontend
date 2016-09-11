/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory, Route, IndexRoute} from 'react-router';
import App from './App';
import SearchPage from './components/ShortenPage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage.js';

require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

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

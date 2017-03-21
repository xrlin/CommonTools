import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Markdown from "./routes/Markdown.js";

import UrlConverter from "./routes/UrlConverter.js";

import Encrypter from "./routes/Encrypter.js";

import JsonFormatter from "./routes/JsonFormatter.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Markdown} />
      <Route path="/markdown" component={Markdown} />
      <Route path="/url-converter" component={UrlConverter} />
      <Route path="/encrypter" component={Encrypter} />
      <Route path="/json-formatter" component={JsonFormatter} />
    </Router>
  );
}

export default RouterConfig;

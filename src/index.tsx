import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Research from './pages/Research';
import Accommodations from './pages/resources/Accommodations';
import Scripts from './pages/resources/Scripts';
import Script from './pages/resources/Script';
import EvaluateEmployers from './pages/resources/EvaluateEmployers';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './assets/styles/fonts.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/resources' exact>
            <Resources />
          </Route>
          <Route path='/research' exact>
            <Research />
          </Route>
          <Route path='/resources/scripts' exact>
            <Scripts />
          </Route>
          <Route path='/resources/script/:scenario'>
            <Script />
          </Route>
          <Route path='/resources/evaluate-employers' exact>
            <EvaluateEmployers />
          </Route>
          <Route path='/resources/accommodations' exact>
            <Accommodations />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

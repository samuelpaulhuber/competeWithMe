import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Header from './components/header';
import reducers from './reducers';
import promise from 'redux-promise';
import Login from './components/login';
import Register from './components/register';
import Drills from './components/drills';
import Drill from './components/drill';
import Welcome from './components/welcome';
import Error from './components/error';
import {isTokenDefined} from './utils/util';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            {/*<Route path="/load/list" component={LoadData} onEnter={requireAuth}/>*/}
            <Route path="/drill" component={Drill}/>
            <Route exact path="/drills" render={() => (
              isTokenDefined() ? (
                  <Drills />
                ) : (
                  <Redirect to="/login"/>
                )
            )}/>
            <Route path="/error" component={Error}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Welcome}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>, document.querySelector('.container'));

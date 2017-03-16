import { createStore, applyMiddleware, compose, promiseMiddleware } from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { browserHistory } from 'react-router';
import routes from './routes.jsx';

const createStoreWithMiddleware = compose(
  applyMiddleware(
    promiseMiddleware,
    // thunkMiddleware,
    // apiMiddleware,
    //loggerMiddleware
  ),
  reduxReactRouter({
    routes,
    browserHistory
  })
  //, devTools()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  console.log('why');
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
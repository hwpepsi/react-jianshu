import { createStore , applyMiddleware, compose } from 'redux';
import reducer from './reducer';
//import thunk from 'redux-thunk';
import mySaga from './sagas'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);
//const store = createStore(reducer);
// const store = createStore(
//     reducer, /* preloadedState, */
//     applyMiddleware(thunk),
// );
sagaMiddleware.run(mySaga)

export default store;
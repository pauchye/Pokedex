import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer'
import logger from 'redux-logger'
import thunk from '../middleware/thunk';
// import thunk from 'redux-thunk';

export const configureStore = () => (
  createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
    )
  );


// const thunk = store => next => action => {
//   if (typeof action === 'function') {
//     return action(store.dispatch, store.getState);
//   }
//   return next(action);
// }


    // export const configureStore = () => createStore(rootReducer, applyMiddleware(logger));
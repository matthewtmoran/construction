import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
// import { routerReducer } from 'react-router-redux'
import * as reducers from "./ducks";
import {loadState, saveState} from "./localStorage";

const {
  posts,
  comments
} = reducers;


export default function configureStore(initialState) {

  const persistedState = loadState();
  const rootReducer = combineReducers({
    posts,
    comments,
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const enhancers = composeEnhancers(
    applyMiddleware(thunk)
  );

  const store = createStore(
    rootReducer,
    persistedState,
    enhancers,
  );

  //to persist state in local storage
  store.subscribe(() => {
    saveState({
      posts: store.getState().posts,
      comments: store.getState().comments
    })
  });

  return store
}
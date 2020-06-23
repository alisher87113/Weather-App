import { createStore, applyMiddleware } from 'redux';
import { RootReducer } from '../reducers/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const initialState = {
  cities: [],
  notFound: false,
  exists: false,
};

const middlewares = [thunk];

export const store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

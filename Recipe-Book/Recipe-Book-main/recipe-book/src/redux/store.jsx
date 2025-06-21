import { createStore, combineReducers } from 'redux';
import { recipeReducer } from './reducers/recipeReducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
});

export const store = createStore(rootReducer);

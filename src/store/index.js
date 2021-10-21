import { createStore, applyMiddleware, combineReducers } from 'redux';
import { taskReducer } from './reducers/taskReducer';
import { editReducer } from './reducers/editReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  tasks: taskReducer,
  editId: editReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


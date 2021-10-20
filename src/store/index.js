import { createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultState = {
  tasks: [],
  editId: null
};

const FETCH_MANY_TASKS = 'FETCH_MANY_TASKS';
const EDIT_ID = 'EDIT_ID';

export const taskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_MANY_TASKS: 
      return {...state, tasks: action.payload};

    case EDIT_ID:
      return {...state, editId: action.payload};

    default:
      return state;
  }
}

export const store = createStore(taskReducer, composeWithDevTools());

export const fetchManyTasksAction = (payload) => ({type: FETCH_MANY_TASKS, payload});
export const editIdAction = (payload) => ({type: EDIT_ID, payload});

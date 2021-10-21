const defaultState = {
  tasks: []
};

const FETCH_MANY_TASKS = 'FETCH_MANY_TASKS';

export const taskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_MANY_TASKS:
      return {...state, tasks: action.payload};

    default:
      return state;
  }
}

export const fetchManyTasksAction = (payload) => ({
  type: FETCH_MANY_TASKS,
  payload
});
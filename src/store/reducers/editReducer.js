const defaultState = {
  editId: null
};

const EDIT_ID = 'EDIT_ID';

export const editReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EDIT_ID: 
      return {...state, editId: action.payload};

    default:
      return state;
  }
}

export const editIdAction = (payload) => ({
  type: EDIT_ID,
  payload
});
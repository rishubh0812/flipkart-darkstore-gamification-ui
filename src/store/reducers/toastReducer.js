import { SET_TOAST } from '../types/toastTypes';

const initialState = {
  visible: false,
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOAST:
      return { ...state, visible: action.payload };
    default:
      return state;
  }
};

export default toastReducer;

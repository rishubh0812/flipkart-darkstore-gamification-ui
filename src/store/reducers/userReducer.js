import { SET_USER } from '../types/userTypes';

const initialState = {
  name: '',
  email: '',
  role: '',
  darkstoreName: '',
  city: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;

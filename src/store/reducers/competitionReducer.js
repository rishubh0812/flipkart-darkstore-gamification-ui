import { SET_COMPETITION } from "../types/competitionTypes";

const initialState = {
    competitionNumber: '',
    competitionDate: '',
};

const competitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPETITION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default competitionReducer;

import { SET_TOAST } from '../types/toastTypes';

export const setToastVisibility = (visibility) => {
  return {
    type: SET_TOAST,
    payload: visibility,
  };
};

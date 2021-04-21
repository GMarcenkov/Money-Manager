import {UserRegister} from '../../../models/User';
import {SIGN_IN} from '../actionTypes';

export interface State {
  user: UserRegister;
  token: string;
  loading: boolean;
}

const initialState = {
  user: {},
  token: '',
  loading: true
};

export const userReducer = (
  state = initialState,
  action: any
): {
  user: any;
  token: string;
  loading: boolean;
} => {
  switch (action.type) {
    case SIGN_IN:
      if (action.payload.token) {
        localStorage.setItem('jwt', action.payload.token);
      }

      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      };
    default:
      return state;
  }
};
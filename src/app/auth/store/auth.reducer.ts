import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  email: string;
  isAuthenticated: boolean;
}

// Initial State
export const initialState: AuthState = {
  email: '',
  isAuthenticated: false,
};

// Reducer
const reducer = createReducer<AuthState>(
  initialState,
  on(AuthActions.login, (state, action) => {
    return {
      email: action.payload.email,
      isAuthenticated: true,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      email: '',
      isAuthenticated: false,
    };
  })
);

export function authReducer(state: AuthState | undefined, action: any) {
  return reducer(state, action);
}

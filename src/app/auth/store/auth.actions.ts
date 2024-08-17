import { createAction } from '@ngrx/store';

export const login = createAction('LOGIN', (email: string) => ({ payload: { email } }));
export const logout = createAction('LOGOUT');

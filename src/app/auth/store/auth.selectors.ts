import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<any>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: any) => state.isAuthenticated
);

export const selectUserEmail = createSelector(
  selectAuthState,
  (state: any) => state.email
);

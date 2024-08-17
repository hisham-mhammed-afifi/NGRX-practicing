import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuth from './auth/store/auth.selectors';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated$: Observable<boolean>;
  userEmail$: Observable<string>;

  constructor(private store: Store<any>) {
    this.userEmail$ = store.select(fromAuth.selectUserEmail);
    this.isAuthenticated$ = store.select(fromAuth.selectIsAuthenticated);
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}

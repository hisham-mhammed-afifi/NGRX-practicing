import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuth from './store/auth.selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  constructor(private store: Store<any>) {
    this.isAuthenticated$ = this.store.select(fromAuth.selectIsAuthenticated);
  }

  ngOnInit(): void {}

  login() {
    this.store.dispatch({
      type: 'LOGIN',
      payload: { email: 'hesham@gmail.com' },
    });
  }

  logout() {
    this.store.dispatch({ type: 'LOGOUT' });
  }
}

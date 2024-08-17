import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.store.dispatch(AuthActions.login('hesham@gmail.com'));

    this.router.navigate(['/home']);
  }
}

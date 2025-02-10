import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { filter, map, Observable, tap } from 'rxjs';
import { IBackEndErrors } from '../../../Shared/Feed/Models/IBackEndErrors';
import { IAppState } from '../../../Shared/Feed/Store/Models/IAppState';
import { select, Store } from '@ngrx/store';
import {
  authFeatureSelector,
  validationErrorSelector,
} from '../../../Shared/Feed/Store/selectors';
import { ILoginRequest } from '../../Models/ILoginRequest';
import { loginAction } from '../../../Shared/Feed/Store/actions/login.actions';
import { RouterModule } from '@angular/router';
import { BackendErrorMessagesComponent } from '../../../Shared/Feed/Components/backend-error-messages/backend-error-messages.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BackendErrorMessagesComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public isSubmiting$: Observable<boolean>;
  public backEndErrors$: Observable<IBackEndErrors | null>;

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private initializeValues(): void {
    this.isSubmiting$ = this.store.pipe(select(authFeatureSelector));
    this.backEndErrors$ = this.store.pipe(
      select(validationErrorSelector),
      map((errors) => {
        const { username, ...rest } = errors || {};
        return rest;
      })
    );
  }

  public onSubmit(): void {
    const request: ILoginRequest = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}

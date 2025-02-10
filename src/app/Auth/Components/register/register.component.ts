import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { registerAction } from '../../../Shared/Feed/Store/actions/register.action';
import { Observable } from 'rxjs';
import {
  authFeatureSelector,
  validationErrorSelector,
} from '../../../Shared/Feed/Store/selectors';
import { IAppState } from '../../../Shared/Feed/Store/Models/IAppState';
import { CommonModule } from '@angular/common';
import { IRegisterRequest } from '../../Models/IRegisterRequest';
import { IBackEndErrors } from '../../../Shared/Feed/Models/IBackEndErrors';
import { BackendErrorMessagesComponent } from '../../../Shared/Feed/Components/backend-error-messages/backend-error-messages.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    BackendErrorMessagesComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit, OnDestroy {
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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private initializeValues(): void {
    this.isSubmiting$ = this.store.pipe(select(authFeatureSelector));
    this.backEndErrors$ = this.store.pipe(select(validationErrorSelector));
  }

  public onSubmit(): void {
    const request: IRegisterRequest = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }

  ngOnDestroy(): void {
    this.backEndErrors$ = null;
  }
}

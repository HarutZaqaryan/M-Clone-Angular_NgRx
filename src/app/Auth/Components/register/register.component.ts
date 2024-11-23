import { Component, Inject, OnInit } from '@angular/core';
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
import { authFeatureSelector } from '../../../Shared/Feed/Store/selectors';
import { IAppState } from '../../../Shared/Feed/Store/Models/IAppState';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public isSubmiting$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private authService: AuthService
  ) {}

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
  }

  public onSubmit(): void {
    console.log(this.form.value);
    this.store.dispatch(registerAction(this.form.value));

    this.authService.register(this.form.value).subscribe((response) => {
      console.log(response);
    });

    // With 'articles' also throwing error
    // this.authService.getArticles().subscribe((res) => {
    //   console.log(res);
    // });
  }
}

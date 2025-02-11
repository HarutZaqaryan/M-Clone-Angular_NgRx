import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../Store/Models/IAppState';
import { Observable } from 'rxjs';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../../Store/selectors';
import { CommonModule } from '@angular/common';
import { ICurrentUser } from '../../Models/ICurrentUser';

@Component({
  selector: 'ms-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  protected isLoggedIn$: Observable<boolean | null>;
  protected isAnonymous$: Observable<boolean | null>;
  protected currentUser$: Observable<ICurrentUser | null>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Shared/Feed/Components/header/header.component';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from './Shared/Feed/Store/actions/getCurrentUser.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
}
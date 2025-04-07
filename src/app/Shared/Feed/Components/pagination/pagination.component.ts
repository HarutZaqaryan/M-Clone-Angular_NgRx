import { Component, computed, effect, input } from '@angular/core';
import { range } from '../../Utils';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mc-pagination',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  public total = input<number>(0, { alias: 'totalProps' });
  public limit = input<number>(10, { alias: 'limitProps' });
  public url = input<string>('url', { alias: 'urlProps' });
  public currentPage = input<number>(1, { alias: 'currentPageProps' });
  public pages: number[] = [];

  public pagesCount = computed(() => Math.ceil(this.total() / this.limit()));

  constructor() {
    effect(() => {
      this.pages = range(1, this.pagesCount());
    });
  }
}

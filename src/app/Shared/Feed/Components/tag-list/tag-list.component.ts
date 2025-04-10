import { Component, effect, input } from '@angular/core';
import { PopularTagType } from '../../Models/popularTag.type';

@Component({
  selector: 'mc-tag-list',
  standalone: true,
  imports: [],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss',
})
export class TagListComponent {
  public readonly tags = input<PopularTagType[]>([], { alias: 'tagProps' });
}

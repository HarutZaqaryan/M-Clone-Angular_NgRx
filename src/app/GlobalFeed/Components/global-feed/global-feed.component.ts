import { Component } from '@angular/core';
import { FeedComponent } from '../../../Shared/Feed/Components/feed/feed.component';
import { BannerComponent } from "../../../Shared/Feed/Components/banner/banner.component";

@Component({
  selector: 'ms-global-feed',
  standalone: true,
  imports: [FeedComponent, BannerComponent],
  templateUrl: './global-feed.component.html',
  styleUrl: './global-feed.component.scss',
})
export class GlobalFeedComponent {
  protected apiUrl = '/articles/feed';
}

import { Component } from '@angular/core';
import { FeedComponent } from '../../../Shared/Feed/Components/feed/feed.component';
import { BannerComponent } from '../../../Shared/Feed/Components/banner/banner.component';
import { TagsComponent } from '../../../Shared/Feed/Components/popular-tags/tags.component';
import { FeedTogglerComponent } from "../../../Shared/Feed/Components/feed-toggler/feed-toggler.component";

@Component({
  selector: 'ms-global-feed',
  standalone: true,
  imports: [FeedComponent, BannerComponent, TagsComponent, FeedTogglerComponent],
  templateUrl: './global-feed.component.html',
  styleUrl: './global-feed.component.scss',
})
export class GlobalFeedComponent {
  protected articlesUrl = '/articles';
  protected tagsUrl = '/tags';
}

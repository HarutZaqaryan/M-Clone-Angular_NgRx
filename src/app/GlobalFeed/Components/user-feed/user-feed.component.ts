import { Component } from '@angular/core';
import { BannerComponent } from "../../../Shared/Feed/Components/banner/banner.component";
import { FeedTogglerComponent } from "../../../Shared/Feed/Components/feed-toggler/feed-toggler.component";
import { FeedComponent } from "../../../Shared/Feed/Components/feed/feed.component";
import { TagsComponent } from "../../../Shared/Feed/Components/popular-tags/tags.component";

@Component({
  selector: 'mc-user-feed',
  standalone: true,
  imports: [BannerComponent, FeedTogglerComponent, FeedComponent, TagsComponent],
  templateUrl: './user-feed.component.html',
  styleUrl: './user-feed.component.scss'
})
export class UserFeedComponent {
  protected articlesUrl = '/articles/feed';
  protected tagsUrl = '/tags';
}

import { Component, inject, OnInit } from '@angular/core';
import { BannerComponent } from '../../../Shared/Feed/Components/banner/banner.component';
import { FeedTogglerComponent } from '../../../Shared/Feed/Components/feed-toggler/feed-toggler.component';
import { FeedComponent } from '../../../Shared/Feed/Components/feed/feed.component';
import { TagsComponent } from '../../../Shared/Feed/Components/popular-tags/tags.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mc-tag-feed',
  standalone: true,
  imports: [
    BannerComponent,
    FeedTogglerComponent,
    FeedComponent,
    TagsComponent,
  ],
  templateUrl: './tag-feed.component.html',
  styleUrl: './tag-feed.component.scss',
})
export class TagFeedComponent implements OnInit {
  protected tagsUrl = '/tags';
  protected apiUrl: string = '';
  protected tagName: string = '';

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
}

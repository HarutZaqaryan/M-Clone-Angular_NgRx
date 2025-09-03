/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateArticleService } from './createArticle.service';

describe('Service: CreateArticle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateArticleService]
    });
  });

  it('should ...', inject([CreateArticleService], (service: CreateArticleService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditArticleService } from './editArticle.service';

describe('Service: EditArticle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditArticleService]
    });
  });

  it('should ...', inject([EditArticleService], (service: EditArticleService) => {
    expect(service).toBeTruthy();
  }));
});

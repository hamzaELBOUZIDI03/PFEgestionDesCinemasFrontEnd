import { TestBed } from '@angular/core/testing';

import { CategorieFilmService } from './categorie-film.service';

describe('CategorieFilmService', () => {
  let service: CategorieFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

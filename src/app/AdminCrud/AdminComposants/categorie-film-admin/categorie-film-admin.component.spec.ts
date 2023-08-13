import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFilmAdminComponent } from './categorie-film-admin.component';

describe('CategorieFilmAdminComponent', () => {
  let component: CategorieFilmAdminComponent;
  let fixture: ComponentFixture<CategorieFilmAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieFilmAdminComponent]
    });
    fixture = TestBed.createComponent(CategorieFilmAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

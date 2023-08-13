import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmAdminComponent } from './film-admin.component';

describe('FilmAdminComponent', () => {
  let component: FilmAdminComponent;
  let fixture: ComponentFixture<FilmAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmAdminComponent]
    });
    fixture = TestBed.createComponent(FilmAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceAdminComponent } from './seance-admin.component';

describe('SeanceAdminComponent', () => {
  let component: SeanceAdminComponent;
  let fixture: ComponentFixture<SeanceAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeanceAdminComponent]
    });
    fixture = TestBed.createComponent(SeanceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

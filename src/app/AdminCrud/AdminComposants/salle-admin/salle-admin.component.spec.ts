import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleAdminComponent } from './salle-admin.component';

describe('SalleAdminComponent', () => {
  let component: SalleAdminComponent;
  let fixture: ComponentFixture<SalleAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalleAdminComponent]
    });
    fixture = TestBed.createComponent(SalleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

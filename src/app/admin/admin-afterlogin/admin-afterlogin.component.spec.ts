import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAfterloginComponent } from './admin-afterlogin.component';

describe('AdminAfterloginComponent', () => {
  let component: AdminAfterloginComponent;
  let fixture: ComponentFixture<AdminAfterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAfterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAfterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

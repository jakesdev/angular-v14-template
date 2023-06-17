import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingChangePasswordComponent } from './change-password.component';

describe('SettingChangePasswordComponent', () => {
  let component: SettingChangePasswordComponent;
  let fixture: ComponentFixture<SettingChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingChangePasswordComponent]
    });
    fixture = TestBed.createComponent(SettingChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

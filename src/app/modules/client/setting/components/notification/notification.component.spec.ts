import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingNotificationComponent } from './notification.component';

describe('SettingNotificationComponent', () => {
  let component: SettingNotificationComponent;
  let fixture: ComponentFixture<SettingNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingNotificationComponent]
    });
    fixture = TestBed.createComponent(SettingNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAccountComponent } from './account.component';

describe('SettingAccountComponent', () => {
  let component: SettingAccountComponent;
  let fixture: ComponentFixture<SettingAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingAccountComponent]
    });
    fixture = TestBed.createComponent(SettingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

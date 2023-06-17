import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HEREMapComponent } from './HERE-map.component';

describe('HEREMapComponent', () => {
  let component: HEREMapComponent;
  let fixture: ComponentFixture<HEREMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HEREMapComponent]
    });
    fixture = TestBed.createComponent(HEREMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

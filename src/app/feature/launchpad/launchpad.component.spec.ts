import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadComponent } from './launchpad.component';

describe('LaunchpadComponent', () => {
  let component: LaunchpadComponent;
  let fixture: ComponentFixture<LaunchpadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchpadComponent],
    });
    fixture = TestBed.createComponent(LaunchpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

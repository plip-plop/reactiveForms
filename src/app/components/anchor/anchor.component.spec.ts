import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorComponent } from './anchor.component';

describe('AnchorComponent', () => {
  let component: AnchorComponent;
  let fixture: ComponentFixture<AnchorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnchorComponent]
    });
    fixture = TestBed.createComponent(AnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDynamicComponent } from './input-dynamic.component';

describe('InputDynamicComponent', () => {
  let component: InputDynamicComponent;
  let fixture: ComponentFixture<InputDynamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputDynamicComponent]
    });
    fixture = TestBed.createComponent(InputDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIputComponent } from './form-iput.component';

describe('FormIputComponent', () => {
  let component: FormIputComponent;
  let fixture: ComponentFixture<FormIputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormIputComponent]
    });
    fixture = TestBed.createComponent(FormIputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

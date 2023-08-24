import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputType } from 'src/app/shared/model/input-type';

@Component({
  selector: 'app-input-dynamic',
  templateUrl: './input-dynamic.component.html',
  styleUrls: ['./input-dynamic.component.scss']
})
export class InputDynamicComponent {

  @Input() inputType: InputType = { name: 'input-autenticacao' }
  @Input() placeHolder: any;
  @Input() tipo: any;
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() readonly: boolean = false;
  @Input() nameFormGroup: FormGroup = this.formBuilder.group({})
  @Input() isInvalid: boolean = false;
  @Input() maxLenght: any;
  isInputActive: boolean = false;

  @Output() validTouched: EventEmitter<string> = new EventEmitter<string>();


  constructor(private formBuilder: FormBuilder) { }



  // ... outros métodos e propriedades do componente ...


  onInputFocus() {
    this.isInputActive = true;
  }

  onInputBlur() {
    this.isInputActive = false;
  }

  inputTrim(value: string, name: string): void {
    this.nameFormGroup.get(name)?.setValue(value.trim());
  }

  getValidTouched(field: string): void {
    this.validTouched.emit(field)
  }
}

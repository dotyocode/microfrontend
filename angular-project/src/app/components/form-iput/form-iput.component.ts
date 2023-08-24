import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as pubsub from 'pubsub-js';

@Component({
  selector: 'app-form-iput',
  templateUrl: './form-iput.component.html',
  styleUrls: ['./form-iput.component.scss']
})
export class FormIputComponent {



  formGroup: any = this.formBuilder.group({
    valor: [null],
  })

  constructor(private formBuilder: FormBuilder,
  ) {

  }

  sendMessageToAngular = (valor: number) => {
    pubsub.publish('enviarValor', { data: valor, active: true });
  };

  enviar(valor: number) {
    this.sendMessageToAngular(valor)
  }

  validTouch(field: string) {
    if (!this.formGroup || this.formGroup.get(field)) {
      return false
    }
    return !this.formGroup.get(field).valid && this.formGroup.get(field).touched;
  }

}

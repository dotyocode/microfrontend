import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDynamicComponent } from './input-dynamic.component';

@NgModule({
  declarations: [InputDynamicComponent],
  exports: [InputDynamicComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InputDynamicModule { }

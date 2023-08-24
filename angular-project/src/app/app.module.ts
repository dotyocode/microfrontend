import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomesComponent } from './homes/homes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormIputComponent } from './components/form-iput/form-iput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDynamicComponent } from './components/input-dynamic/input-dynamic.component';
import { InputDynamicModule } from './components/input-dynamic/input-dynamic.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { PlanetCardComponent } from './components/planet-card/planet-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    FormIputComponent,
    PlanetCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputDynamicModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule,
    ToastNoAnimation,
    ToastNoAnimationModule.forRoot(),
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

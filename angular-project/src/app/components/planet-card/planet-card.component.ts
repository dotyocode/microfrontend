import { Component, OnInit } from '@angular/core';
import * as pubsub from 'pubsub-js';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent  implements OnInit {

  dataMessage: any = {};
  subscription: any;
  planetIdResponse: any
  planetImagemId: any;
  imgPlaneta:string = ''
  ativo = false;
  errorInterno = false

  constructor() {}

  ngOnInit(): void {
    this.subscription = pubsub.subscribe('enviarValorPlanetas', (topic: string, data: any) => {
      this.dataMessage = data.data;
      this.ativo = data.active;
      this.planetIdResponse = data.data
      this.ativo = data.ativo
      this.imgPlaneta = data.imgPlaneta
    });

    this.subscription = pubsub.subscribe('esconderPlaneta', (topic: string, data: any) => {
      this.planetIdResponse = data.data;
      this.ativo = data.active;
    });
  }

}

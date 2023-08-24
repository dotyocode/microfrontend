import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import * as pubsub from 'pubsub-js';
import { StarWarsServiceService } from '../shared/services/star-wars-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  dataMessage: any = {};
  subscription: any;
  planetIdResponse: any
  planetImagemId: any;
  imgPlaneta:string = ''
  ativo = false;
  errorInterno = false

  constructor(private starWarsServiceService: StarWarsServiceService,
    private changeDetectorRef: ChangeDetectorRef,
    private toastr: ToastrService
  ) {

  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
    console.log(this.toastr)
  }

  ngOnInit(): void {
    // this.getListaPlanetasComId(2)
    this.subscription = pubsub.subscribe('enviarValor', (topic: string, data: any) => {
      this.dataMessage = data.data;
      this.ativo = data.active;
      this.getListaPlanetasComId(this.dataMessage);
    });
  }

  getListaPlanetasComId(id: number) {
    this.starWarsServiceService.getListaPlanetasComId(id).subscribe((response: any) => {
      this.planetIdResponse = response;
      this.imgPlaneta =  `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
      this.sendMessageToAngular(this.planetIdResponse, this.imgPlaneta)
      this.changeDetectorRef.detectChanges(); // Atualize a visualização
      this.ativo = false;
    }, error => {
      console.error(error)
      this.ativo = false;
      this.errorInterno = true
      setTimeout(() => {
        this.errorInterno = false
      }, 2000)
    })
  }

  sendMessageToAngular = (valor: any, imgPlaneta: string) => {
    pubsub.publish('enviarValorPlanetas', { data: valor, active: true, imgPlaneta: imgPlaneta });
  };

  return() {
    this.ativo = false;
    this.planetIdResponse = null
   this.sendMessageToPlanetEsconder(this.ativo, this.planetIdResponse)
  }

  sendMessageToPlanetEsconder = (ativo: boolean, planetIdResponse: any) => {
    pubsub.publish('esconderPlaneta', { data: planetIdResponse, active: ativo });
  };


}

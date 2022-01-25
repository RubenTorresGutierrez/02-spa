import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from "../../services/heroes.service";
import {Heroe} from "../../interfaces/heroe";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  //Atributtes
  heroe = {} as Heroe;


  constructor(private activatedRoute: ActivatedRoute, private _heroesService:HeroesService) {

    this.activatedRoute.params.subscribe(parametros => {
      this.heroe = this._heroesService.getHeroe(parametros['nombre']);
    })

  }

  ngOnInit(): void {
  }

}

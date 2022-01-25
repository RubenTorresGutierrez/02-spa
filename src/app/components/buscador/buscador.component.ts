import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Heroe} from "../../interfaces/heroe";
import {HeroesService} from "../../services/heroes.service";


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  //Atributtes
  heroes:Heroe[];



  constructor(private router:Router, private activatedRoute: ActivatedRoute, private _heroesService:HeroesService) {

    this.heroes = []
    this.activatedRoute.params.subscribe(parametros => {
      this.heroes = this._heroesService.buscarHeroes(parametros['texto'])
    })

  }

  ngOnInit(): void {
  }





}

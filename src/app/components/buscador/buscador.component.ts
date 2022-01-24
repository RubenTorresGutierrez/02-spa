import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: []
})
export class BuscadorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private _heroesService:HeroesService) {

    this.activatedRoute.params.subscribe(parametros => {
      console.log(this._heroesService.buscarHeroes(parametros['texto']))
    })

  }

  ngOnInit(): void {
  }

}

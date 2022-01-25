import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  //Atributtes
  heroes:Heroe[];
  LONGITUD_TEXTO:number= 350;

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private _heroesService:HeroesService) {

    this.heroes = []
    this.activatedRoute.params.subscribe(parametros => {
      this.heroes = this._heroesService.buscarHeroes(parametros['texto'])
    })

  }

  ngOnInit(): void {
  }

  verHeroe(id:number){

    this.router.navigate(['/heroe', id]);

  }

  puntosSuspensivos(i:number):string {

    if (this.heroes[i].bio.length > this.LONGITUD_TEXTO)
      return '...';
    return ' ';

  }

}

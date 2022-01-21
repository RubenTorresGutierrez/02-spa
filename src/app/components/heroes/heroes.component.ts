import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from "../../services/heroes.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  //Atributtes
  heroes:Heroe[];
  LONGITUD_TEXTO:number= 350;

  constructor(private _heroesService:HeroesService, private router:Router) {

    this.heroes = []

  }

  verHeroe(id:number){

    this.router.navigate(['/heroe', id]);

  }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();

  }

  puntosSuspensivos(i:number):string {
    if (this.heroes[i].bio.length > this.LONGITUD_TEXTO)
      return '...';
    return '';
  }

}

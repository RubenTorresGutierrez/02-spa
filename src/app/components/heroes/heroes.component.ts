import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  //Atributtes
  private heroes:Heroe[]

  constructor(private _heroesService:HeroesService) {

    this.heroes = []

  }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes)

  }

}

import {Component, Input, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {Heroe} from "../../interfaces/heroe";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!:Heroe;
  LONGITUD_TEXTO:number= 350;



  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  puntosSuspensivos():string {

    if (this.heroe.bio.length > this.LONGITUD_TEXTO)
      return '...';
    return ' ';

  }
  verHeroe(){


    this.router.navigate(['/heroe', this.heroe.nombre]);

  }
}

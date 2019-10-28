import { Component, OnInit } from '@angular/core';
import {SuperheroesService} from '../../services/superheroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public superhero = [];

  constructor(public heroes: SuperheroesService, public route: ActivatedRoute) { }

  async ngOnInit() {
    const response = await this.heroes.show(this.route.snapshot.params.id);

    const condition: boolean = response.hasOwnProperty('data');

    if (!!condition) {
      this.superhero = response.data;

      if( this.superhero.firstAppearance !== null ) {
        const firstAppearance = new Date(this.superhero.firstAppearance);
        this.superhero.firstAppearance = firstAppearance.toLocaleDateString();
      }
    }
  }

}

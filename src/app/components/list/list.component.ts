import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from '../../services/superheroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list = [];

  constructor(public heroes: SuperheroesService) { }

  async ngOnInit() {
    const response = await this.heroes.list();

    const condition: boolean = response.hasOwnProperty('data');

    if (!!condition) {
      this.list = response.data;
    }
  }
}

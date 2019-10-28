import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from '../../services/superheroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list = [];
  public query = '';

  constructor(public heroes: SuperheroesService) { }

  async ngOnInit() {
    this.search();
  }

  async search() {
    const response = await this.heroes.list(this.query);

    const condition: boolean = response.hasOwnProperty('data');

    if (!!condition) {
      this.list = response.data;
    }
  }
}

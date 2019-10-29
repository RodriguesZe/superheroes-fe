import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from '../../services/superheroes.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public superhero = [];
  public disable: boolean;
  public superheroData: FormGroup = new FormGroup({
    realName: new FormControl(),
    heroName: new FormControl(),
    publisher: new FormControl(),
    firstAppearance: new FormControl(),
  });

  constructor(public heroes: SuperheroesService, public route: ActivatedRoute) { }

  async ngOnInit() {
    this.disable = !this.route.snapshot.data.edit;

    this.show();
  }

  async show() {
    const response = await this.heroes.show(this.route.snapshot.params.id);

    const condition: boolean = response.hasOwnProperty('data');

    if (!!condition) {
      this.superhero = response.data;

      if (this.superhero.hasOwnProperty('firstAppearance') && this.superhero.firstAppearance !== null) {
        this.superhero.firstAppearance = this.parseDate(this.superhero.firstAppearance);
      }

      this.superheroData.patchValue(this.superhero);

      if (this.disable === true) {
        this.superheroData.disable();
      }
    }
  }

  async saveSuperhero() {
    const payload = this.superheroData.value;
    
    payload.firstAppearance = this.parseFullDate(payload.firstAppearance);

    const response = await this.heroes.update(this.route.snapshot.params.id, payload);

    this.toggleDisable();
  }

  public toggleDisable() {
    this.disable = !this.disable;

    if (this.disable === true) {
      this.superheroData.disable();
    } else {
      this.superheroData.enable();
    }
  }

  private parseFullDate(dateField: string) {
    const dateToParse = new Date(dateField);

    const date = this.parseDateObject(dateToParse);

    const hours = ('0' + dateToParse.getHours()).slice(-2);
    const minutes = ('0' + dateToParse.getMinutes()).slice(-2);
    const seconds = ('0' + dateToParse.getSeconds()).slice(-2);

    return `${date} ${hours}:${minutes}:${seconds}`;
  }

  private parseDate(dateField: string) {
    const dateToParse = new Date(dateField);

    return this.parseDateObject(dateToParse);
  }

  private parseDateObject(dateObject: Date) {
    const year = dateObject.getFullYear();

    const fixedMonth = dateObject.getMonth() + 1;
    const month = ('0' + fixedMonth).slice(-2);
    const day = ('0' + dateObject.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }
}

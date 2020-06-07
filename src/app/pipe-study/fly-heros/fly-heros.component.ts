import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fly-heros',
  templateUrl: './fly-heros.component.html',
  styleUrls: ['./fly-heros.component.scss']
})
export class FlyHerosComponent {

  heroes: any[] = [];
  canFly = true;
  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
  }

  reset() { this.heroes = this.heroes.slice(); }

}

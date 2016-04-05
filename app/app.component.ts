import {Component} from 'angular2/core';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    template:`
      <h1>{{title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="#hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <hero-detail [hero]="selectedHero"></hero-detail>
    `,
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent {
    heroes = this.getHeroes();

    title = 'Tour of Heroes';
    selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero; }

    constructor(private _heroService: HeroService) { }

    getHeroes() {
        return this._heroService.getHeroes();
    }
}
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }

    heroes: Hero[];
    selectedHero: Hero;

    ngOnInit() : void {
      this.getHeroes();
    }

    getHeroes(): void {
      this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
  }

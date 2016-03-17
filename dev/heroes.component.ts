import {Component} from 'angular2/core';
import {HeroDetailComponent} from "./hero-detail.component";
import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {OnInit} from "angular2/core";
import {Router} from "angular2/router";

@Component({
    selector: 'heroes',
    templateUrl: 'dev/heroes.component.html',
    //directives: [HeroDetailComponent],
    styleUrls:['src/css/heroes.component.css'],
})

export class HeroesComponent implements OnInit {
    //public title = 'Tour Of Heroes';
    public heroes : Hero[];
    selectedHero : Hero;

    constructor(private _heroService : HeroService, private _router : Router){
    }

    onSelect(hero : Hero){
        this.selectedHero = hero;
    }

    gotoDetail(){ // hero : Hero , could use with parameter also
        let link = ['HeroDetail', {id: this.selectedHero.id}];
        this._router.navigate(link);

    }

    // lifecycle
    ngOnInit(){
        // if there was more logic we could call another function here instead of inline
        // this.heroes = this._heroService.getHeroes();
        this.getHeroes();
    }

    private getHeroes():void {
        // separated into new function to show how to deal with promises
        this._heroService.getHeroes().then(heroList => this.heroes = heroList);
    }
}



import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {RouteParams} from "angular2/router";

@Component({
    selector: 'hero-detail',
    templateUrl: 'dev/hero-detail.component.html',
    //inputs: ['hero'] // no longer need as this is coming from the routeParams and being used by service
    styleUrls: ['src/css/hero-detail.component.css'],
})

export class HeroDetailComponent implements OnInit {
    hero : Hero;
    public testThing : string = 'hello';

    constructor(private _heroService : HeroService, private _routeParams : RouteParams) {
    }

    // lifecycle override
    ngOnInit() {
        // use let, although var seems to work too
        let id = +this._routeParams.get('id'); // the '+' here converts the routeParams string to a number
        this._heroService.getHero(id).then(hero => this.hero = hero);

    }

    // back
    goBack() {
        window.history.back();
    }

}
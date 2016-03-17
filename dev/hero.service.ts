import {Injectable} from "angular2/core";
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";

@Injectable()
export class HeroService {
    getHeroes(){
        return Promise.resolve(HEROES);
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }

    // for dashboard, splice list here in service not on front end
    getTopHeroes(){
        return Promise.resolve(HEROES.slice(1, 5));
    }

    // get specific hero
    getHero(id : number){
        return Promise.resolve(HEROES).then(
                heroes => heroes.filter(hero => hero.id === id)[0]  // get just the first match, should only be one here anyway
        );
    }
}


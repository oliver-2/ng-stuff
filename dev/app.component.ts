import {Component} from 'angular2/core';
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";

@Component({
    selector: 'app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS],
    styleUrls: ['src/css/app.component.css']

})

@RouteConfig([
    {
        path: '/heroes', name: 'Heroes', component: HeroesComponent
    },
    {   path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
    {
        path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true
    }
])

export class AppComponent {
    public title : string = "Tour of Heroes";

    //constructor(private _heroService : HeroService){
    //}


}
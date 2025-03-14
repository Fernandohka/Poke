import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "pokemon",
        component: PokedexPageComponent
    },
    {
        path: "team",
        component: TeamPageComponent
    }
];

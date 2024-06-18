import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        data:{
            title:'Main Page'
        },
        loadComponent:()=>import('./home-page/home/home.component').then(c=>c.HomeComponent)
    },
    {
        path:'test',
        loadComponent:()=>import('./home-page/home/home.component').then(c=>c.HomeComponent)
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    }
];

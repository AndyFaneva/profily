import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InfoComponent } from './info/info.component';


export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'portfolio',component:PortfolioComponent},
    {path:'info',component:InfoComponent}
];

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../../home/home.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);

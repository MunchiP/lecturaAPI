import { Routes } from '@angular/router';
import { InformacionComponent } from './informacion/informacion.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [

    {path: 'Informacion' , component: InformacionComponent},


    {path: '', component: PrincipalComponent},
    {path: '**', component: PrincipalComponent},

];

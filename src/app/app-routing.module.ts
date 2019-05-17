import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelComponent } from './painel/painel.component';
import { DigitalComponent } from './digital/digital.component';
import { ReceivableComponent } from './receivable/receivable.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'painel',
        component: PainelComponent
    },
    {
        path: 'digital',
        component: DigitalComponent
    },
    {
        path: 'receivable',
        component: ReceivableComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

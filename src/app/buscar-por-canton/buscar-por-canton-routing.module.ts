import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPorCantonPage } from './buscar-por-canton.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPorCantonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarPorCantonPageRoutingModule {}

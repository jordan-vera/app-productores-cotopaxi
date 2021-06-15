import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPorCategoriaPageRoutingModule } from './buscar-por-categoria-routing.module';

import { BuscarPorCategoriaPage } from './buscar-por-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPorCategoriaPageRoutingModule
  ],
  declarations: [BuscarPorCategoriaPage]
})
export class BuscarPorCategoriaPageModule {}

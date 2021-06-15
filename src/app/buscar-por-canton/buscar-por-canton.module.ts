import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPorCantonPageRoutingModule } from './buscar-por-canton-routing.module';

import { BuscarPorCantonPage } from './buscar-por-canton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPorCantonPageRoutingModule
  ],
  declarations: [BuscarPorCantonPage]
})
export class BuscarPorCantonPageModule {}

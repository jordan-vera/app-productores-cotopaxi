import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductorShowPageRoutingModule } from './productor-show-routing.module';

import { ProductorShowPage } from './productor-show.page';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductorShowPageRoutingModule,
    GoogleMapsModule,
    NgxSpinnerModule
  ],
  declarations: [ProductorShowPage]
})
export class ProductorShowPageModule {}

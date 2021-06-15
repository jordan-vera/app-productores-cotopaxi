import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ActividadesService } from './servicios/actividades.service';
import { AdministradorService } from './servicios/administrador.service';
import { CantonService } from './servicios/canton.service';
import { ContactoService } from './servicios/contacto.service';
import { GaleriaService } from './servicios/galeria.service';
import { ProductoresService } from './servicios/productores.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ActividadesService,
    AdministradorService,
    CantonService,
    ContactoService,
    GaleriaService,
    ProductoresService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

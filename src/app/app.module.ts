import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';

import { ActividadesService } from './servicios/actividades.service';
import { AdministradorService } from './servicios/administrador.service';
import { CantonService } from './servicios/canton.service';
import { ContactoService } from './servicios/contacto.service';
import { GaleriaService } from './servicios/galeria.service';
import { ProductoresService } from './servicios/productores.service';
import { VisitasService } from './servicios/visitas.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,NgxSpinnerModule, BrowserAnimationsModule, GoogleMapsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ActividadesService,
    AdministradorService,
    CantonService,
    ContactoService,
    GaleriaService,
    ProductoresService,
    VisitasService,
    LaunchNavigator
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

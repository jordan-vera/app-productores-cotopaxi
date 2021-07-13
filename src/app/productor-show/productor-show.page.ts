import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Galeria } from '../modelo/Galeria';
import { GaleriaService } from '../servicios/galeria.service';
import { global } from '../servicios/Global';
import { ProductoresService } from '../servicios/productores.service';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { take } from 'rxjs/operators';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-productor-show',
  templateUrl: './productor-show.page.html',
  styleUrls: ['./productor-show.page.scss'],
})
export class ProductorShowPage implements OnInit {
  public center1 = { lat: -0.903170592, lng: -78.868795865 };
  markerOptions1 = { draggable: true };
  markerPositions1: google.maps.LatLngLiteral[] = [];
  public zoom1 = 10;
  display1?: google.maps.LatLngLiteral;
  public posicion1: any = '';

  public urlImage: string = '';
  public idproductor: number = 0;
  public productor: any;
  public nombre: string = '';
  public descripcion: string = '';
  public canton: string = '';
  public actividad: string = '';
  public telefono: string = '';
  public celular: string = '';
  public direccion: string = '';
  public email: string = '';
  public galeria: Galeria[];
  public urlGaleria: string = global.urlImage;
  public longitud: string = '';
  public latitud: string = '';
  public url: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _productoresService: ProductoresService,
    private _galeriaService: GaleriaService,
    private spinner: NgxSpinnerService,
    private readonly _geolocation$: GeolocationService,
    private launchNavigator: LaunchNavigator,
  ) {
    this._route.params.subscribe((params: Params) => {
      this.idproductor = params.idproductor;
      this.getGaleria();
    });
  }

  ngOnInit() {
    this.url = 'https%3A//productorescotopaxi.com/index/productor/' + this.idproductor;
  }

  ngAfterViewInit() {
    this.getProductor();
  }

  IrAhMapaNavegacion() {
    this.spinner.show();
    this._geolocation$.pipe(take(1)).subscribe(
      position => {
        this.spinner.hide();
        let options: LaunchNavigatorOptions = {
          app: this.launchNavigator.APP.GOOGLE_MAPS,
          start: [position.coords.latitude, position.coords.longitude],
        };
        this.launchNavigator.navigate(this.latitud + ',' + this.longitud, options).then(
          success => {
          }, error => {
          }
        )
      }
    );
  }

  compartirFacebook(): void {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + this.url, '_blank');
  }

  compartirWhatsApp(): void {
    window.open('https://api.whatsapp.com/send?text=*' + encodeURIComponent(this.nombre) + '*%20%0A*Cantón:*%20' + this.canton + '%20%0A' +
      this.url, '_blank');
  }

  getGaleria(): void {
    this.spinner.show();
    this._galeriaService.getOne(this.idproductor).subscribe(
      response => {
        this.spinner.hide();
        this.galeria = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  getProductor(): void {
    this.spinner.show();
    this._productoresService.getOne(this.idproductor).subscribe(
      response => {
        this.spinner.hide();
        this.productor = response.response;
        this.urlImage = global.urlImage + this.productor.portada;
        this.nombre = this.productor.nombre;
        this.descripcion = this.productor.descripcion;
        this.canton = this.productor.nombrecanton;
        this.actividad = this.productor.descripcion_actividad;
        this.telefono = this.productor.telefono;
        this.celular = this.productor.celular;
        this.direccion = this.productor.direccion;
        this.email = this.productor.email;
        this.longitud = this.productor.longitud;
        this.latitud = this.productor.latitud;

        this.center1 = { lat: +this.latitud, lng: +this.longitud };
        this.markerPositions1 = [{ lat: +this.latitud, lng: +this.longitud }]
      }, error => {
        this.spinner.hide();
        console.log(error)
      }
    )
  }

}

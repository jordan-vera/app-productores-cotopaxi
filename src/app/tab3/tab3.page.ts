import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actividades } from '../modelo/Actividades';
import { ActividadesService } from '../servicios/actividades.service';
import { global } from '../servicios/Global';
import { ProductoresService } from '../servicios/productores.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public actividades: Actividades[];
  public idactividad: string = '';
  public productores: any[];
  public urlPortada: string = global.urlImage;
  public estado : boolean = true;

  constructor(
    private _actividadesService: ActividadesService,
    private _productoresService: ProductoresService,
    private spinner: NgxSpinnerService
  ) {
    this.mostrarActividades();
   }

  mostrarActividades(): void {
    this.spinner.show();
    this._actividadesService.getAll().subscribe(
      response => {
        this.spinner.hide();
        this.actividades = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  getproductores(): void {
    this.spinner.show();
    this._productoresService.getporActividades(+this.idactividad).subscribe(
      response => {
        this.spinner.hide();
        this.productores = response.response;
        if(response.response) {
          this.estado = true;
        } else {
          this.estado = false;
        }
      }, error => {
        this.spinner.hide();
        console.log(error)
      }
    )
  }

}

import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Canton } from '../modelo/Canton';
import { Productor } from '../modelo/Productor';
import { global } from '../servicios/Global';
import { ProductoresService } from '../servicios/productores.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public productores: Productor[];
  public canton: Canton = new Canton(0,'');
  public idcanton: string = '7';
  public urlPortada: string = global.urlImage;
  public estado : boolean = true;

  constructor(
    private _productoresService: ProductoresService,
    private spinner: NgxSpinnerService
  ) {
    this.getProductores();
  }

  getProductores(): void {
    this.spinner.show();
    this._productoresService.getporCanton(+this.idcanton).subscribe(
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
        console.log(error);
      }
    )
  }

  

}

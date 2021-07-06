import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CantonService } from '../servicios/canton.service';
import { global } from '../servicios/Global';
import { ProductoresService } from '../servicios/productores.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public busqueda: string = '';
  public productores: any[];
  public urlPortada: string = global.urlImage;

  constructor(
    private _route: ActivatedRoute,
    private _productoresService: ProductoresService,
    private _cantonService: CantonService,
    private spinner: NgxSpinnerService
  ) {
    this._route.params.subscribe((params: Params) => {
      this.busqueda = params.search;
      this.getProductores();
    });
  }

  ngOnInit(): void {
  }

  getProductores(): void {
    this.spinner.show();
    this._productoresService.getporNombre(this.busqueda).subscribe(
      response => {
        this.spinner.hide();
        this.productores = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

}

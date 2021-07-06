import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Productor } from '../modelo/Productor';
import { global } from '../servicios/Global';
import { ProductoresService } from '../servicios/productores.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  public productoresLamana: Productor[];
  public productoresLatacunga: Productor[];
  public productorespangua: Productor[];
  public productorespijili: Productor[];
  public productoressalcedo: Productor[];
  public productoressaquisili: Productor[];
  public productoressigchos: Productor[];
  public urlPortada: string = global.urlImage;

  public cantLaMana: number = 0;
  public cantLatacunga: number = 0;
  public cantPangua: number = 0;
  public cantPujili: number = 0;
  public cantSalcedo: number = 0;
  public cantSaquisili: number = 0;
  public cantSigchos: number = 0;
  public buscartxt: string = '';

  constructor(
    private _productoresService: ProductoresService,
    private _router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getLaMana();
  }

  buscar(): void {
    if (this.buscartxt != '') {
      this._router.navigate(['/tabs/search', this.buscartxt]);
    }
  }

  getLaMana(): void {
    this.spinner.show();
    this._productoresService.getporCanton(7).subscribe(
      response => {
        this.spinner.hide();
        this.productoresLamana = response.response;
        if (response.response) {
          this.cantLaMana = this.productoresLamana.length;
        }
        this.getLatacunga();
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  getLatacunga(): void {
    this._productoresService.getporCanton(1).subscribe(
      response => {
        this.productoresLatacunga = response.response;
        if (response.response) {
          this.cantLatacunga = this.productoresLatacunga.length;
        }
        this.getPangua();
      }, error => {
        console.log(error);
      }
    )
  }

  getPangua(): void {
    this._productoresService.getporCanton(2).subscribe(
      response => {
        this.productorespangua = response.response;
        if (response.response) {
          this.cantPangua = this.productorespangua.length;
        }
        this.getPujili();
      }, error => {
        console.log(error);
      }
    )
  }

  getPujili(): void {
    this._productoresService.getporCanton(5).subscribe(
      response => {
        this.productorespijili = response.response;
        if (response.response) {
          this.cantPujili = this.productorespijili.length;
        }
        this.getSalcedo();
      }, error => {
        console.log(error);
      }
    )
  }

  getSalcedo(): void {
    this._productoresService.getporCanton(6).subscribe(
      response => {
        this.productoressalcedo = response.response;
        if (response.response) {
          this.cantSalcedo = this.productoressalcedo.length;
        }
        this.getSaquisili();
      }, error => {
        console.log(error);
      }
    )
  }

  getSaquisili(): void {
    this._productoresService.getporCanton(3).subscribe(
      response => {
        this.productoressaquisili = response.response;
        if (response.response) {
          this.cantSaquisili = this.productoressaquisili.length;
        }
        this.getSigchos();
      }, error => {
        console.log(error);
      }
    )
  }

  getSigchos(): void {
    this._productoresService.getporCanton(4).subscribe(
      response => {
        this.productoressigchos = response.response;
        if (response.response) {
          this.cantSigchos = this.productoressigchos.length;
        }
      }, error => {
        console.log(error);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    private _cantonService: CantonService
  ) {
    this._route.params.subscribe((params: Params) => {
      this.busqueda = params.search;
      this.getProductores();
    });
  }

  ngOnInit(): void {
  }

  getProductores(): void {
    this._productoresService.getporNombre(this.busqueda).subscribe(
      response => {
        this.productores = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

}

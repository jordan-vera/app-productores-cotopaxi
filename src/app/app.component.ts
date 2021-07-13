import { Component } from '@angular/core';
import { Visita } from './modelo/Visitas';
import { Fecha } from './servicios/fecha.service';
import { VisitasService } from './servicios/visitas.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public visita: Visita;

  constructor(
    private _visitaService: VisitasService
  ) {
    this.addVisita();
  }

  addVisita(): void {
    this.visita = new Visita(0,Fecha.fechaActual(), Fecha.horaActual(), 'Plataforma movil');
    this._visitaService.create(this.visita).subscribe(
      response => {

      }, error => {
        console.log(error);
      }
    )
  }
}

export class Visita {

    public idvisita: number;
    public fecha: string;
    public hora: string;
    public plataforma: string;

    constructor(
        idvisita: number,
        fecha: string,
        hora: string,
        plataforma: string
    ) {
        this.idvisita = idvisita;
        this.fecha = fecha;
        this.hora = hora;
        this.plataforma = plataforma;
    }
}

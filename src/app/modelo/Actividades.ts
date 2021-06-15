export class Actividades {

    public idactividad: number;
    public descripcion_actividad: string;

    constructor(
        idactividad: number,
        descripcion_actividad: string
    ) {
        this.idactividad = idactividad;
        this.descripcion_actividad = descripcion_actividad;
    }
}
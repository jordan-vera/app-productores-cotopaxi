export class Productor {

    public idproductor: number;
    public idcanton: number;
    public idcontacto: number;
    public idactividad: number;
    public nombre: string;
    public descripcion: string;
    public portada: string;
    public fecha_registro: string;
    public longitud: string;
    public latitud: string;
    public direccion: string;
    public nombrecanton: string;

    public file: any;

    constructor(
        idproductor: number,
        idcanton: number,
        idcontacto: number,
        idactividad: number,
        nombre: string,
        descripcion: string,
        portada: string,
        fecha_registro: string,
        longitud: string,
        latitud: string,
        direccion: string,
        file: any,
        nombrecanton?: string,
    ) {
        this.idproductor = idproductor;
        this.idcanton = idcanton;
        this.idcontacto = idcontacto;
        this.idactividad = idactividad;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.portada = portada;
        this.fecha_registro = fecha_registro;
        this.longitud = longitud;
        this.latitud = latitud;
        this.direccion = direccion;
        this.file = file;
        this.nombrecanton = nombrecanton;
    }
}
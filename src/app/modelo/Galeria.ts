export class Galeria {

    public idgaleria: number;
    public idproductor: number;
    public imagen: string;

    public file: any;

    constructor(
        idgaleria: number,
        idproductor: number,
        imagen: string,
        file: any
    ){
        this.idgaleria = idgaleria;
        this.idproductor = idproductor;
        this.imagen = imagen;
        this.file = file;
    }
}
export class Contacto {

    public idcontacto: number;
    public telefono: string;
    public celular: string;
    public email: string;

    constructor(
        idcontacto: number,
        telefono: string,
        celular: string,
        email: string
    ) {
        this.idcontacto = idcontacto;
        this.telefono = telefono;
        this.celular = celular;
        this.email = email;
    }
}
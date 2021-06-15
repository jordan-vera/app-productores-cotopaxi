export class Administrador {

    public idadmin: number;
    public user: string;
    public clave: string;

    constructor(
        idadmin: number,
        user: string,
        clave: string
    ) {
        this.idadmin = idadmin;
        this.user = user;
        this.clave = clave;
    }
}
import { Sucursal } from "./sucursal";

export class Empresa{
    name!:string;
    ruc!:string;
    direccion!:string;
    sucursales!:Sucursal[];
}
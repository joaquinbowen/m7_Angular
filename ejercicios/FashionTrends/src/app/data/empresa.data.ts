import { Empresa } from "../models/empresa";

export const stockTotal: number = 12;
export const empresaData: Empresa = {
    name: "Fashion Trends",
    ruc: "172540479001",
    direccion: "Lino Curima y Jose Mansor",
    sucursales: [{
        name: "Sucursal Norte",
        productos: [{
            name: "Falda corta",
            stock: 25,
            categoria: {
                name: "Faldas"
            }
        }, {
            name: "Jean Azul",
            stock: 10,
            categoria: {
                name: "Jeans"
            }
        }]
    }, {
        name: "Sucursal Sur",
        productos: [{
            name: "Camiseta Roja",
            stock: 35,
            categoria: {
                name: "Camisetas"
            }
        }, {
            name: "Jean Negro",
            stock: 15,
            categoria: {
                name: "Jeans"
            }
        }]
    }]
}
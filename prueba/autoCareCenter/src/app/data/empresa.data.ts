import { Empresa } from "../models/empresa";
import { Servicio } from "../models/servicio";

export const empresaData: Empresa = {
    name: "Autocare Center",
    ruc: "1725040479001",
    direccion: "Av. 10 de agosto y Coruña",
    sucursales: [{
        name: "Calderon",
        servicios: [{
            name: "Cambio alternador",
            categoria: {
                name: "Electricidad"
            },
            capacidad: 10
        },
        {
            name: "Cambio bujias",
            categoria: { name: "Mecanica" },
            capacidad: 7
        }]
    },
    {
        name: "San Bartolo",
        servicios: [{
            name: "Cambio bujias",
            categoria: { name: "Mecanica" },
            capacidad: 8
        },
        {
            name: "Revision Frenos",
            categoria: { name: "Diagnostico" },
            capacidad: 9
        }]
    },
    {
        name: "Cumbaya",
        servicios: [
            {
                name: "Alineacion y balanceo",
                categoria: {
                    name: "Mecanica"
                },
                capacidad: 4
            },
            {
                name: "Cambio Pastillas",
                categoria: {
                    name: "Mecanica"
                },
                capacidad: 8
            }
        ]
    },
    {
        name: "Conocoto",
        servicios: [{
            name: "Alineacion y balanceo",
            categoria: {
                name: "Mecanica"
            },
            capacidad: 5
        },
        {
            name: "Cambio de aceite",
            categoria: {
                name: "Mecanica"
            },
            capacidad: 12
        }
        ]
    }]
}
let total = 0;
for (const sucursal of empresaData.sucursales) {
    for (const servicio of sucursal.servicios) {
        total += servicio.capacidad;
    }
}

export const capacidadTotal: number = total;


    
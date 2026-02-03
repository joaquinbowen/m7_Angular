import { Invoice } from "../model/Invoice";

export const invoiceData: Invoice = {
    id: "001",
    company: {
        ruc: "1710028226001",
        name: "Kfc",
        adress: {
            city: "Quito",
            principalStreet: "Cotocollao",
            secondaryStreet: "Polo",
            code: "378"
        }
    },
    customer: {
        id: "1725040789",
        name: "Pablo",
        surname: "Arias",
        adress: {
            city: "Quitooo",
            principalStreet: "Connecticut",
            secondaryStreet: "Manabi",
            code: "378"
        },
    },
    items: [
        {
            id: 1,
            product: {
                id: 10,
                name: "Pan",
                price: 0.25,
                category:{
                    id:1,
                    name:"Trigo"
                },
                description: "Pan de ayer"
            },
            quantity: 14
        },
        {
            id: 2,
            product: {
                id: 7,
                name: "Huevo",
                price: 0.35,
                category:{
                    id:2,
                    name:"Avicola"
                },
                description: "Webo"
            },
            quantity: 8
        }
    ]
}
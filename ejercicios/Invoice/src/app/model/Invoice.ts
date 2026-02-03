import { Company } from "./Company";
import { Customer } from "./Customer";

export class Invoice{
    id!:string;
    company!:Company;
    customer!:Customer;
}
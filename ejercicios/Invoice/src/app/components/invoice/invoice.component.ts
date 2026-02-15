import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/Invoice';
import { CompanyView } from '../company-view/company-view';
import { CustomerView } from '../customer-view/customer-view';
import { InvoiceDetailView } from '../invoice-detail-view/invoice-detail-view';

@Component({
  selector: 'app-invoice',
  imports: [CompanyView, CustomerView, InvoiceDetailView],
  templateUrl: './invoice.html'
})
export class InvoiceComponent implements OnInit {
  //private service:InvoiceService=new InvoiceService();
  invoice!: Invoice;
  constructor(private service: InvoiceService) { }
  ngOnInit(): void {
    this.service.getInvoice().subscribe(
      (data: Invoice) => {
        this.invoice = data;
        console.log("Datos recibidos del backend:", data)
      },
      (error) => {
        console.error("Error al obtener datos del backend:", error);
        console.error("Asegurate que el backend este en el puerto 3000")
      }
    )
  }
}

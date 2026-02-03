import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/Invoice';

@Component({
  selector: 'app-invoice',
  imports: [],
  templateUrl: './invoice.html'
})
export class InvoiceComponent implements OnInit {
  //private service:InvoiceService=new InvoiceService();
  invoice!:Invoice;
  constructor(private service:InvoiceService){}
  ngOnInit(): void {
    this.invoice=this.service.getInvoice();
  }
  
  
}

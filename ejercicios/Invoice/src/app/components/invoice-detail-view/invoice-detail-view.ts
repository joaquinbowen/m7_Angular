import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';
import { InvoiceItemComponent } from '../invoice-item/invoice-item';

@Component({
  selector: 'app-invoice-detail-view',
  imports: [InvoiceItemComponent],
  templateUrl: './invoice-detail-view.html'
})
export class InvoiceDetailView {
  @Input() items!: InvoiceItem[];
}

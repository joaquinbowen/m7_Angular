import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';

@Component({
  selector: 'tr[app-invoice-item]',
  imports: [],
  templateUrl: './invoice-item.html',

})
export class InvoiceItemComponent {
  @Input() item!: InvoiceItem;
}

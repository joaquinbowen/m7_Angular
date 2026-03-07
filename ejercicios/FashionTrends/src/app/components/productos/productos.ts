import { Component, Input } from '@angular/core';
import { Sucursal } from '../../models/sucursal';
import { stockTotal } from '../../data/empresa.data';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  @Input() sucursales!: Sucursal[];
  protected readonly stockTotal = stockTotal;
}

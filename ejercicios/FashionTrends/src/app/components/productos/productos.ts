import { Component, Input } from '@angular/core';
import { Sucursal } from '../../models/sucursal';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  @Input() sucursales!: Sucursal[];

}

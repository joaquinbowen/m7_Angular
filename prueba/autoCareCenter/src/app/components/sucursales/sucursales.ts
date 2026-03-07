import { Component, Input } from '@angular/core';
import { Sucursal } from '../../models/sucursal';
import { capacidadTotal } from '../../data/empresa.data';

@Component({
  selector: 'app-sucursales',
  imports: [],
  templateUrl: './sucursales.html',
  styleUrl: './sucursales.css',
})
export class Sucursales {
  @Input() sucursales!: Sucursal[];
  protected readonly capacidadTotal = capacidadTotal;

  calcularCapacidadSucursal(sucursal: Sucursal): number {
    return sucursal.servicios.reduce((total, servicio) => total + servicio.capacidad, 0);
  }
}

import { Component, Input } from '@angular/core';
import { Empresa } from '../../models/empresa';

@Component({
  selector: 'app-datos-empresa',
  imports: [],
  templateUrl: './datos-empresa.html',
  styleUrl: './datos-empresa.css',
})
export class DatosEmpresa {
  @Input() empresa!: Empresa;
}

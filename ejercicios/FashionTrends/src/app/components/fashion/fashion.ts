import { Component, OnInit } from '@angular/core';
import { DatosEmpresa } from '../datos-empresa/datos-empresa';
import { Productos } from '../productos/productos';
import { Trends } from '../../services/trends.service';
import { Empresa } from '../../models/empresa';

@Component({
  selector: 'app-fashion',
  imports: [DatosEmpresa, Productos],
  templateUrl: './fashion.html',
  styleUrl: './fashion.css',
})
export class Fashion implements OnInit {
  empresa!: Empresa;
  constructor(private service: Trends) { }
  ngOnInit(): void {
    this.empresa = this.service.getEmpresa();
  }
}

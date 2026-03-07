import { Component, OnInit } from '@angular/core';
import { Info } from '../info/info';

import { Sucursales } from '../sucursales/sucursales';
import { Empresa } from '../../models/empresa';
import { AutoCareCenter } from '../../services/auto-care-center.service';

@Component({
  selector: 'auto-care',
  imports: [Info,Sucursales],
  templateUrl: './auto-care.html',
  styleUrl: './auto-care.css',
})
export class AutoCare implements OnInit{
  empresa!:Empresa;
  constructor(private service:AutoCareCenter){}
  ngOnInit(): void {
    this.empresa=this.service.getEmpresa();
  }

}

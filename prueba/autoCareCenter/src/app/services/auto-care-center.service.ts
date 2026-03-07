import { Injectable } from '@angular/core';
import { Empresa } from '../models/empresa';
import { empresaData } from '../data/empresa.data';

@Injectable({
  providedIn: 'root',
})
export class AutoCareCenter {
  private empresa:Empresa=empresaData;
  constructor(){}
  getEmpresa():Empresa{
    return this.empresa
  }
}

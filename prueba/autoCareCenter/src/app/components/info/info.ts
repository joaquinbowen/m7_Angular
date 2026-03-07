import { Component, Input } from '@angular/core';
import { Empresa } from '../../models/empresa';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  @Input() empresa!: Empresa;
}

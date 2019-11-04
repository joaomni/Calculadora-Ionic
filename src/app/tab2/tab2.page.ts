import { Component } from '@angular/core';
import { parse } from 'path';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private valor1: string;
  private valor2: string;
  private resultado: number;

  constructor() {}

  calcula(){
    this.resultado = parseFloat(this.valor1) - parseFloat(this.valor2);
  }

  exibeResultado(){
    return this.resultado;
  }

}

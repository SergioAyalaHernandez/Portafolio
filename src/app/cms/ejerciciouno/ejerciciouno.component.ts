import { Component, OnInit } from '@angular/core';
import {CustomPreloadService} from "../../services/custom-preload.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-ejerciciouno',
  templateUrl: './ejerciciouno.component.html',
  styleUrls: ['./ejerciciouno.component.scss']
})
export class EjerciciounoComponent implements OnInit {
  decimal: number = 0;
  binario: string = "";
  binario1: string = "";
  binario2: string = "";
  resultado: string = "";
  constructor(
      ) {
  }

  ngOnInit(): void {
  }


  convertirDecimalABinario() {
    this.binario = this.decimal.toString(2);
  }

  sumar() {
    const num1 = parseInt(this.binario1, 2);
    const num2 = parseInt(this.binario2, 2);
    const suma = num1 + num2;
    this.resultado = suma.toString(2);
  }

  restar() {
    const num1 = parseInt(this.binario1, 2);
    const num2 = parseInt(this.binario2, 2);
    const resta = num1 - num2;
    this.resultado = resta.toString(2);
  }
}

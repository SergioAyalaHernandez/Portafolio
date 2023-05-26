import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';


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
  hexadecimal: string = "";
  octal: string = "";
  hexadecimalResul: string = "";
  octalResul: string = "";
  camposIncompletos: boolean = false;
  formularioBinario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioBinario = this.formBuilder.group({
      binario1: ['', [Validators.required, Validators.pattern(/^[01]+$/)]],
      binario2: ['', [Validators.required, Validators.pattern(/^[01]+$/)]]
    });
  }

  ngOnInit(): void {}

  convertirDecimalABinario() {
    this.binario = this.decimal.toString(2);
    this.hexadecimal = this.decimal.toString(16);
    this.octal = this.decimal.toString(8);
  }

  reiniciar(){
    this.resultado ="";
    this.binario1 ="";
    this.octal="";
    this.binario2="";
    this.hexadecimalResul="";
    this.octalResul="";
    this.binario="";
    this.decimal=0;
  }

  sumar() {
    if (this.binario2 && this.binario1) {
      const num1 = parseInt(this.binario1, 2);
      const num2 = parseInt(this.binario2, 2);
      const suma = num1 + num2;
      this.resultado = suma.toString(2);
      this.hexadecimalResul = suma.toString(16);
      this.octalResul = suma.toString(8);
      this.camposIncompletos = false;
      this.binario1 = ""; // Vaciar el campo binario1
      this.binario2 = ""; // Vaciar el campo binario2
    } else {
      this.camposIncompletos = true;
    }
  }
  validarFormatoBinario(valor: string): boolean {
    const regex = /^[01]+$/; // Expresión regular para validar binario (0 y 1)
    return regex.test(valor);
  }

  restar() {
    if (this.binario2 && this.binario1) {
      const num1 = parseInt(this.binario1, 2);
      const num2 = parseInt(this.binario2, 2);
      const resta = num1 - num2;
      this.resultado = resta.toString(2);
      this.hexadecimalResul = resta.toString(16);
      this.octalResul = resta.toString(8);
      this.camposIncompletos = false;
      this.binario1 = ""; // Vaciar el campo binario1
      this.binario2 = ""; // Vaciar el campo binario2
    } else {
      this.camposIncompletos = true;
    }
  }
}

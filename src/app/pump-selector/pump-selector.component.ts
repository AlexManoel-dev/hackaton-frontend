import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbButtonModule, NbCardModule, NbInputModule, NbStepperModule } from '@nebular/theme';

@Component({
  selector: 'app-pump-selector',
  standalone: true,
  imports: [NbCardModule, NbButtonModule, NbInputModule, ReactiveFormsModule],
  templateUrl: './pump-selector.component.html',
  styleUrl: './pump-selector.component.scss',
})
export class PumpSelectorComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router ) {
    this.form = this.fb.group({
      geometricHeight: [null, Validators.required],
      suctionHeight: [null, Validators.required],
      suctionPressureLoss: [null, Validators.required],
      pressureLossInThePump: [null, Validators.required],
      averageFluidTemperature: [null, Validators.required],
      fluidDensity: [null, Validators.required],
      fluidPressureInCapture: [null, Validators.required]
    });
  }

  consult(): void {
    localStorage.setItem('adviceData', `
          Qual a melhor recomendação de bomba npsh, se eu tenho a altura geométrica de ${this.form.get('geometricHeight')?.value}m,
          altura de sucção de ${this.form.get('suctionHeight')?.value}m, perda de carga na sucção de ${this.form.get('suctionPressureLoss')?.value}m, perda de carga na bomba de ${this.form.get('pressureLossInThePump')?.value}m,
          temperatura média do fluido de ${this.form.get('averageFluidTemperature')?.value} C, densidade do fluido de ${this.form.get('fluidDensity')?.value}kg/m3 e pressão do fluido na captação de ${this.form.get('fluidPressureInCapture')?.value}pa? Não me mostre os cálculos,
          calcule e me fale diretamente qual a melhor bomba.
        `);
      this.router.navigate(['/advice']);
  }
}

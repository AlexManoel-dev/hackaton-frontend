import { Component } from '@angular/core';
import { NbButtonModule, NbCardModule, NbInputModule, NbStepperModule } from '@nebular/theme';

@Component({
  selector: 'app-pressure-loss',
  standalone: true,
  imports: [NbCardModule, NbButtonModule, NbInputModule],
  templateUrl: './pressure-loss.component.html',
  styleUrl: './pressure-loss.component.scss'
})
export class PressureLossComponent {

}

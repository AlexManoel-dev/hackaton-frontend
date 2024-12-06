import { Component } from '@angular/core';
import { NbButtonModule, NbCardModule, NbStepperModule } from '@nebular/theme';

@Component({
  selector: 'app-pump-selector',
  standalone: true,
  imports: [NbStepperModule, NbCardModule, NbButtonModule],
  templateUrl: './pump-selector.component.html',
  styleUrl: './pump-selector.component.scss'
})
export class PumpSelectorComponent {

}

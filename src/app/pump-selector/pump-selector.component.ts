import { Component } from '@angular/core';
import { NbButtonModule, NbCardModule, NbInputModule, NbStepperModule } from '@nebular/theme';

@Component({
  selector: 'app-pump-selector',
  standalone: true,
  imports: [NbCardModule, NbButtonModule, NbInputModule],
  templateUrl: './pump-selector.component.html',
  styleUrl: './pump-selector.component.scss',
})
export class PumpSelectorComponent {

}

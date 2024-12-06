import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NbThemeModule, NbLayoutModule, NbStepperModule } from '@nebular/theme'
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NbLayoutModule, NbStepperModule, RouterModule, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hackaton-frontend';

  constructor(private router: Router) {}
  
  isCurrentRoute(url: string): boolean {
    return this.router.url === '/' + url;
  }
}

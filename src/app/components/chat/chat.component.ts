import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { NbCardModule, NbChatModule, NbChatMessageComponent } from '@nebular/theme';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NgIf, NgFor, NbCardModule, NbChatModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  isChatOpen: boolean = false;
  messages = [
    { text: 'Olá! Como posso ajudar?', reply: false }
  ];

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage(event: any) {
    const messageText = event.message;
    this.messages.push({ text: messageText, reply: true });
    setTimeout(() => {
      this.messages.push({ text: 'Recebido!', reply: false });
    }, 1000);
  }
}

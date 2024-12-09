import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebsocketService } from '../data/services/websocket.service';
import { NgIf } from '@angular/common';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

@Component({
  selector: 'app-heat-exchanger',
  standalone: true,
  imports: [NbCardModule, NbButtonModule, NbInputModule],
  templateUrl: './heat-exchanger.component.html',
  styleUrl: './heat-exchanger.component.scss'
})
export class HeatExchangerComponent implements OnInit {
  sensorData: any;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    // Escuta o evento 'sensor-data'
    this.websocketService.listen('sensor-data').subscribe((data) => {
      this.sensorData = data;
    });
  }
}

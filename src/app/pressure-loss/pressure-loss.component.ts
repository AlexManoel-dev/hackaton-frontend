import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'app-pressure-loss',
  standalone: true,
  imports: [NbCardModule, NbButtonModule],
  templateUrl: './pressure-loss.component.html',
  styleUrls: ['./pressure-loss.component.scss'],
})
export class PressureLossComponent {
  gridSize = 10; // Tamanho da matriz (10x10)
  grid: Array<Array<any>> = Array.from({ length: this.gridSize }, () =>
    Array(this.gridSize).fill(null)
  );

  pipes: Array<any> = [];

  selectedX = 0; // Coordenada X selecionada
  selectedY = 0; // Coordenada Y selecionada

  addPipe(type: 'straight' | 'curve') {
    const pipe = {
      id: this.pipes.length + 1,
      type,
      angle: 0,
      position: { x: this.selectedX, y: this.selectedY },
    };

    if (!this.grid[this.selectedY][this.selectedX]) {
      this.pipes.push(pipe);
      this.grid[this.selectedY][this.selectedX] = pipe;
    } else {
      alert('Já existe um pipe nessa posição!');
    }
  }

  removePipe(x: number, y: number) {
    const index = this.pipes.findIndex(
      (pipe) => pipe.position.x === x && pipe.position.y === y
    );
    if (index >= 0) {
      this.pipes.splice(index, 1);
      this.grid[y][x] = null;
    }
  }

  setSelectedCoordinates(x: number, y: number) {
    this.selectedX = x;
    this.selectedY = y;
  }
}

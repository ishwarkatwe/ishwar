import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent<T> {
  // Generic input data for the panel
}

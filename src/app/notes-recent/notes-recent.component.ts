import { Component } from '@angular/core';
import { PanelComponent } from '../ui/panel/panel.component';

@Component({
  selector: 'app-notes-recent',
  standalone: true,
  imports: [PanelComponent],
  templateUrl: './notes-recent.component.html',
  styleUrl: './notes-recent.component.scss',
})
export class NotesRecentComponent {}

import { Component } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  notes = [
    {
      link: null,
      name: 'Angular 18 new features',
    },
    {
      name: 'RXJS fundamentals',
      link: null,
    },
    {
      name: 'State management in angular apps',
      link: null,
    },
  ];
}

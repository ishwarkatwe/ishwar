import { Component } from '@angular/core';
import { PanelComponent } from '../ui/panel/panel.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [PanelComponent],
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

  // Example generic data
  formData = {
    name: '',
    email: '',
  };

  // Handle footer button action
  handleSave(data: any) {
    console.log('Form data saved:', data);
  }

  // Handle panel close event
  handleClose() {
    console.log('Panel closed');
  }
}

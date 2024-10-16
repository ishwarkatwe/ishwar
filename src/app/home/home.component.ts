import { Component } from '@angular/core';
import { NotesComponent } from '../notes/notes.component';
import { PopularComponent } from '../popular/popular.component';
import { PanelComponent } from "../ui/panel/panel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NotesComponent, PopularComponent, PanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

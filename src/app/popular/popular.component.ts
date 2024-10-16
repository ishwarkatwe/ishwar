import { Component } from '@angular/core';
import { PanelComponent } from '../ui/panel/panel.component';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [PanelComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent {

}

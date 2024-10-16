import { Component, inject } from '@angular/core';
import { CvDataService } from './services/cv-data.service';
import { PanelComponent } from "../ui/panel/panel.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PanelComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  data = inject(CvDataService).getCvData();
}

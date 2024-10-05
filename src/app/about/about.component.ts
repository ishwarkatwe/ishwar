import { Component, inject } from '@angular/core';
import { CvDataService } from './services/cv-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  data = inject(CvDataService).getCvData();
}

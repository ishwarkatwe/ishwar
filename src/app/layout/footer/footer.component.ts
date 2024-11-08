import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { menu } from '../constants/nav.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  nav = menu;
}

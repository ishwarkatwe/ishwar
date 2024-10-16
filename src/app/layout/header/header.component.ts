import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  theme = 'light';

  toggle() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
      body.classList.replace('light-theme', 'dark-theme');
      this.theme = 'dark';
    } else if (body.classList.contains('dark-theme')) {
      body.classList.replace('dark-theme', 'light-theme');
      this.theme = 'light';
    } else {
      body.classList.add('dark-theme');
      this.theme = 'dark';
    }
  }
}

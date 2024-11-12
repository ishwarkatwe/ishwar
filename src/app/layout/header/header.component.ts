import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MENU_ITEMS } from '../constants/nav.constants';
import { LocalstorageService } from '../../common/services/localstorage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  nav = MENU_ITEMS;
  localstore = inject(LocalstorageService);
  theme = this.localstore.getTheme();

  toggle() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
      body.classList.replace('light-theme', 'dark-theme');
      this.theme = 'light';
    } else if (body.classList.contains('dark-theme')) {
      body.classList.replace('dark-theme', 'light-theme');
      this.theme = 'dark';
    } else {
      body.classList.add('dark-theme');
      this.theme = 'light';
    }

    this.localstore.setTheme(this.theme);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags(): void {
    // Set the title of the page
    this.title.setTitle('Ishwar Katwe | Software Engineer');

    // Set meta tags
    this.meta.addTags([
      {
        name: 'description',
        content: 'Software engineer with 10+ of experience in web development.',
      },
      { name: 'keywords', content: 'Angular, Reactjs, Nextjs,NestJs, MongoDB' },
      { name: 'author', content: 'Ishwar Katwe' },
      { property: 'og:title', content: 'Ishwar Katwe' },
      {
        property: 'og:description',
        content: 'Software engineer with 10+ of experience in web development.',
      },
      {
        property: 'og:image',
        content: 'https://ishwar.vercel.app/assets/images/profile.png',
      },
      { property: 'og:url', content: 'https://ishwar.vercel.app/' },
      {
        name: 'twitter:card',
        content:
          'Ishwar Katwe, Software engineer with 10+ of experience in web development.',
      },
    ]);
  }
}

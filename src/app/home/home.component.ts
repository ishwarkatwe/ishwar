import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NotesComponent } from "../notes/notes.component";
import { PopularComponent } from "../popular/popular.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NotesComponent, PopularComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags(): void {
    // Set the title of the page
    this.title.setTitle('Your Dynamic Page Title');

    // Set meta tags
    this.meta.addTags([
      { name: 'description', content: 'This is the description for the page.' },
      { name: 'keywords', content: 'Angular, SEO, Meta tags' },
      { name: 'author', content: 'Your Name' },
      { property: 'og:title', content: 'Your Open Graph Title' },
      { property: 'og:description', content: 'Your Open Graph description' },
      { property: 'og:image', content: 'https://example.com/image.jpg' },
      { property: 'og:url', content: 'https://example.com/your-page' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ]);
  }
}

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotesComponent } from './notes/notes.component';
import { NotesRecentComponent } from './notes-recent/notes-recent.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'notes',
    component: NotesRecentComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '*',
    redirectTo: 'home',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

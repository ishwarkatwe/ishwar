import { Component } from '@angular/core';
import { PanelComponent } from '../ui/panel/panel.component';
import {
  DynamicFormComponent,
} from '../ui/dynamic-form/dynamic-form.component';
import { FormData } from './constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PanelComponent, DynamicFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  pageName = 'Login';
  formData = FormData;
}

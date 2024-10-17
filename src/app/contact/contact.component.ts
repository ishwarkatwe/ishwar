import { Component } from '@angular/core';
import { PanelComponent } from '../ui/panel/panel.component';
import {
  DynamicFormComponent,
  IForm,
} from '../ui/dynamic-form/dynamic-form.component';
import { FormData } from './constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PanelComponent, DynamicFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formData = FormData as IForm;
}

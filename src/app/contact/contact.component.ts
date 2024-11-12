import { Component } from '@angular/core';
import { PanelComponent } from '../ui/panel/panel.component';
import { DynamicFormComponent } from '../ui/dynamic-form/dynamic-form.component';
import { FormData } from './constants';
import { IDynamicForm } from '../ui/dynamic-form/dynamic-form.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PanelComponent, DynamicFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formData: IDynamicForm = FormData;

  onSubmit(form: Object) {
    console.log('form data',form);
  }
}

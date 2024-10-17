import { Component, effect, input, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

export interface IForm {
  formFields: {
    type: string;
    name: string;
    label: string;
    placeholder: string;
    validators: {
      required: boolean;
      minLength: number;
      pattern?: undefined;
    };
    errorMessages: {
      required: string;
      minLength: string;
      pattern?: undefined;
    };
    options?: undefined;
  }[];
}

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent {
  formConfig = input.required<IForm>();

  // Signals for form state and error tracking
  form!: FormGroup;
  formErrors = signal({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.buildForm(this.formConfig().formFields);
  }

  buildForm(fields: any[]): FormGroup {
    const group: any = {};
    fields.forEach((field) => {
      group[field.name] = new FormControl(
        '',
        this.getValidators(field.validators)
      );
    });
    return this.fb.group(group);
  }

  getValidators(validators: any) {
    const formValidators = [];
    if (validators.required) formValidators.push(Validators.required);
    if (validators.minLength)
      formValidators.push(Validators.minLength(validators.minLength));
    if (validators.maxLength)
      formValidators.push(Validators.maxLength(validators.maxLength));
    if (validators.pattern)
      formValidators.push(Validators.pattern(validators.pattern));
    return formValidators;
  }

  // Handle form submit and check for errors
  submitForm() {
    if (this.form.invalid) {
      this.checkErrors(this.formConfig().formFields);
    } else {
      console.log('Form Submitted:', this.form.value);
    }
  }

  checkErrors(fields: any[]) {
    const errors: any = {};
    fields.forEach((field) => {
      const control = this.form.get(field.name);
      if (control && control.invalid) {
        const fieldErrors = field.errorMessages || {};
        for (const errorKey in control.errors) {
          errors[field.name] = fieldErrors[errorKey] || `Invalid ${field.name}`;
        }
      }
    });
    this.formErrors.set(errors); // Update error signals
  }
}

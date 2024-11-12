import {
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IDynamicForm } from './dynamic-form.interface';
import { ErrorTypes } from './dynamic-form.constants';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent {
  formConfig = input.required<IDynamicForm>();
  form!: FormGroup;
  formErrors = signal({});
  isSubmitted = false;
  errorTypes = ErrorTypes;
  submit = output<Object>();
  errorKeys: string[] | undefined;
  conditionalCount = computed(() => {
    console.log('demoo');
    console.log(this.formErrors());
  });

  constructor(private fb: FormBuilder) {
    effect(() => {
     this.errorKeys =  Object.keys(this.formErrors());
    });
  }

  ngOnInit() {
    this.form = this.buildForm(this.formConfig().controls);
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

  submitForm() {
    this.isSubmitted = true;
    this.checkErrors(this.formConfig().controls);
    if (this.form.valid) {
      // console.log('Form Submitted:', this.form.value);
      this.submit.emit(this.form.value);
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

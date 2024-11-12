export interface IDynamicForm {
  actions: Actions;
  controls: Control[];
}

export interface Actions {
  primary: BindEvent;
  secondary?: BindEvent;
}

export interface BindEvent {
  label: string;
  event: string;
}

export interface Control {
  type: string;
  name: string;
  label: string;
  defaultValue: string | boolean;
  placeholder?: string;
  validators: Validators;
  errorMessages: ErrorMessages;
  options?: [
    {
      id: string;
      value: string;
    }
  ];
}

export interface Validators {
  required: boolean;
  pattern?: string;
  minLength?: number;
}

export interface ErrorMessages {
  required: string;
  pattern?: string;
  minLength?: string;
  maxLength?: string;
}

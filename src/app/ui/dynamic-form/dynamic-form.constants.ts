import { ErrorMessages } from './dynamic-form.interface';

export const ErrorTypes: Array<keyof ErrorMessages> = [
  'required',
  'pattern',
  'minLength',
  'maxLength'
];

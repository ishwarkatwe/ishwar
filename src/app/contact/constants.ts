import { IDynamicForm } from '../ui/dynamic-form/dynamic-form.interface';

export const FormData: IDynamicForm = {
  controls: [
    {
      type: 'text',
      name: 'username',
      label: 'Username',
      defaultValue: '',
      placeholder: 'Enter your username',
      validators: {
        required: true,
        minLength: 5,
      },
      errorMessages: {
        required: 'Username is required',
        minLength: 'Username must be at least 5 characters',
      },
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      validators: {
        required: true,
        // pattern: '/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/',
      },
      errorMessages: {
        required: 'Email is required',
        pattern: 'Enter a valid email address',
      },
      defaultValue: '',
    },
    {
      type: 'select',
      name: 'country',
      label: 'Country',
      options: [
        {
          id: 'India',
          value: 'India',
        },
      ],
      validators: {
        required: true,
      },
      errorMessages: {
        required: 'Please select a country',
      },
      defaultValue: '',
    },
    {
      type: 'checkbox',
      name: 'acceptTerms',
      label: 'Accept Terms',
      validators: {
        required: true,
      },
      errorMessages: {
        required: 'You must accept the terms',
      },
      defaultValue: false,
    },
  ],
  actions: {
    primary: {
      label: 'Send',
      event: '',
    },
  },
};

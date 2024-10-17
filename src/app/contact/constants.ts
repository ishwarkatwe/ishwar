export const FormData = {
  formFields: [
    {
      type: 'text',
      name: 'username',
      label: 'Username',
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
        pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      },
      errorMessages: {
        required: 'Email is required',
        pattern: 'Enter a valid email address',
      },
    },
    {
      type: 'select',
      name: 'country',
      label: 'Country',
      options: ['USA', 'Canada', 'UK'],
      validators: {
        required: true,
      },
      errorMessages: {
        required: 'Please select a country',
      },
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
    },
  ],
};

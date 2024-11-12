export const FormData = {
  formFields: [
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Enter email',
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
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Enter password',
      validators: {
        required: true,
        minLength: 6,
      },
      errorMessages: {
        required: 'Password is required',
        minLength: 'Enter a valid password',
      },
    },
  ],
};

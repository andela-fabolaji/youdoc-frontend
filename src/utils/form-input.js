export function SigninProps(context) {
  const signinInputFields = [
    {
      type: 'text',
      name: 'username',
      id: 'username',
      placeholder: 'Enter your username',
      label: 'Username',
      value: context.state.username,
      onChange: context.onChange
    },
    {
      type: 'password',
      name: 'password',
      id: 'password',
      placeholder: 'password',
      label: 'Password',
      value: context.state.password,
      onChange: context.onChange
    }
  ];

  const submitButtonProps = {
    type: 'submit',
    onClick: context.onSubmit,
    label:'Sign in toh bad'
  };

  return { signinInputFields, submitButtonProps };
}

export function SignupProps(context) {
  const signupInputFields = [
    {
      type: 'text',
      name: 'firstName',
      id: 'firstName',
      placeholder: 'Firstname',
      label: 'Firstname',
      value: context.state.firstName,
      onChange: context.onChange
    },
    {
      type: 'text',
      name: 'lastName',
      id: 'lastName',
      placeholder: 'Lastname',
      label: 'Lastname',
      value: context.state.lastName,
      onChange: context.onChange
    },
    {
      type: 'text',
      name: 'email',
      id: 'email',
      placeholder: 'email',
      label: 'Email',
      value: context.state.email,
      onChange: context.onChange
    },
    {
      type: 'text',
      name: 'username',
      id: 'username',
      placeholder: 'Enter your username',
      label: 'Username',
      value: context.state.username,
      onChange: context.onChange
    },
    {
      type: 'password',
      name: 'password',
      id: 'password',
      placeholder: 'password',
      label: 'Password',
      value: context.state.password,
      onChange: context.onChange
    },
    {
      type: 'hidden',
      name: 'roleId',
      id: '',
      placeholder: '',
      label: '',
      value: 5,
      onChange: () => {}
    }
  ];

  const submitButtonProps = {
    type: 'submit',
    onClick: context.onSubmit,
    label:'Sign up'
  };

  return { signupInputFields, submitButtonProps };
}
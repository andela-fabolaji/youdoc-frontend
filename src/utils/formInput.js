export function SigninProps(context) {
  const signinInputFields = [
    {
      type: 'text',
      name: 'userIdentity',
      id: 'username',
      placeholder: 'Enter your username or email',
      label: 'Username or email',
      value: context.state.userIdentity,
      onChange: context.handleChange
    },
    {
      type: 'password',
      name: 'password',
      id: 'password',
      placeholder: 'password',
      label: 'Password',
      value: context.state.password,
      onChange: context.handleChange
    }
  ];

  const submitButtonProps = {
    type: 'submit',
    onClick: context.handleSubmit,
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
      onChange: context.handleChange
    },
    {
      type: 'text',
      name: 'lastName',
      id: 'lastName',
      placeholder: 'Lastname',
      label: 'Lastname',
      value: context.state.lastName,
      onChange: context.handleChange
    },
    {
      type: 'text',
      name: 'email',
      id: 'email',
      placeholder: 'email',
      label: 'Email',
      value: context.state.email,
      onChange: context.handleChange
    },
    {
      type: 'text',
      name: 'username',
      id: 'username',
      placeholder: 'Enter your username',
      label: 'Username',
      value: context.state.username,
      onChange: context.handleChange
    },
    {
      type: 'password',
      name: 'password',
      id: 'password',
      placeholder: 'password',
      label: 'Password',
      value: context.state.password,
      onChange: context.handleChange
    }
  ];

  const submitButtonProps = {
    type: 'submit',
    onClick: context.handleSubmit,
    label:'Sign up'
  };

  return { signupInputFields, submitButtonProps };
}
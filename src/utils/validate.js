export default form => {
  const error = {};
  
  Object.keys(form).forEach((field) => {
    if (!form[field].length) {
      error[field] = `${field} cannot be empty`;
    }
  });
  
  if (!/\@/.test(form.email)) {
    error.email = `Invalid email. Please enter a valid email`;
  }
  
  return error;
}
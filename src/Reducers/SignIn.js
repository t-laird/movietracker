const SignIn = (state = {}, action) => {
  switch(action.type) {
    case 'SIGNIN_SUCCESS':
      const { userObject } = action;
      const dataResponse = userObject.data;
      const userData = Object.assign({}, {name: dataResponse.name, email: dataResponse.email, id: dataResponse.id})
      return {signedIn: true, userData};
    case 'SIGNIN_FAILURE':
    const { errorMessage } = action;
      return {signedIn: false, error: errorMessage};
    default:
      return {signedIn: false};
  }
};

export default SignIn;


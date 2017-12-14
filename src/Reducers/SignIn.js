const SignIn = (state = {}, action) => {
  switch(action.type) {
    case 'SIGNIN_SUCCESS':
      const { userObject } = action;
      const dataResponse = userObject.data;
      const userData = Object.assign({}, {name: dataResponse.name, email: dataResponse.email, id: dataResponse.id})
      return {signedIn: true, userData};
    case 'SIGNIN_FAILURE':
    const { errorMessage } = action;
      return Object.assign({}, {signedIn: false}, {userData: {name: '', email: '', id: ''}}, {error: errorMessage});
    default:
      return Object.assign({}, {signedIn: false}, {userData: {name: '', email: '', id: ''}});
  }
};

export default SignIn;


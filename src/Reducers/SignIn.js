const defaultState = 
        Object.assign(
        {},
        {signedIn: false},
        {error: false},
        {userData: {name: '', email: '', id: ''}})

const SignIn = (state = defaultState, action) => {
  switch(action.type) {
    case 'SIGNIN_SUCCESS':
      const { userObject } = action;
      const dataResponse = userObject.data;
      const userData = Object.assign(
        {},
        {signedIn: true},
        {
          name: dataResponse.name,
          email: dataResponse.email,
          id: dataResponse.id
        },
        {error: false}
      );
      return {signedIn: true, userData};
    case 'SIGNIN_FAILURE':
      const { errorMessage } = action;
      return Object.assign(
        {},
        {signedIn: false},
        {userData: {name: '', email: '', id: ''}},
        {error: 'username or password is incorrect'}
      );
    case 'SIGN_OUT':
      return Object.assign(
        {},
        {signedIn: false},
        {userData: {name: '', email: '', id: ''}},
        {error: false}
      );
    case 'SIGN_UP_SUCCESS':
      const { newUser } = action;
      return Object.assign(
        {},
        {signedIn: true},
        {userData: {name: newUser.name, email: newUser.email, id: newUser.id}},
        {error: false}
      );
    case 'SIGN_UP_FAILURE':
      const { error } = action;
      return Object.assign(
        {},
        {signedIn: false},
        {userData: {name: '', email: '', id: ''}},
        {error}
      );
    default:
      return state
  }
};

export default SignIn;

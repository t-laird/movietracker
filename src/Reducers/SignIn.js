/*eslint-disable no-case-declarations*/

const defaultState =
  Object.assign(
    {},
    {signedIn: false},
    {error: false},
    {userData: {name: '', email: '', id: ''}}
  );

const SignIn = (state = defaultState, action) => {
  switch (action.type) {
  case 'SIGNIN_SUCCESS':
    const { userObject } = action;
    const dataResponse = userObject.data;
    const userData = {
      name: dataResponse.name,
      email: dataResponse.email,
      id: dataResponse.id };

    localStorage.setItem('xyz123MTracker', JSON.stringify(userData));
    return Object.assign(
      {},
      {signedIn: true},
      {userData: userData},
      {error: false}
    );
  case 'SIGNIN_FAILURE':
    return Object.assign(
      {},
      {signedIn: false},
      {userData: {name: '', email: '', id: ''}},
      {error: 'username or password is incorrect'}
    );
  case 'SIGN_OUT':
    localStorage.removeItem('xyz123MTracker');
    return Object.assign(
      {},
      {signedIn: false},
      {userData: {name: '', email: '', id: ''}},
      {error: false}
    );
  case 'SIGN_UP_SUCCESS':
    const { newUser } = action;
    const cleanUser = {
      name: newUser.name,
      email: newUser.email,
      id: newUser.id };
    localStorage.setItem('xyz123MTracker', JSON.stringify(cleanUser));
    return Object.assign(
      {},
      {signedIn: true},
      {userData: cleanUser},
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
    return state;
  }
};

export default SignIn;

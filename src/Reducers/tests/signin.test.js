import SignInReducer from '../SignIn';
import * as actions from '../../Actions';

describe('Tests related to signin reducer', () => {
  it ('should return the default state', () => {
    const expected =  Object.assign(
      {},
      {signedIn: false},
      {error: false},
      {userData: {name: '', email: '', id: ''}}
    );
    expect(SignInReducer(undefined, {})).toEqual(expected);
  });

  it ('should return an action object with updated user information when receiving an action of SIGNIN_SUCCESS', () => {
    const expected = Object.assign(
      {},
      {signedIn: true},
      {userData: {name: 'h', email: '@', id: 3}},
      {error: false}
    );

    const mockUserObject = {
      data: { 
        name: 'h',
        email: '@',
        id: 3
      }
    };

    global.localStorage = {
      setItem: () => null
    }

    expect(SignInReducer({}, 
      actions.signInSuccess(mockUserObject))).toEqual(expected);
  });

  it('should indicate an appropriate error on sign in failure', () => {
    const expected = Object.assign(
      {},
      {signedIn: false},
      {userData: {name: '', email: '', id: ''}},
      {error: 'username or password is incorrect'}
    );

    expect(SignInReducer({}, actions.signInFailure())).toEqual(expected);
  });

  it('should reset the signin object appropriate on SIGN_OUT', () => {
    const expected =  Object.assign(
      {},
      {signedIn: false},
      {error: false},
      {userData: {name: '', email: '', id: ''}}
    );

    const prevState = Object.assign(
      {},
      {signedIn: true},
      {userData: {name: 'h', email: '@', id: 3}},
      {error: false}
    );
    
    global.localStorage = {
      removeItem: () => null
    };

    expect(SignInReducer(prevState, actions.signOut())).toEqual(expected);
  });

  it('should set the user data properly on SIGN_UP_SUCCESS', () => {
    const expected = Object.assign(
      {},
      {signedIn: true},
      {userData: {name: 'h', email: '@', id: 3}},
      {error: false}
    );

    const mockNewUserObject = {
      newUser: {name: 'h', email: '@', id: 3}
    };

    window.fetch = 
    jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(
        {data: [{name: 'h', email: '@', id: 3}]}
      )
    }));

    expect(SignInReducer({}, actions.signUpSuccess(mockNewUserObject.newUser)));
  });

  it('should push an appropriate error on SIGN_UP_FAILURE', () => {
    const expected = Object.assign(
      {},
      {signedIn: false},
      {userData: {name: '', email: '', id: ''}},
      {error: 'test error'}
    );

    expect(SignInReducer({}, actions.signUpFailure('test error'))).toEqual(expected);
  });
});
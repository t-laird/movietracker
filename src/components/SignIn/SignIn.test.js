import React from 'react';
import { 
  SignIn,
  mapStateToProps,
  mapDispatchToProps } from './SignIn';
import { shallow } from 'enzyme';

describe('signin component tests', () => {
  let mockProps;
  let signInWrapper;
  beforeEach(() => {
    mockProps = {
      userObject: {
        error: false, signedIn: false, userData: { email: "123", id: 2, name: "123" }},
      signInToApp: jest.fn(),
      signUpForApp: jest.fn()
    };

    signInWrapper = shallow(<SignIn {...mockProps} />);
  });

  it('should render without crashing', () => {
    expect(signInWrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(signInWrapper).toMatchSnapshot();
  });

  it('should render the correct default elements', () => {
    const expectedFormLength = 1;
    const expectedInputLength = 4;

    expect(signInWrapper.find('form').length).toEqual(expectedFormLength);
    expect(signInWrapper.find('input').length).toEqual(expectedInputLength);
  });

  it('should focus an input when the inputFocus method is called', () => {
    const expectedPreFocusLength = 0;
    const expectedFocusLength = 1;

    expect(signInWrapper.find('.test-focus').length).toEqual(expectedPreFocusLength);

    signInWrapper.instance().inputFocus('username', 'signin-input test-focus');
    signInWrapper.update();

    expect(signInWrapper.find('.test-focus').length).toEqual(expectedFocusLength);
  });

  it('should toggle the signup type to true or false on changeSignInType call', () => {
    const expectedPreToggle = false;
    const expectedPostToggle = true;

    expect(signInWrapper.state('signup')).toEqual(expectedPreToggle);

    signInWrapper.instance().changeSignInType();
    signInWrapper.update();

    expect(signInWrapper.state('signup')).toEqual(expectedPostToggle);
  });

  it('should change the password input type based upon the event on the checkbox', () => {
    const expectedPreShowPass = 'password';
    const expectedPostShowPass = 'text';

    const mockEvent = { target: { checked: true }};

    expect(signInWrapper.state('passwordDisplay')).toEqual(expectedPreShowPass);

    signInWrapper.instance().handleShowPass(mockEvent);
    signInWrapper.update();

    expect(signInWrapper.state('passwordDisplay')).toEqual(expectedPostShowPass);
  });
});



describe('mapStateToProps tests', () => {
  it('should map in the user object from store', () => {
    const mockStore = {
      SignIn: {
        error: false, 
        signedIn: false, 
        userData: { email: "123", id: 2, name: "123" }}
    };

    const result = mapStateToProps(mockStore);
    expect(result.userObject).toEqual(mockStore.SignIn);
  });
});

describe('mapDispatchToProps tests', () => {
  it('should map dispatch to props for signin functions', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.signInToApp('user', 'pass');
    
    expect(mockDispatch).toHaveBeenCalled();
  });
  
  it('should map dispatch to props for signup functions', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.signUpForApp('name', 'user', 'pass');
    
    expect(mockDispatch).toHaveBeenCalled();
  });
});

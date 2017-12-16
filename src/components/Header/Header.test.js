import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';


describe('header tests', () => {
  let headerContainer;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      signOut: jest.fn(),
      showFavorites: jest.fn(),
      signedIn: true,
      userName: 'jim',
      shouldShowFavorites: true,
      favorites: 3
    };
    headerContainer = shallow(<Header {...mockProps}/>);
  });

  it('should render correctly', () => {
    expect(headerContainer).toBeDefined();
  });

  it('should be instantiated with the correct children', () => {
    const expectedH1Length = 1;
    const expectedH2Length = 1;
    const expectedLinkLength = 3;

    expect(headerContainer.find('h1').length).toEqual(expectedH1Length);
    expect(headerContainer.find('h2').length).toEqual(expectedH1Length);
    expect(headerContainer.find('Link').length).toEqual(expectedLinkLength);
  });

  it('should render the user\'s name if signedin is true', () => {
    const expectedUserName = mockProps.userName;

    expect(headerContainer.find('span').text()).toContain(expectedUserName);
  });

  it('should call signOut on click of a the signout link', () => {
    const signOutButton = headerContainer.find('.sign-in-link');
    
    signOutButton.simulate('click');

    expect(mockProps.signOut).toHaveBeenCalled();
  });
});
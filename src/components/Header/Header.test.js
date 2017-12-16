import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';


describe('header tests', () => {
  let headerContainer;
  beforeEach(() => {
    const mockProps = {
      signOut: jest.fn(),
      showFavorites: jest.fn(),
      signedIn: false,
      userName: 'jim',
      shouldShowFavorites: true,
      favorites: 3
    };
    headerContainer = shallow(<Header {...mockProps}/>);
  });

  it('should render correctly', () => {
    expect(headerContainer).toBeDefined();
  });
});
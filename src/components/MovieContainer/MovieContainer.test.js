import React, { Component } from 'react';
import MovieContainer from './MovieContainer';
import { shallow } from 'enzyme';
import * as actions from '../../Actions';
import Provider from 'react-redux';

describe('MovieContainer tests', () => {
  let movieContainer;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      location: {},
      movies: {},
      hasErrored: true,
      isLoading: true,
      favorites: [],
      fetchMovieList: jest.fn()
    };
    movieContainer = shallow(<MovieContainer {...mockProps} />);
  });


  it('should match the snapshot', () => {
    const renderedComponent = shallow(<MovieContainer />)
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render correctly', () => {
    expect(movieContainer).toBeDefined();
  });

  it('should be instantiated with the correct children', () => {
    const expectedH1Length = 1;
    const expectedH2Length = 1;
    const expectedLinkLength = 3;

    expect(movieContainer.find('h1').length).toEqual(expectedH1Length);
    expect(movieContainer.find('h2').length).toEqual(expectedH1Length);
    expect(movieContainer.find('Link').length).toEqual(expectedLinkLength);
  });

  it('should render the user\'s name if signedin is true', () => {
    const expectedUserName = mockProps.userName;

    expect(movieContainer.find('span').text()).toContain(expectedUserName);
  });

  it('should call signOut on click of a the signout link', () => {
    const signOutButton = movieContainer.find('.sign-in-link');

    signOutButton.simulate('click');

    expect(mockProps.signOut).toHaveBeenCalled();
  });
});





// describe('MovieContianer', () => {

//   describe('componentDidMount', () => {

//     it('sets the state componentDidMount', async () => {
//       window.fetch = jest.fn().mockImplementation(() => ({
//         status: 200,
//         json: () => new Promise((resolve, reject) => {
//           resolve({
//             movies: [
//               { title: 'Star Wars', score: 10 }, { title: 'Blade Runner', score: 3 }
//             ]
//           })
//         })
//       }))

//       const renderedComponent = await shallow(<MovieContainer />);
//       await renderedComponent.update();
//       expect(renderedComponent('movies').length).toEqual(2);
//     })
//   })  
// })
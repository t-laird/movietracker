import React from 'react';
import  { 
  MovieContainer, 
  mapStateToProps, 
  mapDispatchToProps 
} from './MovieContainer';
import { shallow } from 'enzyme';
import * as actions from '../../Actions';
import { Provider } from 'react-redux';

describe('MovieContainer tests', () => {
  let movieContainer;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      location: {},
      movies: [{ title: "Movie" }],
      hasErrored: true,
      isLoading: true,
      favorites: [{ title: "Movie" }]
    };
    movieContainer = shallow(
      <Provider><MovieContainer {...mockProps} /></Provider>
    );
  });


  it('should match the snapshot', () => {
    expect(movieContainer).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(movieContainer).toBeDefined();
  });

  it.skip('should pull movies from the store', () => {
    const mockStore = {
      movies: [{ title: "Movie" }],
      favorites: [{ title: "Movie" }]
    };
    
    const result = mapStateToProps(mockStore);
    expect(result.movies).toEqual(mockStore.movies);
    expect(result.favorites).toEqual(mockStore.favorites);
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
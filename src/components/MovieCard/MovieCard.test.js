import { shallow } from 'enzyme';
import React from 'react';
import { MovieCard, mapStateToProps, mapDispatchToProps } from './MovieCard';
import * as actions from '../../Actions';

describe('tests for MovieCard component', () => {
  describe('component tests', () => {
    let cardWrapper;
    let mockProps;

    beforeEach(() => {
      mockProps = {
        user: {
          error: false,
          signedIn: true,
          userData:{ name: "abc", email: "abc", id: 3 }
        },
        favorites: [],
        addFavorite: jest.fn(),
        removeFavorite: jest.fn(),
        movie: {
          adult: false,
          backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
          genre_ids: [ 10751, 16, 12 ],
          id: 354912,
          original_language: "en",
          original_title: "Coco",
          overview: "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
          popularity: 566.134415,
          poster_path: "/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
          release_date: "2017-10-27",
          title: "Coco",
          video: false,
          vote_average: 7.6,
          vote_count: 483
        }
      };
      cardWrapper = shallow(<MovieCard {...mockProps} />);

    });
    it('should mount with the correct elements', () => {
      const expectedImgLength = 1;
      const expectedH1Length = 3;
      const expectedButtonLength = 4;

      expect(cardWrapper.find('img').length).toEqual(expectedImgLength);
      expect(cardWrapper.find('h1').length).toEqual(expectedH1Length);
      expect(cardWrapper.find('button').length).toEqual(expectedButtonLength);
    });

    it('should match the snapshot', () => {
      expect(cardWrapper).toMatchSnapshot();
    });

    it('should call addFavorite when the movie is not already in favorites', () => {
      const expectedParams = [mockProps.movie, 3];

      cardWrapper.instance().checkFavorites(mockProps.movie);
      cardWrapper.update();
      expect(mockProps.addFavorite).toHaveBeenCalledWith(...expectedParams);
      expect(mockProps.removeFavorite.mock.calls.length).toEqual(0);
    });

    it('should call remove favorites when the movie is in favorites', () => {
      const newMockProps = Object.assign(
        {},
        mockProps,
        {favorites: [{title: "Coco"}]}
      );

      const expectedParams = [newMockProps.movie, 3];

      cardWrapper = shallow(<MovieCard {...newMockProps} />);

      cardWrapper.instance().checkFavorites(mockProps.movie);
      cardWrapper.update();

      expect(newMockProps.removeFavorite).toHaveBeenCalledWith(...expectedParams);
      expect(newMockProps.addFavorite.mock.calls.length).toEqual(0);
    });
    describe('mapStateToProps', () => {
      it('should get user info and favorites array from the store', ()=> {
        const mockStore = {
          SignIn: {
            error: false,
            signedIn: true,
            userData:{ name: "abc", email: "abc", id: 3 }
          },
          favorites: []
        };

        const result = mapStateToProps(mockStore);
        expect(result.user).toEqual(mockStore.SignIn);
        expect(result.favorites).toEqual(mockStore.favorites);
      });
    });

    describe('mapDispatchToProps', () => {
      it('should call dispatch when addFavorite is called', () => {
        const mockDispatch = jest.fn();
        const mockParams = [mockProps.movie, 3];
        const result = mapDispatchToProps(mockDispatch);

        result.addFavorite(...mockParams);
        expect(mockDispatch).toHaveBeenCalled();
      });

      it('should call dispatch when removeFavorite is called', () => {
        const mockDispatch = jest.fn();
        const mockParams = [3, 12345];
        const result = mapDispatchToProps(mockDispatch);

        result.removeFavorite(...mockParams);
        expect(mockDispatch).toHaveBeenCalled();
      });
    });

  });
});
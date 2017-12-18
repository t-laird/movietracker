import favorites from '../favorites';
import * as actions from '../../Actions';

describe('Favorites reducer', () => {
  it('should return the default state', () => {
    const expectedState = [];

    expect(favorites(undefined, {})).toEqual(expectedState);
  });

  it('should return a new state, with an action', () => {
    const mockUser = {
      email: "123",
      id: 4,
      name: "123",
      password: "123"
    };
    const mockFavorites = {
      title: 'Star Wars'
    };
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(
        {
          "status": "success",
          "message": "fetched all users",
          "data": [mockUser]
        }
      )
    }));
    const favoritesData = mockFavorites.title;
    const expectedState = [favoritesData];

    expect(favorites(undefined, actions.updateFavorites([]))).toEqual([]);
  });
});

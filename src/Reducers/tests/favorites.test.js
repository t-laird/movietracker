/* eslint-disable max-len */

import favorites from '../favorites';
import * as actions from '../../Actions';

describe('Favorites reducer', () => {
  it('should return the default state', () => {
    const expectedState = [];

    expect(favorites(undefined, {})).toEqual(expectedState);
  });

  it('should return a new state, with an action', () => {
    const mockUserId = [];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(
        {
          "status": "success",
          "message": "fetched all users",
          "data": [mockUserId]
        }
      )
    }));
    const expectedState = mockUserId;

    expect(favorites(undefined, actions.updateFavorites(mockUserId))).toEqual(expectedState);
  });


  it('should update favorites when user clicks on favorite', () => {
    const mockFavoritesData = {
      movie: 'Star'
    };
    const mockUserId = [name: 'Sam'];
    const expected = {};
    const handleFavorite = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(
        {
          "status": "success",
          "message": "fetched all users",
          "data": [mockUserId]
        }
      )
    }));
    handleFavorite();
    expect(favorites({}, actions.updateFavorites(mockFavoritesData))).toEqual(expected);

  });

  it('should remove favorites when user clicks on remove favorite', () => {
    const mockFavoritesData = {
      movie: 'Star'
    };
    const mockUserId = [name: 'Sam'];
    const expected = {};
    const removeFavorite = jest.fn();

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(
        {
          "status": "success",
          "message": "fetched all users",
          "data": [mockUserId]
        }
      )
    }));
    removeFavorite();
    expect(favorites({}, actions.removeFavorite(mockFavoritesData))).toEqual(expected);
  });

  it('should add favorites when user clicks on add favorite', () => {
    const mockFavoritesData = {
      movie: 'Star'
    };
    const mockUserId = [name: 'Sam'];
    const expected = {};
    const addFavorite = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(
        {
          "status": "success",
          "message": "fetched all users",
          "data": [mockUserId]
        }
      )
    }));
    addFavorite();
    expect(favorites({}, actions.addFavorite(mockFavoritesData))).toEqual(expected);
  });
});

import * as actions from '../index';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('all actions', () => {
  describe('signin related actions', () => {
    it('has a type of SIGNIN_SUCCESS', () => {
      const mockUserObject = {
        data: {
          email: "123",
          id: 2,
          name: "123",
          password: "123"
        },
        message: "Retrieved ONE User",
        status: "success"
      };

      const expectedRes = {
        type: 'SIGNIN_SUCCESS',
        userObject: mockUserObject
      }

      expect(actions.signInSuccess(mockUserObject)).toEqual(expectedRes);
    });

    it('has a type of SIGNIN_FAILURE', () => {
      const mockError = 'user not found';

      const expectedRes = {
        type: 'SIGNIN_FAILURE',
        errorMessage: mockError
      };

      expect(actions.signInFailure(mockError)).toEqual(expectedRes);
    });

    it('has a type of SIGN_OUT', () => {
      const expectedRes = {
        type: 'SIGN_OUT'
      };

      expect(actions.signOut()).toEqual(expectedRes);
    });

    it('posts to /api/users/new when a signUpAttempt is made', async () => {
      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          {
            "status": "success",
            "message": "New user created",
            "id": 4
          }
        )
      })
    );
      
    actions.signUpAttempt('thomas, email, pass');
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares);
    
    
  const expectedActions = [
    { type: types.FETCH_TODOS_REQUEST },
    { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
  ];

  const store = mockStore({ todos: [] })

  return store.dispatch(actions.fetchTodos()).then(() => {
    // return of async actions
    expect(store.getActions()).toEqual  (expectedActions)
  })

    });


  });

  describe('Movie actions', () => {

    it('has a type of MOVIES_IS_LOADING', () => {
      const isLoading = true;
      const expected = {
        type: 'MOVIES_IS_LOADING',
        isLoading
      }
      expect(actions.moviesIsLoading(isLoading)).toEqual(expected)
    })

    // REMOVE_TODO
    it('has a type of MOVIES_HAS_ERRORED', () => {
      const hasErrored = true;
      const expected = {
        type: 'MOVIES_HAS_ERRORED',
        hasErrored
      }
      expect(actions.moviesHasErrored(hasErrored)).toEqual(expected)
    })

    it('has a type of MOVIES_FETCH_DATA_SUCCESS', () => {
      const movies = [{ stuff: 'stuff' }];
      const expected = {
        type: 'MOVIES_FETCH_DATA_SUCCESS',
        movies
      }
      expect(actions.moviesFetchDataSuccess(movies)).toEqual(expected)
    })

    it('should fetch a movielist', () => {

    })
  });
});

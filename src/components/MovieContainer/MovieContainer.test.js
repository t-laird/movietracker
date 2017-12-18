import React, { Component } from 'react';
import MovieContainer from './MovieContainer';
import { shallow } from 'enzyme';
import Provider from 'react-redux';

describe('MovieContianer', () => {
  
  describe('componentDidMount', () => {
    
    it.skip('sets the state componentDidMount', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            movies: [
              { title: 'Star Wars', score: 10 }, { title: 'Blade Runner', score: 3 }
            ]
          })
        })
      }))

      const renderedComponent = await shallow(<MovieContainer />)
      await renderedComponent.update()
      expect(renderedComponent('movies').length).toEqual(2)
    })
  })  
})
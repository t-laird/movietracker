
import React from 'react'
import { shallow } from 'enzyme'
import { MovieContainer, mapStateToProps, mapDispatchToProps } from './MovieContainer'
import * as actions from '../../Actions'

describe('MovieContainer', () => {
  describe('MovieContainer Component', () => {
    it('should match the snapshot', () => {
      const renderedComponent = shallow(<MovieContainer />)
      expect(renderedComponent).toMatchSnapshot()
    })

    it('should call handleSubmit on submitForm', () => {
      const mockHandleSubmit = jest.fn()
      const mockEvent = { preventDefault: jest.fn() }
      const renderedComponent = shallow(<AddTodoForm
        handleSubmit={mockHandleSubmit}
      />)
      renderedComponent.instance().submitForm(mockEvent)
      expect(mockHandleSubmit).toHaveBeenCalled()
    })

    it('should call handleRemove on removedClicked', () => {
      const mockHandleRemove = jest.fn()
      const mockEvent = { preventDefault: jest.fn() }
      const renderedComponent = shallow(<AddTodoForm
        handleRemove={mockHandleRemove}
      />)
      renderedComponent.instance().removedClicked(mockEvent, 0)
      expect(mockHandleRemove).toHaveBeenCalledWith(0)
    })

    it('should build html when printTodos is called', () => {
      const mockTodos = [{ text: 'Wrestle a wombat', id: 0 }]
      const renderedComponent = shallow(<AddTodoForm
        todos={mockTodos}
      />)
      const expected = [
        <div key="todo-0">
          <p>Wrestle a wombat</p>
          <button onClick={(e) => renderedComponent.instance().removedClicked(e, 0)}>
            Remove
          </button>
        </div>
      ]
      expect(renderedComponent.instance().printTodos()).toEqual(expected)
    })
  })

  describe('mapStateToProps', () => {
    it('should pull todos from the store', () => {
      const mockStore = {
        todos: [],
      }
      const result = mapStateToProps(mockStore)
      expect(result.todos).toEqual(mockStore.todos)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch when handleSubmit is called', () => {
      const mockDispatch = jest.fn()
      const mockTodo = { text: 'Pet a platypus', id: 0 }
      const result = mapDispatchToProps(mockDispatch)
      result.handleSubmit(mockTodo)
      expect(mockDispatch).toHaveBeenCalledWith(actions.addTodo(mockTodo))
    })

    it('should call dispatch when handleRemove is called', () => {
      const mockDispatch = jest.fn()
      const result = mapDispatchToProps(mockDispatch)
      result.handleRemove(0)
      expect(mockDispatch).toHaveBeenCalledWith(actions.removeTodo(0))
    })
  })
})


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
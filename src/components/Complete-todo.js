import React, { Component } from 'react';
import Todos from '../Todos';
import AddTodo from '../AddTodo';

class CompleteTodos extends Component {
    state = {
      todos:[
        {id:1, content:'buy some milk'},
        {id:2, content:'code some more'}
      ]
    }
    deleteTodo = (id) => {
      let todos = this.state.todos.filter(todo => todo.id !== id)
      this.setState({
        todos:todos
      })
      console.log(id)
    }
    addTodo = (todo) => {
      todo.id = Math.random();
      let todos = [...this.state.todos, todo]
      this.setState({
        todos:todos
      })
    }
    render() {
      return (        
        <div>
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo  addTodo={this.addTodo} />
        </div>
      );
    }
  }
  
  export default CompleteTodos;
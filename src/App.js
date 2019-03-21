import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Home from './components/Home'
import About from './components/About'
import CompleteTodos from './components/Complete-todo'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { BrowserRouter, Route, Switch } from 'react-router-dom'



class App extends Component {
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
      <BrowserRouter>
      
      <div>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route path='/About' component={About}/> 
          <Route path='/Contact' component={Contact}/>
          <Route path='/Todos' component={CompleteTodos}/>
          <Route path='/:post_id' component={Post}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

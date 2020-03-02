import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
// import uuid from 'uuid';
import About from './components/pages/About'
import axios from 'axios'


import './App.css';

class App extends React.Component {
  state = {
    todos: [
      // {
      //   id: uuid.v4(),
      //   title: 'Meeting with a friend',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: "Having dinner with the family",
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: "Going to the party",
      //   completed: false
      // }
    ]
  }
  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=> this.setState({todos:res.data}))

  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  //Delete Todo
  // delTodo = (id) => {
  //   this.setState({
  //     todos: [...this.state.todos.filter(todo => todo.id !== id)]
  //   });
  // }
  delTodo=(id)=> {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]}));
  }
  //Add Todo
  // addTodo = (title) => {

  //   const newTodo = {
  //     id: uuid.v4(),
  //     title,
  //     completed: false
  //   }
  //   this.setState({ todos: [...this.state.todos, newTodo] })
  // }
  //Add Todo
  addTodo=(title) => {
    axios.post('http://jsonplaceholder.typicode.com/todos',{
      title,
      completed:false
    })
    .then(res => this.setState({ todos: [...this.state.todos,res.data ] }));
  }
  

  render() {
    const { todos } = this.state;
    return (
      
      <Router>
        <div className="App">
          <div className="Container">
            <Header />
            <Route exact  path="/" render={props => (<React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={todos} markComplete={this.markComplete}
                delTodo={this.delTodo} />
            </React.Fragment>)} />
            <Route path="/about" component={About}/>
          </div>
        </div>

      </Router>
    );
  }
}

export default App;



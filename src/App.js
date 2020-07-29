import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import About from './components/pages/About';
import AddTodo from './components/AddTodo'; 
import './App.css';
import axios from 'axios';



class App extends Component{
  state={
    todos:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>this.setState({todos:res.data}))
  }
//       {
//         id:1,
//         title:'Take of the Trash',
//         completed:false
//     },
//     {
//       id:2,
//       title:'Dinner at Home',
//       completed:true
//   },
//   {
//     id:3,
//     title:'Meeting with Friends',
//     completed:false
// }
//   ]
  // }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos:this.state.todos.map(todos => {
      if(todos.id===id){
        todos.completed=!todos.completed
      }
      return todos;
    })})
  }
  //Delete Todo
  delTodos=(id) => {
    // console.log(id)
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    .then(res=>this.setState({ todos:[...this.state.todos.filter(todos=>todos.id!==id)]}));
    
  }
  //Add Todo
  AddTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,completed:false
    })
    .then(res =>this.setState({todos:
   [...this.state.todos,res.data]})); 
    
    // console.log(title);
    // const newTodo={
    //   id:4,
    //   title,
    //   completed:false
    // }
    // this.setState({todos:[...this.state.todos,newTodo]})
  }
  render(){
    // console.log(this.state.todos)
    return(
      <Router>
    <div className="App">
      <div className="container">
      <Header />
      <Route path="/" render={props =>(
      <React.Fragment>
          <AddTodo AddTodo={this.AddTodo} />
      <Todos todos={this.state.todos} markComplete={this.markComplete}
      delTodos={this.delTodos} />

      <Route path="/About" component={About}/>


        </React.Fragment>
      )} />
      
    </div>

      </div>
      </Router>
     
  );
}
}

export default App;

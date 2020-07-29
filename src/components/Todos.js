import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component{
    // markComplete=()=>{
    //     console.log('Hello')
    // }
    render(){
        return this.props.todos.map((todos) => (
       <TodoItem key={todos.id} todos={todos} markComplete=
       {this.props.markComplete} delTodos={this.props.delTodos} />

        ));
        
    }
    }
    //Proptypes
    Todos.propTypes= {
        todos:PropTypes.array.isRequired,
        markComplete:PropTypes.func.isRequired,
        delTodo:PropTypes.func.isRequired
    }
    export default Todos;
    
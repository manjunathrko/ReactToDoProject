import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {
    getStyle = () => {
        return{
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todos.completed ?            
            'line-through':'none'
        }

    }
    // markComplete = (e) => {
    //     console.log(this.props)
    // }
    render() {
        const {id, title}=this.props.todos;
        return (
            <div style={ this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> { ' '}
                    {title}</p>
                    <button onClick={this.props.delTodos.bind(this,id)} style={btnStyle}>x</button>
            </div>
        )
    }
}
//Proptypes
Todoitem.propTypes= {
    todos:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
}
const btnStyle = {
    backgroundColor:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'1px 8px',
    margin:'-20px 2px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default Todoitem

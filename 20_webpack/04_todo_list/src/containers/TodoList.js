import React from 'react';
import uuid from 'uuid';
import style from './TodoList.css';
import Todo from '../components/Todo.js';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    };


    renderTodos(todos) {
        return todos.map((todo) => {
            return (
                <Todo key={todo.id} id={todo.id} text={todo.text}/>
            );
        });
    }

    render() {
        return (
            <ul className={style.TodoList}>
                {this.renderTodos(this.props.todoList.data)}
            </ul>
        );
    }
}

export default TodoList;

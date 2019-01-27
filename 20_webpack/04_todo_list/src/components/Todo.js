import React from 'react';
import style from './Todo.css';

const Todo = (params) => <li className={style.Todo}>#{params.id}: {params.text}</li>;

export default Todo;

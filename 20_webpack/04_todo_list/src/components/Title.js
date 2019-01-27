import React from 'react';
import style from './Title.css';

//// FULL COMPONENT SYNTAX, with props initialization
// class Title extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <div className={style.TitleComponent}>
//                 To do list. {this.props.todoList.length} elements:
//             </div>
//         );
//     }
// }
//

//// PRESENTATION COMPONENT SHORT SYNTAX
const Title = props => <h1 className={style.TitleComponent}>To do list. {props.todoList.length} elements:</h1>

export default Title;

import React from 'react';
import './TodoItem.css'

function TodoItem({ todo, onUpdate, onDelete }) {
//function TodoItem({ id, content, isDone, createdDate, onUpdate }) {
    const onChangeCheckbox = () => {
        onUpdate(todo.id);
    };

    const onClickDelete = () => {
        onDelete(todo.id);
    };
    
    return (
        <div className='TodoItem'>
            <div className='checkbox_col'>
            <input onChange={onChangeCheckbox}
							 defaultChecked={todo.isDone} type="checkbox" />
            </div>
            <div className='title_col'>{todo.content}</div>
            <div className='date_col'>{new Date(todo.createdDate).toLocaleDateString()}</div>
            <div className='btn_col'>
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};
export default TodoItem;
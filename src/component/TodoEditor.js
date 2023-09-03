import React from 'react';
import { useState, useRef } from 'react';
import "./TodoEditor.css"


export default function TodoEditor({ onCreate }) {
    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeContent = (e) => {
      setContent(e.target.value);
    };
    const onSubmit = () => {
        if(!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

    return (
        <div className='TodoEditor'>
            <h1>새로운 Todo 작성하기 ✏️</h1>
            <div className="editor_wrapper">
                <input 
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown} 
                    placeholder='새로운 todo...' 
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};
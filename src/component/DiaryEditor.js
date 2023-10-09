import React from 'react';
import { useState, useRef } from 'react';

export default function DiaryEditor({ onCreate }) {
    const [state, setState] = useState({
        author: '',
        content: '',
        emotion: 1,
    });

    const authorInput = useRef();
    const contentInput = useRef();

    const onChangeState = (e) => {
        const key = e.target.name;
        const val = e.target.value;
        setState((prev) => ({
            ...prev,
            [key]: val,
        }));
    };

    const handleSubmit = (e) => {
        if (state.author.length < 1) {
            authorInput.current.focus();
            return;
        }

        if (state.content.length < 5) {
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion);
        alert('저장 성공');
        setState({
            author: '',
            content: '',
            emotion: 1,
        });
    };

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input name="author" ref={authorInput} value={state.author} onChange={onChangeState} />
            </div>
            <div>
                <textarea name="content" ref={contentInput} value={state.content} onChange={onChangeState} />
            </div>
            <div>
                <select name="emotion" value={state.emotion} onChange={onChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>저장</button>
            </div>
        </div>
    );
}

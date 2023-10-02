import React from 'react';
import './App.css';
import { useState, useRef } from 'react';

import DiaryEditor from './component/DiaryEditor';
import DiaryList from './component/DiaryList';
import Lifecyle from './component/Lifecycle';

// const dummyList = [
//     {
//         id: 1,
//         author: 'ts',
//         content: '심시해',
//         emotion: 5,
//         create_date: new Date().getTime(),
//     },
//     {
//         id: 2,
//         author: 'asdsd',
//         content: '심시해',
//         emotion: 5,
//         create_date: new Date().getTime(),
//     },
//     {
//         id: 3,
//         author: 'gggg',
//         content: '심시해',
//         emotion: 5,
//         create_date: new Date().getTime(),
//     },
//     {
//         id: 4,
//         author: 'zxczxc',
//         content: '심시해',
//         emotion: 5,
//         create_date: new Date().getTime(),
//     },
// ];

function App() {
    const [data, setData] = useState([]);

    const dataId = useRef(0);

    const onCreate = (author, content, emotion) => {
        const create_date = new Date().getTime();
        const newItem = {
            author,
            content,
            emotion,
            create_date,
            id: dataId.current,
        };
        dataId.current += 1;
        setData([newItem, ...data]);
    };

    const onRemove = (targetId) => {
        alert(`${targetId} 삭제완료`);
        setData(data.filter((it) => it.id !== targetId));
    };

    const onEdit = (targetId, newContent) => {
        setData(data.map((it) => (it.id === targetId ? { ...it, content: newContent } : it)));
    };

    return (
        <div className="App">
            <Lifecyle />
            <DiaryEditor onCreate={onCreate} />
            <DiaryList onEdit={onEdit} onRemove={onRemove} list={data} />
        </div>
    );
}

export default App;

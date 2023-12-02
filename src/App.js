import React from 'react';
import './App.css';
import { useState, useRef } from 'react';

import DiaryEditor from './component/DiaryEditor';
import DiaryList from './component/DiaryList';
import OptimizeTest from './component/OptimizeTest';
import { useEffect } from 'react';
import { useMemo } from 'react';

function App() {
    const [data, setData] = useState([]);

    const dataId = useRef(0);

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());

        const initData = res.slice(0, 20).map((it) => {
            return {
                author: it.email,
                content: it.body,
                emotion: Math.floor(Math.random() * 5) + 1,
                create_date: new Date().getTime(),
                id: dataId.current++,
            };
        });

        setData(initData);
    };

    useEffect(() => {
        getData();
    }, []);

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

    const getDiaryAnalysis = useMemo(() => {
        const goodCount = data.filter((itm) => itm.emotion >= 3).length;
        const badCount = data.length - goodCount;
        const goodRatio = (goodCount / data.length) * 100;
        return { goodCount, badCount, goodRatio };
    }, [data.length]); // data.length가 변경되면 동작

    const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

    return (
        <div className="App">
            {/* <OptimizeTest /> */}
            <DiaryEditor onCreate={onCreate} />
            <div>전체 일기 : {data.length}</div>
            <div>기분 좋음 : {goodCount}</div>
            <div>기분 나쁨 : {badCount}</div>
            <div>기분 좋은 비율 : {goodRatio}</div>
            <DiaryList onEdit={onEdit} onRemove={onRemove} list={data} />
        </div>
    );
}

export default App;

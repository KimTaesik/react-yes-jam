import React from 'react';
import DiaryItem from './DiaryItem';

export default function DiaryList({ onEdit, onRemove, list }) {
    return (
        <div className="DiaryList">
            <h2>일기리스트</h2>
            <h4>{list.length}개의 일기가존재</h4>
            <div>
                {list.map((it) => (
                    <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
                ))}
            </div>
        </div>
    );
}

DiaryList.defaultProps = {
    list: [],
};

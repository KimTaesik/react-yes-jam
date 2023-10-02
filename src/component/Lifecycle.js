import React, { useEffect, useState, useRef } from 'react';

const UnmountTest = () => {
    useEffect(() => {
        console.log('Mount!');

        return () => {
            console.log('Unmount!');
        };
    }, []);
    return <div>Unmount Testing Component</div>;
};

export default function Lifecyle() {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (
        <div style={{ padding: 20 }}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest />}
        </div>
    );
}

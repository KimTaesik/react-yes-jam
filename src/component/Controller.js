import React from 'react';





const Controller = ({countHandle}) => {
    function handleClick() {
      countHandle(-1);
    }

    return (
      <div>
        {/* <button onClick={handleClick}>-1</button> */}
        {/* <button onClick={function() { return countHandle(-1); }}>-1</button> */}
        <button onClick={() => countHandle(-1)}>-1</button>
        <button onClick={() => countHandle(-10)}>-10</button>
        <button onClick={() => countHandle(-100)}>-100</button>
        <button onClick={() => countHandle(100)}>+100</button>
        <button onClick={() => countHandle(10)}>+10</button>
        <button onClick={() => countHandle(1)}>+1</button>
      </div>
    );
};

export default Controller;
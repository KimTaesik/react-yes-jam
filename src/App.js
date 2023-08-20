import React from 'react';
import "./App.css";
import { useRef, useState, useEffect } from "react";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false);

  const countHandle = (val) => {
    setCount(count + val);
  }
  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트!");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller countHandle={countHandle} />
      </section>
    </div>
  )

}

export default App;
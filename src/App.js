import React from 'react';
import "./App.css";
import { useState } from "react";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";


function App() {
  const [count, setCount] = useState(0);
  const countHandle = (val) => {
    setCount(count + val);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
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
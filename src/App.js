import React from 'react';
import "./App.css";
import Header from "./component/Header"
import Body from "./component/Body"
import Footer from "./component/Footer"



function ChildComp() {
  return <div>child component</div>;
}


function App() {
  // Props로 값 전달하기
  const name = "김태식";

  // 스프레드 연산자로 전달
  const BodyProps = {
    name: "김태식",
    location: "고양시",
    favorList: ["파스타", "곱창", "돼지갈비"],
  };

  return (
    <div className='App'>
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  )


  const temp2 = (
    <div className="App">
      <Header />
      <Body {...BodyProps} />
      <Footer />
    </div>
  );

  const temp1 = (
    <div className="App"> 
      <Header /> 
      <Body name={name} location={"고양시"} />
      <Footer />
    </div>
  );
}

export default App;
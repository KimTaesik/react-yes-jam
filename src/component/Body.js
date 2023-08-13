import React, { useRef, useState } from 'react';
import "./Body.css"; // style file 


// function Viewer() {
//   console.log("viewer component update!");
//   return <div>Viewer</div>;
// }

//Props와 State
// function Viewer({ nnumber }) {
//   return <div>{nnumber % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
// }

// App.js에서 props 전달
// props 여러개 전달
// 1. function Body(props) {
// 2. function Body({ name, location }) {
// 3. function Body({ name, location, favorList }) {
function Body({ children }) {

  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      setText("");
    }
  };

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성 완료</button>
    </div>
  );

  // const [text, setText] = useState("");
  // const textRef = useRef();

  // const handleOnChange = (e) => {
  //   setText(e.target.value);
  // };
  // const handleOnClick = () => {
  //   alert(text);
  //   textRef.current.value = "";
  // };

  // return (
  //   <div>
  //     <input ref={textRef} value={text} onChange={handleOnChange} />
  //     <button onClick={handleOnClick}>작성 완료</button>
  //   </div>
  // );


  // const [text, setText] = useState("");

  // const handleOnChange = (e) => {
  //   setText(e.target.value);
  // };

  // const handleOnClick = () => {
  //   alert(text);
  // };

  // return (
  //   <div>
  //     <input value={text} onChange={handleOnChange} />
  //     <button onClick={handleOnClick}>작성 완료</button>
  //   </div>
  // );
  
  // const [nnumber, setNumber] = useState(0);
  // const onIncrease = () => {
  //   setNumber(nnumber + 1);
  // };
  // const onDecrease = () => {
  //   setNumber(nnumber - 1);
  // };

  // return (
  //   <div>
  //     <h2>{nnumber}</h2>
  //     <Viewer />
  //     <div>
  //       <button onClick={onDecrease}>-</button>
  //       <button onClick={onIncrease}>+</button>
  //     </div>
  //   </div>
  // );


  // Props와 State
  // const [nnumber, setNumber] = useState(0);

  // const onIncrease = () => {
  //   setNumber(nnumber + 1);
  // };
  // const onDecrease = () => {
  //   setNumber(nnumber - 1);
  // };

  // return (
  //   <div>
  //     <h2>{nnumber}</h2>
  //     <Viewer nnumber={nnumber} />
  //     <div>
  //       <button onClick={onDecrease}>-</button>
  //       <button onClick={onIncrease}>+</button>
  //     </div>
  //   </div>
  // );




  // const [state, setState] = useState({
  //   name: "",
  //   gender: "",
  //   birth: "",
  //   bio: "",
  // });

  // const handleOnChange = (e) => {
  //   console.log("현재 수정 대상:", e.target.name);
  //   console.log("수정값:", e.target.value);
  //   console.log({...state});
  //   console.log(state)
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // return (
  //   <div>
  //     <div>
  //       <input
  //         name="name"
  //         value={state.name}
  //         onChange={handleOnChange}
  //         placeholder="이름"
  //       />
  //     </div>
  //     <div>
  //       <select name="gender" value={state.gender} onChange={handleOnChange}>
  //         <option key={""}></option>
  //         <option key={"남성"}>남성</option>
  //         <option key={"여성"}>여성</option>
  //       </select>
  //     </div>
  //     <div>
  //       <input
  //         name="birth"
  //         type="date"
  //         value={state.birth}
  //         onChange={handleOnChange}
  //       />
  //     </div>
  //     <div>
  //       <textarea name="bio" value={state.bio} onChange={handleOnChange} />
  //     </div>
  //   </div>
  // );



  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [birth, setBirth] = useState("");
  // const [bio, setBio] = useState("");

  // console.log(name,gender,birth,bio);
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeGender = (e) => {
  //   setGender(e.target.value);
  // };
  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };
  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  // return (
  //   <div>
  //     <div>
  //       <input value={name} onChange={onChangeName} placeholder="이름" /> ①
  //     </div>
  //     <div>
  //       <select value={gender} onChange={onChangeGender}> ②
  //         <option key={""}></option>
  //         <option key={"남성"}>남성</option>
  //         <option key={"여성"}>여성</option>
  //       </select>
  //     </div>
  //     <div>
  //       <input type="date" value={birth} onChange={onChangeBirth} /> ③
  //     </div>
  //     <div>
  //       <textarea value={bio} onChange={onChangeBio} /> ④
  //     </div>
  //   </div>
  // );


  // const [text, setText] = useState("");
  // const handleOnChange = (e) => {
  //   console.log("변경된 값 : ", e.target.value);
  //   setText(e.target.value);
  // };

  // return (
  //   <div>
  //     <textarea value={text} onChange={handleOnChange} />
  //   </div>
  // );



  // const [option, setOption] = useState("");
  // const handleOnChange = (e) => {
  //   console.log("변경된 값: ", e.target.value);
  //   setOption(e.target.value);
  // };

  // return (
  //   <div>
  //     <select value={option} onChange={handleOnChange}>
  //       <option key={"1번"}>1번</option>
  //       <option key={"2번"}>2번</option>
  //       <option key={"3번"}>3번</option>
  //     </select>
  //   </div>
  // );

  
  // const [date, setDate] = useState("");
  // const handleOnChange = (e) => {
  //   console.log("변경된 값: ", e.target.value); // yyyy-mm-dd 기본?
  //   setDate(e.target.value);
  // };
  // return (
  //   <div>
  //     <input type="date" value={date} onChange={handleOnChange} />
  //   </div>
  // );


  // console.log("으엉엉"); // 계속 찍힘ㅎ
  // const [tt, setText] = useState("");
  // const handleOnChange = (e) => {
  //   setText(e.target.value);
  // };
  // return (
  //   <div>
  //     <input value={tt} onChange={handleOnChange} />
  //     <div>{tt}</div>
  //   </div>
  // );


  // const handleOnChange = (e) => {
  //   console.log(e.target.value);
  // };

  // return (
  //   <div>
  //     <input onChange={handleOnChange} />
  //   </div>
  // )


  // const [count, setCount] = useState(0);

  // const onIncrease = () => {
  //   setCount(count + 1);
  // }

  // return (
  //   <div>
  //     <h2>{count}</h2>
  //     <button onClick={onIncrease}>+</button>
  //   </div>
  // )


  // function handleOnClick(e) {
  //   console.log(e);
  //   console.log(e.target.name);
  // }

  // return (
  //   <div className="body">
  //     <button name="A버튼" onClick={handleOnClick}> ②
  //       A 버튼
  //     </button>
  //     <button name="B버튼" onClick={handleOnClick}> ③
  //       B 버튼
  //     </button>
  //   </div>
  // );


  // function handleOnClick() {
  //   alert("클릭!");
  // }

  // return (
  //   <div className='body'>
  //     <button onClick={handleOnClick}>클릭하셉숑</button>
  //   </div>
  // );


  
  // console.log(children);
  // return (
  //   <div className='body'>{children}</div>
  // )

  //const { name, location } = props;
  // console.log(name, location, favorList);
  // return (
  //   <div className="body">
  //     {name}은 {location}에 거주함함다!
  //     <br />
  //     {favorList.length}개의 음식을 좋아함다.
  //   </div>
  // )

  // Body.defaultProps = {
  //   favorList: [],
  // }

  // return (
  //   <div className="body">
  //     {name}은 {location}에 거주함함다!
  //   </div>
  // )
  
  // <Body name={name} location={"고양시"} />
  // const temp2 = (
  //   <div className='body'>
  //     {props.name}은 {props.location}에 거주함다.
  //   </div>
  // );
    
  // 1. 산술 표현식
  const number = 1;

  // 2. 문자열 표현식
  const strA = "안녕";
  const strB = "리액트트";

  // 3. 논리 표현식
  const boolA = true;
  const boolB = false;

  // 4. 사용 할 수 없는 값
  const objA = {
    a: 1,
    b: 2,
  };

  // 5. 조건부 렌더링
  const num = 19;

  const temp1 = (
    // 최상위 태그를 사용하거나
    // <React.Fragment> </React.Fragment> 태그로 감싸야한다
    // 아니면 빈 태그 <> </>
    
    // class 선택자가 아닌 className 을 사용한다
    <div className='body'>
      <h1>body</h1>
      {/* 1. 산술 표현식*/}
      <h1>{number}</h1>
      {/**/}

      {/* 2. 문자열 표현식 */}
      <h2>{strA + strB}</h2>
      {/**/}

      {/* 3. 논리 표현식 */}
      <h2>{String(boolA || boolB)}</h2>
      {/**/}

      {/* 4. 사용 할 수 없는 값 */}
      {/* <h2>{objA}</h2> 이렇게는 못씀 */}
      <h2>a: {objA.a}</h2>
      <h2>b: {objA.b}</h2>
      {/**/}

      {/* 5. 조건부 렌더링 */}
      <h2>
        {num}은(는) {num % 2 === 0 ? "짝수" : "홀수"}입니다.
      </h2>
      {/**/}

      {/* 6. 인라인 스타일링 */}
      <h1 style={{ backgroundColor: "red", color: "blue" }}>body</h1>
      {/**/}

    </div>
    // 조건문
    // const num = 200;
    // if (num % 2 === 0) {
    //   return <div>{num}은(는) 짝수입니다</div>;
    // } else {
    //   return <div>{num}은(는) 홀수입니다</div>;
    // }
  );
}

export default Body;

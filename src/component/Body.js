import React, { useState } from 'react';
import "./Body.css"; // style file 

function Body() {
  // 1. 산술 표현식
  const number = 1;

  // 2. 문자열 표현식
  const strA = "안녕";
  const strB = "리액트트";

  // 4. 사용 할 수 없는 값
  const objA = {
    a: 1,
    b: 2,
  };

  return (
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

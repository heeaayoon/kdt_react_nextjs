//클라이언트 사이드 랜더링 - CSR(Client Side Randering)
//전통적인 React 앱(Create React App으로 만든 앱)의 기본 동작 방식
//서버는 텅 빈 껍데기만 보내주고, 실제 페이지는 브라우저(클라이언트)가 그리는 방식 
//useState, useEffect와 같은 React Hook을 사용하거나 브라우저 API에 접근해야 할때 사용

//이 전체 페이지는 서버컴포넌트임
import MyClockTime from "../myclock/MyClockTime"; // 클라이언트 컴포넌트

export default async function AppCSR() { 
  return (
  <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold p-5'>
                CSR 예제
            </h1>
            <p className='text-blue-600'>
               클라이언트에서 실행되며, 클라이언트의 시간을 가져옴
            </p>
            <MyClockTime/> {/*-> CSR 주입 : ServerSideRendering에 ClientsideRendering 주입 시키는 기법(하이드레이션)*/}
        </div>
  );
}

//전체 동작 과정
//1. 서버에서 렌더링
//Next.js 서버가 `AppCSR` 페이지 렌더링을 시작
//<div>, <h1>, <p> 태그 등 정적인 부분은 즉시 HTML로 만듦
// <MyClockTime> 컴포넌트를 만나면 MyClockTime의 초기 HTML 모습만 그려서 <MyClockTime> 컴포넌트의 JavaScript 파일과 함께 클라이언트에 보냄

// 2. 클라이언트(브라우저)에 전송
// 2-1. 초기 화면 표시 (빠른 로딩)
// 브라우저는 HTML을 받자마자 즉시 화면에 그림
// 사용자는 거의 바로 페이지의 전체적인 모습 확인 가능 (단, 시계는 아직 멈춰있음)
// 2-2. 하이드레이션 
// 브라우저는 다운로드한 <MyClockTime>의 JavaScript 파일을 실행
// React는 이 JavaScript 코드를 서버에서 미리 그려놓은 <MyClockTime>의 HTML 부분에 연결 -> 멈춰있던 HTML에 useState, useEffect의 기능이 주입

// 3. 결과
// 멈춰있던 시계가 움직이기 시작 -> 페이지는 완전히 상호작용 가능한 상태
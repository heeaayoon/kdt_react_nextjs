//App 라우터 방식
//서버에서 데이터를 비동기적으로 가져와서 화면에 렌더링하는 페이지를 만드는 예제

import React from "react"; //리액트 라이브러리를 사용하기 위해 import

//데이터타입 정의 
type TdataItem = { 
    title:string,
    content:string 
}

//3초 후 페이지에 필요한 데이터를 비동기적(async)으로 반환하는 함수 (데이터베이스나 API 호출을 흉내냄)
const getData = async()=>{ //async 함수의 리턴은 Promise(나중에 성공여부를 반환)
    return new Promise<TdataItem>((resolve)=>{
        setTimeout(()=>{
            resolve({
                title:"App router",
                content:"앱라우트 테스트"
            })
        }, 3000) //3초 후에 resolve를 호출해서 Promise를 해결(resolve)
    })
}

export default async function App01Page(
    // {searchParams}:{searchParams:{[key:string]:string}} //searchParams은 URL쿼리로 들어온 파라미터를 Next.js는 객체 형태로 변환 -> 이를 App01Page 컴포넌트에 매개변수로 넣어주는 역할
){ 
    // if(searchParams.error == 'true'){ //URL 주소에 ?error=true 라는 부분이 포함되어 있다면,
    //     throw new Error("서버에서 발생된 에러"); //의도적으로 Error 컴포넌트를 호출
    // }
    const tdata = await getData();
    return(
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold p-5'>
                {tdata.title}
            </h1>
            <p className='text-blue-600'>
                {tdata.content}
            </p>
        </div>
    );
}
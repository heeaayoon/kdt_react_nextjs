// 사용자와 상호작용이 필요한 부분을 별도의 클라이언트 컴포넌트로 분리해서 사용
// 이 컴포넌트를 서버 컴포넌트인 appcrs/page.tsx에서 불러서 사용함
'use client'  // 이 컴포넌트는 클라이언트 사이드에서 실행됨을 명시
import { useEffect, useState } from "react";

export default function MyClockTime () {
    const [currentTime, setcurrentTime] = useState(new Date().toLocaleTimeString()) //useState: 시간이 바뀔 때마다 화면을 다시 그리기 위함
   
    useEffect(()=>{ //useEffect: 페이지가 로드된 후, 1초마다 currentTime 상태를 업데이트하는 타이머(setInterval)를 설정
        const tm = setInterval(() => {
            setcurrentTime(new Date().toLocaleTimeString())
            }, 1000);
            
        return(()=>{
            clearInterval(tm)
        });
},[])

    return(
        <div className="font-bold">
            현재 시간 : {currentTime} 
        </div>
    )
}
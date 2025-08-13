//'/' 페이지 : 기본 페이지
'use client'
//login.tsx와 page.tsx의 역할 충동 -> 완벽하게 분리하기
//page.tsx는 <Login> 컴포넌트를 화면에 보여주는 역할
//Login.tsx는 sLogin 상태를 확인하고, true이면 환영 메시지와 로그아웃 버튼을, false이면 로그인 폼을 보여주기
import Login from "@/components/Login"; //로그인 컴포넌트

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-100">
      <Login/>
    </div>
  )
}

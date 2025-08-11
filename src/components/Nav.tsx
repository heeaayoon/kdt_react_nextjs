'use client'
// import reactLogo from "../assets/react.svg"
// import viteLogo from '/vite.svg'

// img태그는 
import Image from 'next/image';

// 라우팅
// import {Link, useNavigate} from 'react-router-dom'
import Link from 'next/link';
// useNavigate -> useRouter : next/navigation
import { useRouter } from 'next/navigation';

  

// 전역변수(상태공유)
import { useAtom } from 'jotai' 
import {isLogin} from "../atoms/isLoginAtom"


export default function Nav() {
  //초기값 = false = 로그아웃
  //useAtom 괄호안 '객체' 들어가야함
  const [login, setLogin] = useAtom(isLogin);


  const navigate = useRouter();

  const handleLogout = () => {
    setLogin(false);
    navigate.push("/")
  }
  return (
     <header className="w-full min-h-20 flex justify-between items-center bg-blue-200 ">
          <div className="flex ml-10">
            {/* <img src={reactLogo} alt="React logo" /> +
            <img src={viteLogo} alt="vite logo" /> */}

            <Image src='/img/react.svg' width={40} height={40} alt='react' className='mr-2' />  
            <Image src='/next.svg' width={80} height={80} alt='nextjs' />
          </div>
          <div className="text-gray-500 font-bold text-xs">
            <ul className="flex justify-center items-center">
              <Link href = "/"><li className="px-2 hover:bg-amber-100 rounded-xl hover:text-black">홈으로</li></Link>
              
              {/* 자바스크립트 && 연산자 = 왼쪽이 true 일때 오른쪽이 실행됨 */}
                 { 
                login && <Link href = "/Food">
                <li className="px-2 hover:bg-amber-100 rounded-xl hover:text-black">음식</li></Link>
              }
              { 
                login && <Link href = "/lotto">
                <li className="px-2 hover:bg-amber-100 rounded-xl hover:text-black">로또</li></Link>
              }
              { 
                login && <Link href = "/myclock">
                <li className="px-2 hover:bg-amber-100 rounded-xl hover:text-black">시계</li></Link>
              }
              { 
                login && <Link href = "/Subway">
                <li className="px-2 hover:bg-amber-100 rounded-xl hover:text-black">지하철 대기정보</li></Link>
              }
              { login && <Link href ='/Todo'>
              <li className="px-2 hover:bg-amber-100 rounded-xl hover:text-black">할 일 목록</li></Link>
              }
            </ul>
          </div>
          <div className="mr-10 text-xs font-bold p-4 bg-blue-300 text-white rounded-xl">
           
           { 
            login ? <span className="cursor-pointer"
                            onClick={handleLogout}>로그아웃</span> 
                  :  <Link href="/Login" className="cursor-pointer text-white">로그인</Link>
            }
          </div>
          
        </header>
  )
}

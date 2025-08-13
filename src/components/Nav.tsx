'use client'
// import reactLogo from "../assets/react.svg"
// import viteLogo from '/vite.svg'
// <img> 대신 <Image> 태그 사용
import Image from 'next/image';

// 라우팅
// import {Link, useNavigate} from 'react-router-dom'
import Link from 'next/link'; //<a> 대신 <Link> 태그 사용
// useNavigate(페이지 이동 기능만 함) 대신 useRouter(페이지 이동기능+현재 라우트(URL)에 대한 거의 모든 정보를 담고 있는 객체를 반환) 사용
import { useRouter } from 'next/navigation';

// 전역변수(상태공유)
import { useAtom } from 'jotai' 
import {isLogin} from "../atoms/isLoginAtom"

export default function Nav() {
  //초기값 = false = 로그아웃으로 설정함
  const [login, setLogin] = useAtom(isLogin);

  // const navigator = useNavigate() ;
  const route = useRouter();

  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem("email");
    // navigator("/");
    route.push("/") // 페이지 이동
  }

  return (
     <header className="w-full min-h-20 flex justify-between items-center bg-blue-200 ">
          <div className="flex ml-10">
            {/* <img src={reactLogo} alt="React logo" /> + <img src={viteLogo} alt="vite logo" /> */}
            <Image src='/img/react.svg' width={40} height={40} alt='react' className='mr-2' />  
            <Image src='/next.svg' width={80} height={80} alt='nextjs' />
          </div>
          <div className="text-gray-500 font-bold text-xs">
            <ul className="flex justify-center items-center">
              {/* <Link to = "/"> */}
              <Link href = "/">
                <li className="px-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-indigo-50 p-2">
                  HOME
                </li>
              </Link>
              { 
                login && <Link href = "/food"> 
                {/* // 로그인 상태일 때만 /Food 링크 표시 */}
                {/* src>app>하위 폴더명과 동일하게 경로 설정 */}
                <li className="px-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-indigo-50 p-2">Food</li></Link>
              }
              { 
                login && <Link href = "/lotto">
                <li className="px-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-indigo-50 p-2">Lotto</li></Link>
              }
              { 
                login && <Link href = "/myclock">
                <li className="px-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-indigo-50 p-2">Clock</li></Link>
              }
              { 
                login && <Link href = "/subway">
                <li className="px-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-indigo-50 p-2">Subway</li></Link>
              }
              { login && <Link href ='/todo'>
                <li className="px-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-indigo-50 p-2">Todo List</li></Link>
              }
            </ul>
          </div>

          {/* //로그아웃 상태일때만 이 div 태그(로그인)를 클릭하면 로그인 페이지로 이동 */}
          <div className="mr-10 text-xs font-bold p-4 bg-blue-300 text-white rounded-xl">
           { 
            login ? <span className="cursor-pointer"
                            onClick={handleLogout}>로그아웃</span> 
                  :<Link href="/Login" className="cursor-pointer text-white">로그인</Link>
            }
          </div>
        </header>
  )
}

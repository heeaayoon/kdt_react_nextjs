'use client'
import { useRef, useState, useEffect } from 'react'
import { isLogin as isLoginAtom } from '@/atoms/isLoginAtom';
import { useAtom } from 'jotai';
import type { MouseEvent } from 'react';

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);

  const [isLogin,setIsLogin] = useAtom(isLoginAtom); //전역변수 상태 받아오기
  const [userEmail, setUserEmail] = useState<string | null>(null); //로그인된 사용자의 이메일 받아오기 위해 설정

  // 컴포넌트가 처음 렌더링될 때 localStorage를 확인해서 로그인 상태를 복원
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setIsLogin(true); // 로컬 스토리지에 정보가 있으면 로그인 상태로 만듦
      setUserEmail(storedEmail); //이메일도 저장
    }
  }, []);

  const handelLogin = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 새로고침 방지

    const email = emailRef.current?.value; 
    const password = pwdRef.current?.value;

    if (!email) { // 이메일이 비어있으면
      alert("이메일을 입력하세요.");
      emailRef.current?.focus();
      return;
    }
    if (!password){  // 비밀번호가 비어있으면
      alert("비밀번호를 입력하세요.");
      pwdRef.current?.focus();
      return;
    }

    if(email!="hee@gmail.com"){
        alert("이메일을 잘못 입력했습니다."); //백엔드에서 보낸 응답을 이용해서 작성해야할 부분임
        return;
    }

    if(password!="1234"){
        alert("비밀번호가 일치하지 않습니다."); //백엔드에서 보낸 응답을 이용해서 작성해야할 부분임
        return;
    }

    // 로그인이 성공하면
    localStorage.setItem("email",email);  // 로컬 스토리지에 이메일 저장
    setIsLogin(true); // 전역 상태를 true로 변경하여 로그인 상태로 설정
  }

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("email"); // 로컬 스토리지에서 이메일 제거
    setUserEmail(null); // 이메일 상태 초기화
  }

  // Login 상태에 따라 다른 UI를 보여줌 
    return (
        <>
          {isLogin ? (
              // isLogin이 true일 때 -> 환영메세지와 로그아웃 버튼 
              <div className="text-center bg-white p-10 rounded-xl shadow-lg">
                  <h1 className="text-3xl font-bold text-gray-800">환영합니다!</h1>
                  <p className="mt-4 text-lg text-gray-600">
                      <span className="font-semibold text-purple-600">{localStorage.getItem("email")}</span> 님, 로그인되었습니다.
                  </p>
                  <button onClick={handleLogout}
                          className="mt-8 w-full bg-red-500 text-white font-bold py-3 rounded-lg
                                    hover:bg-red-600 transition-all duration-300 ease-in-out
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      LOG OUT
                  </button>
              </div>
          ) : (
              // isLogin이 false일 때 -> 로그인폼
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-1 shadow-2xl">
                  <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 md:p-8">
                      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                          LOGIN
                      </h1>
                      <form className="space-y-6">
                          <div className="flex flex-col space-y-2">
                              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                              <input ref={emailRef}
                                  id="email"
                                  type="email"
                                  className="w-full rounded-lg border border-gray-300 p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                  placeholder="your@email.com" required />
                          </div>
                          <div className="flex flex-col space-y-2">
                              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                              <input ref={pwdRef}
                                  id="password"
                                  type="password"
                                  className="w-full rounded-lg border border-gray-300 p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                  placeholder="Password" required />
                          </div>
                          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-lg
                                              hover:from-purple-500 hover:to-blue-500 hover:scale-105 transition-all duration-300 ease-in-out
                                              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                  onClick={handelLogin}>
                              LOG IN
                          </button>
                      </form>
                  </div>
              </div>
          )}
        </>
    );
}

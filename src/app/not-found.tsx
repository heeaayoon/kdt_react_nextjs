//요청한 주소의 페이지가 존재하지 않을 때 보여지는 페이지
import React from 'react';
import Link from 'next/link'; // 다른 페이지로 이동하는 링크를 만들기 위한 컴포넌트 -> <a> 와 유사

export default async function NotFound() {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold p-5'>
                (404) 페이지를 찾을 수 없습니다
            </h1>
            <p className='text-red-600'>
                요청하신 페이지가 존재하지 않습니다.
            </p>
            <Link href={"/"}>처음으로</Link>
        </div>
    );
}
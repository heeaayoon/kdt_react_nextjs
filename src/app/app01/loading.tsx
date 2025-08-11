// page.tsx에서 로딩이 될 동안 보여지는 페이지
// Next.js는 자동으로 'loading.tsx'라는 파일명의 컴포넌트를 데이터 로딩 시 보여줄 UI로 인식
import React from 'react';

export default async function Loading() {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold p-5'>
                페이지 로딩중 ...
            </h1>
            <p className='text-blue-600'>
                잠시만 기다려 주세요.
            </p>
        </div>
    );
}
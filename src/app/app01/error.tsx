//같은 폴더에 있는 page.tsx 또는 그 자식 컴포넌트에서 에러가 발생했을 때, 
//앱 전체가 멈추는 대신 사용자에게 보여주는 비상용 페이지
'use client'; // "클라이언트 컴포넌트"임을 명시 -> 동적인 상황에 대처하기 위해

export default function Error({error}:{error : Error}){
    return(
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold p-5'>
                페이지 에러
            </h1>
            <p className='text-red-600'>
                오류메시지 : {error.message} 
                {/* new Error(...)로 생성된 모든 객체는 자동으로 message라는 속성을 가짐 -> error.message로 값을 받아오는 이유 */}
            </p>
        </div>
    );
}
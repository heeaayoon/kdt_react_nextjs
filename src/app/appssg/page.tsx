//서버 우선 랜더링 - SSG(Static Site Generation)
//정적사이트 생성 
//빌드 시점에 미리 모든 페이지에 대한 HTML 문서를 생성 -> 빠른 로딩 속도 
//npm run build 로 빌드 시에 단 한 번 렌더링됨
export default async function AppSSG () {
    const ssgTime = new Date().toLocaleString('ko-KR');
    return (
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold p-5'>
                    SSG 빌드 시간 : {ssgTime}
                </h1>
                <p className='text-blue-600'>
                    Build시 HTML 문서로 생성되고, 새로고침을 해도 변경되지 않음.
                </p>
            </div>
    );
}
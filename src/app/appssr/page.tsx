//서버 우선 랜더링 - SSR(Server-Side Rendering)
//사용자가 페이지를 요청할 때마다, 서버에서 해당 페이지의 HTML을 실시간으로 동적으로 생성해서 클라이언트에 전달
export const dynamic = 'force-dynamic'; //Next.js에게 무조건 모든 요청에 대해 동적으로 렌더링하라고 강제하는 명령 -> SSR로 실행하라

export default async function AppSSR () {
    const ssrTime = new Date().toLocaleString('ko-KR');
    return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold p-5'>
                    SSR : {ssrTime}
                </h1>
                <p className='text-blue-600'>
                    요청시 HTML 문서로 생성하므로, 새로고침하면 변경된 시간이 보임.
                </p>
            </div>
    );
}
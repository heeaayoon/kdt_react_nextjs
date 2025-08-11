//서버 우선 랜더링 - ISR(Incremental Static Regeneration)
//일단 정적 페이지(SSG)로 매우 빠르게 보여주고, 지정된 시간이 지나면 새로운 버전으로 교체하는 방식
//빌드 시점에 미리 모든 페이지에 대한 HTML 문서를 생성
//지정된 시간이 경과하면, 백그라운드에서 HTML 다시 만들고, 캐시를 업데이트함
export const revalidate = 10; // 10초마다 갱신 -> 페이지 전체에 대한 캐시 유효 시간을 설정

export default async function AppISR() {
    const Time = new Date().toLocaleString('ko-KR');
    return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold p-5'>
                    ISR : {Time}
                </h1>
                <p className='text-blue-600'>
                    빌드시 HTML 문서로 생성되고, 주기적으로(10초) 백그라운드에서 다시 생성.
                </p>
            </div>
    );
}
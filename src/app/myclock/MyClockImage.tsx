//서버 컴포넌트 
//상태(state)나 상호작용이 필요 없는 정적인 부분 담당
import Image from "next/image"

export default function MyClockImage() {
  return (
    <div className="w-full flex justify-center">
      {/* <img className="w-1/2" src={clock} alt="시계" /> 대신 <Image> 태그를 사용*/}
      <Image src={"/img/clock.png"}
             width={700} height={700} alt="시계" />
    </div>
  )
}


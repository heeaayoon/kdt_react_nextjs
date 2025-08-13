import scode from '@/db/scode.json' //scode.json 파일을 가져오기
import type { TdataItem } from './page' //Subway.tsx 에서 사용한 TdataItem이라는 type을 가져오기

interface SubwayBoxProps{
  item:TdataItem
  idx :number
}

type ScodeKey = keyof typeof scode; //scode의 키들의 유니온타입 //"pm10"|"co2"|...

export default function SubwayBox({item, idx}:SubwayBoxProps) {

    //scode의 키 목록을 가져오기
    //const keys = Object.keys(scode) // 기존 -> string 배열
    const keys = Object.keys(scode) as ScodeKey[]; // 수정 -> scode의 키들의 유니온타입 배열
  
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        <div>
          {item.site}{item.city}
        </div>
        <div>
          {`${item.controlnumber.slice(0,4)}년
            ${item.controlnumber.slice(4,6)}월 
            ${item.controlnumber.slice(6,8)}일 
            ${item.controlnumber.slice(8,10)}시 `}
        </div>
      </div>
      <div className='w-full grid grid-cols-9 gap-1'>
        {keys.map(key => (
          <div key={key} className='border-1 black'>
              <div key={key} className={`text-center text-white ${idx % 2 == 0 ? 'bg-green-700' : 'bg-red-600'}`}>
                {/* {scode[key as keyof typeof scode].name}<br/>({key})  */}
                {scode[key].name}<br/>
                ({key})
              </div>
              <div className='border-1 black text-center'>
                  {/* {item[key as keyof TdataItem]}{item[key as keyof typeof scode]=="-"?"":scode[key as keyof typeof scode].unit} */}
                  {item[key as keyof TdataItem]}{item[key]=="-"?"":scode[key].unit}
              </div>
          </div>))
        }
      </div>
    </div>
  )
}

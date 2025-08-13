'use client'
import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"
import TailButton from "@/ui/TailButton";
import type { FoodItem } from "@/types/Food";
import { useState, type ReactNode } from "react";

export default function FoodMain() {
    const [tag, setTag] = useState<ReactNode[]>([]) //만든 태그이므로 ReactNode 사용하기**

    // let group:string[] = fooddata.map(item=> item["운영주체 분류"].replaceAll(' ',"")); //운영주체만 뽑아낸 string 배열
    // group = [...new Set(group)];

    //구분
    let group1 : string[] = fooddata.map (item => item["구분"].replaceAll(' ',''))
    group1 = [...new Set(group1)]

    const handleClick = (gubun:string) => {
      //console.log(gubun)
      let choose : FoodItem[] = fooddata.filter((item) => item["구분"].replaceAll(' ',"") == gubun) //filter 거치면서 foodItem 배열이 뽑아내짐
      let chooseTag : ReactNode[] = choose.map(item =>  //만든 태그이므로 ReactNode 사용하기**
                                          <FoodCard key = {item["사업장명"]} 
                                                    item = {item}/> )                 
      setTag(chooseTag)
    }

  return (
     <div className="w-full max-w-7xl mx-auto flex flex-col justify-start items-center h-full p-4">
        <div className="w-full flex justify-center items-center flex-wrap gap-2 mb-8 p-3 rounded-lg bg-indigo-50">
            {
                group1.map(item => 
                    <TailButton key={item} caption={item} color="blue" onHandle={() => handleClick(item)} />)
            }
        </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {tag.length === 0 ? (
                    // 배열이 비어있으면 안내 메시지를 보여줍니다.
                    <div className="md:col-span-2 xl:col-span-3 text-center text-gray-500 mt-10">
                        <p className="text-xl">원하는 구분을 선택해주세요.</p>
                    </div>
                ) : (
                    // 배열에 내용이 있으면 tags를 렌더링합니다.
                    tag
                )}
            </div>
        </div>
  )
}
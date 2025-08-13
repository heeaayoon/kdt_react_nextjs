'use client'
import Image from "next/image"
import { useState } from "react"
import type { FoodItem } from "@/types/Food"

interface FoodCardProps{
    item:FoodItem //card 하나는 foodItem 하나임 -> Main에서 map을 돌려서 여러개 만듦
}

export default function FoodCard({item}:FoodCardProps) {

    const [flag, setFlag] = useState<boolean>(false); 
  
    const handleToggle = () =>{
        setFlag(!flag); //클릭시 플래그를 바꿈
    }

  return (
    <div className="w-full grid grid-cols-4 items-start
                    border-zinc-300 border-2 rounded-2xl p-2 gap-2">
        <div className="relative col-span-1 aspect-square">
            <Image src =  {  
                item['구분'] == "광역지원센터" ? '/img/busan.png'
                    : item['구분'] == "기초푸드뱅크" ? '/img/bank.png' : '/img/market.png'
            }   fill={true}  
                className="object-cover rounded-lg"
                alt={`${item['사업장명']} 로고 이미지`}
                priority/>
        </div>
        <div className="col-span-3 flex flex-col justify-between items-start h-full">
            <div className="w-full">
                <h1 className="font-bold text-lg md:text-xl w-full truncate">{item["사업장명"]}</h1>
                <h2 className="text-sm text-gray-700 w-full truncate">{item['운영주체명']}</h2>
                <p className="text-xs text-gray-500 mt-1 h-10 overflow-hidden">{item['사업장 소재지']}</p>
            </div>
            <div className="w-full pl-2 h-8 bg-indigo-800 text-amber-50 mt-4 rounded
                            flex items-center text-sm
                            hover:cursor-pointer hover:bg-indigo-700 transition-colors"
                    onClick={handleToggle} >
                {flag ? item['연락처(대표번호)'] : '연락처 보기 (클릭)'}
            </div>
        </div>
    </div>
    )
}
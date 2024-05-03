"use client"
import Image from "next/image"
import constantsValues from "../_utils/Constants"
import { useState } from "react"

const SideNav = () => {
    const [activeIndex,setactiveIndex] =useState(0)
    return (
        <div className=" shadow-sm boder-r h-full">
            <div className="p-5 border-b">
                <Image src="/logo.svg" width={150} height={100} />
            </div>

            <div className=" flex flex-col justify-center items-center">

                {
                 constantsValues.sidenavmenuList?.map((value, index) => {
                        return (
                            <a key={index} href={value.path} 
                            className= {`flex gap-2 p-4 px-6 hover:bg-primary hover:text-white w-full ${activeIndex==index? "text-white bg-primary":" text-gray-500"} `}
                            onClick={()=>setactiveIndex(index)}
                            >
                                {value.icon}
                                <h2>{value.name}</h2>

                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideNav
import { UserButton } from "@clerk/nextjs"
import { AlignJustify } from "lucide-react"
import Image from "next/image"

const TopHeader = ({setFn}) => {
  return (
    <div className=" flex p-5 boder-b items-center justify-between  md:justify-end">
     <AlignJustify onClick={()=>setFn((value)=>!value)} className=" md:hidden" />
     <Image className="md:hidden" src="/logo.svg" height={100} width={150} />
     <UserButton/>
    </div>
  )
}

export default TopHeader
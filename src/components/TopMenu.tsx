import Image from "next/image"
import TopMenuItem from "./TopMenuItem"

export default function TopMenu(){
  return (
    <div className="w-full h-full bg-blue-900 flex items-center justify-end  ">

      <div className="flex items-center gap-3 w-16 bg-white h-full justify-center">
        <Image
          src="/next.svg"
          alt="logo"
          width={50}
          height={50}
        />
      </div>

      <div className="flex gap-4 bg-black h-full items-center">
        <TopMenuItem title="Booking" pageRef="/booking" />
      </div>

    </div>
  )
}
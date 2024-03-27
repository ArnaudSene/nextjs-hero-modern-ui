import { loading } from "../assets"
import Image from 'next/image'

const Generating = ({className}: {className: string}) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 
        bg-n-8/80 rounded-[1.7rem] 
        ${className || ""}`}>

        <Image 
            src={loading}
            alt="loading" 
            className="w-5 h-5 mr-4"
        />
        AI is generating
    </div>
  )
}

export default Generating
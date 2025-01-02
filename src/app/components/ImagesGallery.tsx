"use client"

import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";
import Image from "next/image";

interface ImagesGallery {
    images: any;
}

const ImagesGallery = ({images}: ImagesGallery) => {
    const [bigImage, setBigImage] = useState(images[0])
    const handleSmallImageClick = (image: any)=>{
     setBigImage(image)
    }
  return (
    <div className="flex lg:ml-[100px] md:ml-14 gap-3 ">
    <div className="space-y-3">
    {images.map((image: any, idx : any)=> (
    <div key={idx} className="overflow-hidden rounded-lg bg-gray-100 hover:bg-red-600">
    <Image src={urlFor(image).url()} alt="Photo" height={200} width={200} className="cursor-pointer rounded-lg" onClick={()=> handleSmallImageClick(image)}/>
    </div>
    
    ))}
    </div>
    <div className="bg-gray-100 hover:bg-red-600">
     <Image src={urlFor(bigImage).url()} alt="Big Image" height={500} width={500} className="cursor-pointer rounded-lg relative"/>
     <span className="absolute top-[170px]  rounded-br-lg bg-red-500 text-white py-2 text-sm uppercase px-3">Sale</span>
     </div>
    </div>
  )
}

export default ImagesGallery
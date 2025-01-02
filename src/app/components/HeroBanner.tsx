import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface IHeroBanner{
  smallText: string;
  midText: string;
  largeText: string;
  buttonText: string;
  image: string;
}
async function getDta (){
  const query = `*[_type == "banner"][0]{
  smallText,
  midText,
  largeText,
  buttonText,
  image,
  }`
  const data = await client.fetch(query)
  return data
}

const HeroBanner = async () => {
  const data:IHeroBanner = await getDta()
  return (

    <div className="w-full md:w-[1250px] rounded-md md:mt-7 mx-auto bg-slate-200 flex flex-col md:flex-row justify-around gap-5 md:gap-10 pt-10 md:pt-10">
    <div className="px-5 md:px-0 text-center md:text-left">
    <p className="text-sm md:text-base">{data.smallText}</p>
      <p className="text-xl md:text-3xl font-bold tracking-tight">{data.midText}</p>
      <h1 className="text-2xl md:text-4xl lg:text-[90px] font-extrabold tracking-tight text-white mt-3 md:mt-5 mb-5 md:mb-12">
        {data.largeText}
      </h1>
      <Button variant="destructive" className="w-full md:w-auto">
        {data.buttonText}
      </Button>
    </div>
    <div className="flex justify-center md:justify-end">
      <Image
        src={urlFor(data.image).url()}
        alt="headphones"
        height={250}
        width={250}
        className="object-contain"
      />
    </div>
  </div>
  
  )
}

export default HeroBanner

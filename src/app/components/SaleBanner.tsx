import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface ISaleBanner {
  discount: string;
  saleTime: string;
  image: string;
  smallText: string;
  midText : string;
}

async function getDta (){
  const query = `*[_type == "banner"][0]{
  discount,
  saleTime,
  image,
  smallText,
  midText,
  }`
  const data = await client.fetch(query)
  return data
}
const SaleBanner = async () => {
  const data: ISaleBanner = await getDta()
  return (
  <div className="w-full md:w-[1250px] rounded-md md:mt-28 mt-16 mx-auto bg-red-600 text-white flex flex-col md:flex-row justify-center gap-8 md:gap-16 h-max md:h-[350px] p-5 md:p-0">
  <div className="space-y-3 text-center md:text-left pt-5 md:pt-14">
  <p>{data.discount}</p>
  <h1 className="text-3xl md:text-4xl lg:text-[90px] font-extrabold tracking-tight leading-tight md:leading-[90px]">
  FINE <br /> Smile
  </h1>
  <p className="text-base md:text-xl font-bold">{data.saleTime}</p>
  </div>
  <div className="flex justify-center">
  <Image
  src={urlFor(data.image).url()}
  alt="headphones"
  height={300}
  width={300}
  className="transition duration-500 transform hover:scale-110"
  />
  </div>
  <div className="space-y-3 text-center md:text-left pt-5 md:pt-24">
  <p>{data.smallText} Air</p>
  <p className="text-xl md:text-3xl font-bold tracking-tight">{data.midText}</p>
  <p>Best headphones on the market</p>
  <Button className="bg-white text-black w-full md:w-auto" variant="destructive">
  Shop Now
  </Button>
  </div>
  </div>
  
  )
}

export default SaleBanner
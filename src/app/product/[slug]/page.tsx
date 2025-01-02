
import CountBtn from "@/app/components/CountBtn";
import ImagesGallery from "@/app/components/ImagesGallery"
import { Button } from "@/components/ui/button"
import { client } from "@/sanity/lib/client"
import { ShoppingBag, Star, StarIcon, Truck } from "lucide-react"

interface productDetail {
  id: string;
  _id: string;
  name: string;
    images: any;
    slug: string;
    description: string;
    price: number;
}
async function getData(slug: string) {
const query = `*[_type == "product" && slug.current == "${slug}"][0]
{
  _id,
  name,
  images,
  "slug": slug.current,
  description,
   price
}`
const data = await client.fetch(query)
return data
}

export default async function ProductPage ({params} :{ params: {slug: string}}){
const data: productDetail = await getData(params.slug)
  return(
  <>
  <div className="mt-10 md:mt-20 lg:flex lg:mb-20 mb-10 ">
  {/* Image Gallery */}
  <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
  <ImagesGallery images={data.images}  />
  </div>

  {/* Product Details */}
  <div className="md:ml-10 ml-4 space-y-4 lg:w-1/2 mt-2">
  {/* Product Name */}
  <h2 className="font-bold text-gray-900 text-[20px] md:text-[25px] lg:text-[40px] leading-snug">
  {data.name}
  </h2>

      {/* Rating */}
    <div className="flex items-center gap-1 text-[#FFC633] text-[16px] md:text-[20px] lg:text-[24px]">
      <Star />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <span className="text-[#000000] text-[14px] md:text-[16px]">4.5/5</span>
      </div>

      {/* Pricing */}
      <div className="text-[20px] md:text-[28px] lg:text-[32px] font-bold flex items-center space-x-4">
      <span className="text-black">${data.price}</span>
      <span className="line-through text-[#0000004D]">${data.price + 30}</span>
      <span className="bg-[#FF33331A] text-[#FF3333] font-normal text-[12px] md:text-[14px] lg:text-[16px] rounded-full py-1 px-3">
        30%
      </span>
      </div>

      {/* Shipping Info */}
      <div className="flex items-center gap-2 text-gray-500 text-[12px] md:text-[14px] lg:text-[16px]">
      <Truck className="h-5 w-5 md:h-6 md:w-6" />
      <span>2-4 Day Shipping</span>
      </div>

       {/* Buttons */}
      <div className="flex gap-4 flex-wrap">
      <Button variant="default">Add to Bag</Button>
      <Button variant="secondary">Checkout Now</Button>
      </div>

      {/* Description */}
      <p className="text-[#00000099] font-normal text-[10px] md:text-[12px] lg:text-[15px] leading-[18px] md:leading-[22px] lg:leading-[24px] text-justify md:w-[450px] lg:w-[610px] pr-8 md:pr-0">
      {data.description}
      </p>
      <div className="font-bold flex gap-3">  <span>QTY:</span> <CountBtn/> </div>
      </div>
      </div>

 </>
)
}
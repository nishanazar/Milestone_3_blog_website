import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface IProduct {
  quantity: number;
  id: any;
  _id: string;
  price:number;
  name: string;
  slug: string;
  imageUrl: string
}

async function getData(){
  const query = `*[_type == "product"][0...8] {
  _id,
  price,
  name,
  "slug": slug.current,
  "imageUrl": images[0].asset->url
}
`
    const data = await client.fetch(query)
    return data
}

const Product = async () => {
  const data: IProduct[] = await getData()
  return (
    <div>
    
      <div className="text-center md:mt-28 mt-16">
       <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 mb-1">
       Best Seller Products
       </h1>
      <p>speaker There are many variations passages</p>
      </div>
      {/* products */}
      <div className="mt-8 grid grid-cols-1  gap-y-14 sm:grid-cols-2 lg:grid-cols-4 ml-12  ">
      {data.map((product) => (
      <div key={product._id} className="">
      <div className=" h-max w-max rounded-lg overflow-hidden bg-slate-200 transition duration-500 transform hover:scale-110">
      <Image src={product.imageUrl} alt="product item" height={270} width={270} />
      </div>
      <div>
      <h3 className="text-lg text-gray-800 mt-1">
      {product.name}
      </h3>
      <h5 className="text-md font-bold text-gray-900">${product.price}</h5>
      <Link href={`/product/${product.slug}`}><Button variant="default" className="mt-2">View Details</Button></Link>
      </div>
      </div>
        ))}
      </div>
    </div>
  );
}
export default Product


 
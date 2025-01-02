import Image from "next/image";
import { ArrowBigRight } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { client } from "@/sanity/lib/client";

interface IFooter {
  logo: string;
  subscribe: string;
  order: string;
  location: string;
  email: string;
  account1: string;
  account2: string;
  login: string;
  cart: string;
  shop: string;
  quicklink: string;
  policy: string;
  term: string;
  faq: string;
  contact: string;
  download: string;
  paragraph: string;
  number: string;
}


async function getDta (){
  const query = `*[_type == "footer"][0]{
   logo,
  subscribe,
  order,
  location,
  email,
  account1,
  account2,
  login,
  cart,
  shop,
  quicklink,
  policy,
  term,
  faq,
  contact,
  download,
  paragraph,
  number,
  }`
  const data = await client.fetch(query)
  return data
}

const Footer = async () => {
  const data:IFooter = await getDta()
  return (
    <div className="w-full bg-gray-800 text-gray-100 py-8">
      <div className="max-w-[1170px] mx-auto flex flex-wrap gap-8 px-4 md:px-8 lg:flex-nowrap ">
        {/* Exclusive Section */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-4">
          <h2 className="font-bold text-[24px] leading-[24px] tracking-[3%] text-red-700">{data.logo}</h2>
          <h3 className="font-medium text-[20px] leading-[28px] tracking-[3%]">{data.subscribe}</h3>
          <p className="font-normal text-[16px]">{data.order}</p>
          <div className="relative">
            <input
              className="w-full h-[48px] rounded px-3 text-[16px] border-[2px] border-[#FAFAFA] bg-transparent"
              type="text"
              placeholder="Enter your email"
            />
            <ArrowBigRight className="h-[24px] w-[24px] absolute top-1/2 transform -translate-y-1/2 right-3" />
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-medium text-[20px] leading-[28px] tracking-[3%] pb-2">{data.subscribe}</h3>
          <ul className="text-[16px] space-y-3">
            <li>{data.location}</li>
            <li>{data.email}</li>
            <li>{data.number}</li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="font-medium text-[20px] leading-[28px] tracking-[3%] pb-1">{data.account1}</h3>
          <ul className="space-y-3 text-[16px]">
            <li>{data.account2}</li>
            <li>{data.login}</li>
            <li>{data.cart}</li>
           
            <li>{data.shop}</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="font-medium text-[20px] leading-[28px] tracking-[3%] pb-2">{data.quicklink}</h3>
          <ul className="space-y-3 text-[16px]">
            <li>{data.policy}</li>
            <li>{data.term}</li>
            <li>{data.faq}</li>
            <li>{data.contact}</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-4">
          <h3 className="font-medium text-[20px] leading-[28px] tracking-[3%]">{data.download}</h3>
          <p className="font-normal text-[12px]">{data.paragraph}</p>
          <div className="flex gap-4">
            <Facebook className="w-[24px] h-[24px]" />
            <Twitter className="w-[24px] h-[24px]" />
            <Instagram className="w-[24px] h-[24px]" />
            <Linkedin className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
      <hr className="md:mt-14  md:mb-10 opacity-20 "  />
      <div className="text-[16px] text-center mt-4 opacity-50">&copy; Headphones Key - Find Your Perfect Sound</div>
    </div>
  );
};

export default Footer;




// import { Linkedin, Twitter } from "lucide-react"


// const Footer = () => {
//   return (
//     <div className="my-10 md:my-20 text-center space-y-3 md:space-y-1">
//     <p className="text-base md:text-lg">© 2024 Headphones Key - Find Your Perfect Sound</p>
//     <div className="flex gap-4 justify-center items-center">
//       <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
//       <Twitter className="w-6 h-6 md:w-8 md:h-8" />
//     </div>
//   </div>
  
//   )
// }

// export default Footer
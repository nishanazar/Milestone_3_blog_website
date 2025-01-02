import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
return (
  <>
  <div className="flex justify-between items-center px-8 md:mx-12 pt-6 pb-2">
  <Link href="/">
  <h2 className="text-base md:text-3xl tracking-[1px] md:tracking-[2px] font-bold">
  PHANOX
  </h2>
  </Link>
  <Link href="/cart">
  <Button variant="outline" className="p-2 md:p-3">
  <div className="relative inline-block">
  {/* Shopping Bag Icon */}
  <ShoppingBag className="text-black h-8 w-8 md:h-12 md:w-12 " />
  {/* Red Badge for Counter */}
  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs md:text-sm font-bold rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center transform translate-x-2 -translate-y-2">
   0
  </span>
  </div>
  </Button>
  </Link>
  </div>
    </>
  )
}

export default Navbar

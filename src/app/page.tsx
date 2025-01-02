
import Comments from "./components/Comments"
import HeroBanner from "./components/HeroBanner"
import Product from "./components/Product"
import SaleBanner from "./components/SaleBanner"



const Home = () => {
  return (
    <div>
     <HeroBanner/>
     <Product/>
     <SaleBanner/>
     <Comments/>
     
    </div>
  )
}

export default Home
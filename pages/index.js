import Header from '@/components/Header'
import Product from "@/models/Product";
import Link from 'next/link'
const mongoose = require('mongoose')

export default function Home({ product }) {
  return (
    <>
      <Header />
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-center text-gray-900">Our Top Picks</h1>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            {
              Object.keys(product).slice(0, 4).map((item) => {
                return <Link key={item} href={`/product/${product[item].slug}`} className="lg:w-1/5 md:w-1/2 p-4 m-2 w-full shadow-md cursor-pointer">
                  <div className="block rounded overflow-hidden">
                    <img alt="ecommerce" className="sm:h-[20vh] md:h-auto m-auto" src={product[item].img} />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product[item].tags}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{product[item].title}</h2>
                    <p className="mt-1">₹{product[item].price}</p>
                  </div>
                </Link>
              })
            }
          </div>
          <Link href={'/stickers'}>
            <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-lg">More...</button>
          </Link>
        </div>
      </div>
    </>
  )
}



export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find();
  return {
    props: { product: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  }
}

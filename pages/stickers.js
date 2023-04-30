import Link from 'next/link'
import React from 'react'
import Product from "@/models/Product";
const mongoose = require('mongoose')

const Stickers = ({ product }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center -m-4">
          {
            Object.keys(product).map((item) => {  return  <Link key={item} href={`/product/${product[item].slug}`} className="lg:w-1/5 md:w-1/2 p-4 m-2 w-full shadow-md cursor-pointer">
                <div className="block rounded overflow-hidden">
                  <img alt="ecommerce" className="sm:h-[20vh] md:h-auto m-auto" src={product[item].img}/>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product[item].tags}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product[item].title}</h2>
                  <p className="mt-1">₹{product[item].price}</p>
                  {/* <p className="mt-1">
                    {product[item].size.includes('S') && <span className='border border-gray-500 px-1 mx-1'>S</span>}
                    {product[item].size.includes('M') && <span className='border border-gray-500 px-1 mx-1'>M</span>}
                    {product[item].size.includes('L') && <span className='border border-gray-500 px-1 mx-1'>L</span>}
                    {product[item].size.includes('XL') && <span className='border border-gray-500 px-1 mx-1'>XL</span>}
                    {product[item].size.includes('XXL') && <span className='border border-gray-500 px-1 mx-1'>XXL</span>}
                    </p> */}
                </div>
              </Link>
            })
          }
        </div>
      </div>
    </section>
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

export default Stickers
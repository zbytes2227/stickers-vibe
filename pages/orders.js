import React, { useEffect } from 'react'
const mongoose = require('mongoose')
import Order from '@/models/Order'
import { useRouter } from 'next/router'

const Orders = () => {

    const router = useRouter()

    useEffect(() => {
    if(!localStorage.getItem('token')){
        router.push('/login')
    }
    }, [])

    return (
        <div>
            <div className='container p-2 m-auto'>
                <h1 className='text-bold  text-3xl p-6 text-center'>My Orders</h1>

            <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4">First</th>
              <th scope="col" className="px-6 py-4">Last</th>
              <th scope="col" className="px-6 py-4">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Stickers</td>
              <td className="whitespace-nowrap px-6 py-4">Stickers</td>
              <td className="whitespace-nowrap px-6 py-4">Stickers</td>
              <td className="whitespace-nowrap px-6 py-4">Stickers</td>
            </tr>
            <tr
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Stickers</td>
              <td className="whitespace-nowrap px-6 py-4">Stickers</td>
              <td className="whitespace-nowrap px-6 py-4">Stickers</td>
              <td className="whitespace-nowrap px-6 py-4">Stickers</td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
                  </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI)
    }
    let orders = await Order.find({ });
    // console.log(product);
  
    return {
      props: { product: JSON.parse(JSON.stringify(orders)) },
    }
  }
  
  



export default Orders
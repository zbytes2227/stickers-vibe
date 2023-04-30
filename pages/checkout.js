import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

const Checkout = ({ Cart, addToCart, clearCart, removeFromCart, subTotal }) => {
  return (
    <div>
      <Head>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
      </Head>
      <section className="body-font overflow-hidden">
        <div className="container px-2 py-12 mx-auto">
          <h4 className="my-4 text-center font-medium text-3xl md:text-4xl">
            Checkout
          </h4>
          <div className="lg:w-full mx-auto justify-center">

            <div className="leading-loose">
              <div className=" m-4 lg:p-10 bg-white rounded shadow-xl">
                <p className="text-gray-800 text-2xl font-medium my-3">Delivery information</p>
                <div className="">
                  <label className="my-1 text-sm text-gray-600" for="">Name</label>
                  <input className="w-full px-5 py-1 text-gray-700 bg-gray-50 rounded focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none leading-8 transition-colors duration-200 ease-in-out" id="Name" name="Name" type="text" required="" placeholder="Your Name" aria-label="Name" />
                </div>
                <div className="mt-2">
                  <label className="my-1 text-sm text-gray-600" for="Email">Email</label>
                  <input className="w-full px-5  py-1 text-gray-700 bg-gray-50 rounded focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none leading-8 transition-colors duration-200 ease-in-out" id="Email" name="Email" type="text" required="" placeholder="Your Email" aria-label="Email" />
                </div>
                <div className="mt-2">
                  <label className=" my- text-sm text-gray-600" for="Address">Address</label>
                  <textarea className="w-full px-2 py-2 text-gray-700 bg-gray-50 rounded focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none leading-8 transition-colors duration-200 ease-in-out" id="Address" name="Address" type="text" required="" placeholder="Address" aria-label="Address" />
                </div>

                <div className="block mt-2 -mx-1 pl-1 ">
                  <label className=" my- text-sm text-gray-600" for="Pin code">Pin code</label>
                  <input className="w-full px-2 py-2 text-gray-700 bg-gray-50 rounded focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none leading-8 transition-colors duration-200 ease-in-out" id="Pin code" name="Pin code" type="text" required="" placeholder="Pincode" aria-label="Pin code" />
                </div>

                <div className="block mt-2 -mx-1 pl-1 ">
                  <label className=" my- text-sm text-gray-600" for="State">State</label>
                  <input className="w-full px-2 py-2 text-gray-700 bg-gray-50 rounded focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none leading-8 transition-colors duration-200 ease-in-out" id="State" name="State" type="text" required="" placeholder="State" aria-label="State" />
                </div>

                <div className="block mt-2 -mx-1 pl-1 ">
                  <label className=" my- text-sm text-gray-600" for="City">City</label>
                  <input className="w-full px-2 py-2 text-gray-700 bg-gray-50 rounded focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none leading-8 transition-colors duration-200 ease-in-out" id="City" name="City" type="text" required="" placeholder="City" aria-label="City" />
                </div>


                <p className="text-gray-800 text-2xl font-medium my-3">Delivery information</p>

                <div className={`bg-green-50 rounded-lg p-4 border border-gray-300  `}
                >
                  {/* <h2 className="mb-3 text-center font-bold text-2xl">My Cart</h2> */}
                  {Object.keys(Cart).length == 0 && (
                    <h4 className="my-4 text-center font-medium text-xl">
                      Your Cart is Empty
                    </h4>
                  )}
                  <ul>
                    {Object.keys(Cart).map((i) => {
                      return (
                        <li className="my-3" key={i}>
                          <div className="flex justify-between">
                            <div className="w-3/5 flex justify-start items-center">
                              <img alt="ecommerce" className="sm:h-[10vh] md:h-[12vh]" src={Cart[i].img} />
                            </div>
                            <div className="w-3/5 flex justify-left text-left items-center">
                              {Cart[i].name}
                            </div>
                            <div className="w-2/5 flex justify-center items-center">
                              <div className="border">
                                <button className="px-2 bg-green-400 rounded-l-sm text-xl" onClick={() => { removeFromCart(i, 1, Cart[i].price, Cart[i].name, Cart[i].size, Cart[i].qty, Cart[i].variant) }}>
                                  -
                                </button>
                                <span className="px-2">{Cart[i].qty}</span>
                                <button className="px-2 bg-green-400 rounded-r-sm text-xl" onClick={() => { addToCart(i, 1, Cart[i].price, Cart[i].name, Cart[i].size, Cart[i].qty, Cart[i].variant) }}>
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <span className='font-bold'>Subtotal: ₹ {subTotal}</span>
                  <div className="mt-4 mb-6 ">
                    <Link href={'/order'} className="px-4 py-1 text-white font-light tracking-wider bg-green-700 rounded" type="submit">Pay ₹{subTotal}</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Checkout
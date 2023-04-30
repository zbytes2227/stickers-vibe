import React, { useReducer, useState } from "react";
import Product from "@/models/Product";
import { useRouter } from "next/router";
const mongoose = require('mongoose')
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";


const Slug = ({ buyNow, addToCart, product }) => {

  const router = useRouter();
  const { slug } = router.query;

  const [pin, setpin] = useState('')
  const [service, setService] = useState()
  const checkPin = async (e) => {
    e.preventDefault();
    const pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
    const pincodes = await pins.json();
    console.log(pincodes);
    if (pincodes.includes((pin))) {
      setService(true)
      toast.success('The product is Deliverable here !!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setService(false)
      toast.error('Sorry, we dont deliverable here !!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  function handlePinChange(e) {
    setpin(e.target.value)
  }
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <ToastContainer />
        <div class="container px-5 py-12 mx-auto">
          <div class="lg:w-full mx-auto flex flex-wrap justify-center">
            <img
              alt="ecommerce"
              class="h-[30vh] lg:h-[60vh] object-cover object-center rounded"
              src={product.img}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                Stickers Vibe
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">4 Reviews</span>
                </span>
              
              </div>
              <p class="leading-relaxed">
                {product.desc}
              </p>
              {/* <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex">
                  <span class="mr-3">Color</span>
                  <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div class="flex ml-6 items-center">
                  <span class="mr-3">Size</span>
                  <div class="">
                    <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div> */}
              <div class="flex mt-6">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ₹ {product.price}
                </span>
                <button onClick={() => { buyNow(product._id, 1, product.price, product.title, product.img) }} class="flex ml-4 md:ml-12 text-white bg-green-500 border-0 py-2 px-1.5 md:px-6 focus:outline-none hover:bg-green-600 rounded">
                  Buy now
                </button>
                <button onClick={() => { addToCart(product._id, 1, product.price, product.title, product.img) }} class="flex ml-4 text-white bg-green-500 border-0 py-2 px-1.5 md:px-6 focus:outline-none hover:bg-green-600 rounded">
                  Add to Cart
                </button>
                {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button> */}
              </div>
              <form onSubmit={checkPin}>
                <div class="flex flex- w-full md:justify-start items-center mt-8">
                  <div class="lg:w-full mr-3 xl:w-1/2 w-2/4">
                    {/* <label
                    for="hero-field"
                    class="leading-7 text-sm text-gray-600"
                    >
                    Placeholder
                  </label> */}
                    <input
                      type="number"
                      required={true}
                      id="hero-field"
                      placeholder="Enter Pincode"
                      name="hero-field"
                      value={pin}
                      onChange={(e) => handlePinChange(e)}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <button type="submit" class="inline-flex text-white bg-green-500 border-0 py-1.5 px-4 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Check
                  </button>
                </div>
              </form>
              {service == null ?
                <p className="my-1 font-medium text-gray-600">Enter your Pincode to Check Availability</p>
                :
                service === true ?
                  <p className="my-1 font-medium text-green-600">The product is Deliverable here !</p>
                  :
                  <p className="my-1 font-medium text-rose-600">Sorry we don&apos;t deliver here !</p>
              }


            </div>
          </div>
        </div>
      </section>
    </>
  );
};




export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let product = await Product.find({ slug: context.query.slug });
  // console.log(product);

  return {
    props: { product: JSON.parse(JSON.stringify(product[0])) },
  }
}




export default Slug;

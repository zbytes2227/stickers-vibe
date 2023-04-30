import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Navbar = ({ user,logout, Cart, addToCart, clearCart, removeFromCart, subTotal }) => {
  // console.log(Cart, addToCart, clearCart, removeFromCart, subTotal);
  const [dropDown, setdropDown] = useState(false);
  function show() {
    ref.current.classList.remove("translate-x-full");
    ref.current.classList.add("translate-x-0");
    ref.current.classList.add("right-5");
  }
  function hide() {
    ref.current.classList.remove("translate-x-0");
    ref.current.classList.add("translate-x-full");
    ref.current.classList.remove("right-5");
  }

  const toggleCart = (stat) => {
    //  console.log("STTS:" +(stat));
    if (stat === "on") {
      show();
    } else {
      if (ref.current.classList.contains("translate-x-full")) {
        show();
        console.log("wordked ");
      } else if (!ref.current.classList.contains("translate-x-full")) {
        hide();
      }
    }

  };

  const ref = useRef();

  useEffect(() => {
    function handleClickOutsideCart(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        hide();
      }
    }
    document.addEventListener('mousedown', handleClickOutsideCart);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideCart);
    };
  }, []);

  // useEffect(() => {
  //   if (subTotal != 0) {
  //     toggleCart("on");
  //   }
  // }, [subTotal]);

  return (
    <>
      <header className="text-gray-600 body-font sticky top-0 bg-white shadow-gray-300 shadow-md">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font mr-auto font-medium items-center text-gray-900 md:mb-0"
          >
            <img src={"/logo1.png"} className="px-2 h-[10vh]" alt="sgfh" />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center font-semibold md:text-lg text-base text-center justify-center mb-4 lg:mb-0">
            <Link
              href={"/stickers"}
              className="mx-3 md:mx-5 cursor-pointer hover:text-gray-900"
            >
              Stickers
            </Link>
            <Link
              href={"/orders"}
              className="mx-3 md:mx-5 cursor-pointer hover:text-gray-900"
            >
              Orders
            </Link>
            <Link
              href={"/about"}
              className="mx-3 md:mx-5 cursor-pointer hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className="mx-3 md:mx-5 cursor-pointer hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>
        </div>
        {/* <div className='sidebar bottom-0 right-0 h-[80vh] absolute bg-green-200 p-20'>
                    this is my cart
                </div> */}
      </header>

      <div
        ref={ref}
        className={`bg-green-50 fixed h-[100vh] w-[90vw] md:w-[60vw] lg:w-[25vw] bottom-0 right-0 p-4 border-gray-300  transform transition-transform translate-x-full z-20 overflow-x-scroll`}
      >
        <h2 className="mb-3 text-center font-bold text-3xl mt-14">My Cart</h2>
        {Object.keys(Cart).length == 0 && (
          <h4 className="my-4 text-center font-medium text-xl">
            Your Cart is Empty
          </h4>
        )}
        <ul>
          {Object.keys(Cart).map((i) => {
            return (
              <li className="my-3" key={i}>
                <div className="flex justify-between border">
                  <div className="w-3/5 flex justify-start items-center">
                    <img alt="ecommerce" className="sm:h-[10vh] md:h-[12vh]" src={Cart[i].img} />
                  </div>
                  <div className="w-3/5 flex justify-left text-left items-center">
                    {Cart[i].name}
                  </div>
                  <div className="w-2/5 flex justify-center items-center">
                    <div className="border">
                      <button
                        className="px-2 bg-green-400 rounded-l-sm text-xl"
                        onClick={() => {
                          removeFromCart(
                            i,
                            1,
                            Cart[i].price,
                            Cart[i].name,
                            Cart[i].img,
                          );
                        }}
                      >
                        -
                      </button>
                      <span className="px-2">{Cart[i].qty}</span>
                      <button
                        className="px-2 bg-green-400 rounded-r-sm text-xl"
                        onClick={() => {
                          addToCart(
                            i,
                            1,
                            Cart[i].price,
                            Cart[i].name,
                            Cart[i].img
                          );
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
          <div className="font-bold text-center">Subtotal: ₹ {subTotal}</div>
        </ul>
        <div className="flex justify-center mt-6">
          <Link onClick={hide}
            href={"/checkout"}
            className="flex mx-2 text-white bg-green-500 border-0 py-2 px-1.5 focus:outline-none hover:bg-green-600 rounded"
          >
            Checkout
          </Link>
          <button
            onClick={clearCart}
            className="flex mx-2 text-white bg-green-500 border-0 py-2 px-1.5 focus:outline-none hover:bg-green-600 rounded"
          >
            Clear Cart
          </button>
        </div>
        <button
          onClick={toggleCart}
          className="fixed bottom-4  right-4 p-4 rounded-full bg-green-500 text-white z-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height=""
            fill="currentColor"
            className="bi bi-x-lg  w-5 md:w-8"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
      </div>

      {/* CART */}
      <button
        onClick={toggleCart}
        className="fixed bottom-8  right-8 p-4 rounded-full bg-green-500 text-white z-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width=""
          height=""
          fill="currentColor"
          className="bi bi-cart-fill w-5 md:w-8"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </button>



      {
        !user.value && <Link
          href={"/login"}
          className="fixed top-6 right-3 px-3 py-1 rounded-lg bg-green-500 hover:bg-green-600 text-white z-2"
        >
          <button>
            Login
          </button>
        </Link>
      }




      <a onMouseLeave={() => setdropDown(false)} onMouseOver={() => setdropDown(true)}>

        {
          user.value && <div
            className="fixed top-5 lg:top-4 right-4 p-1 rounded-full bg-green-500 text-white z-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
        }
      <ToastContainer />

        {dropDown &&
          <div className="absolute top-10 right-5 w-36 bg-sla00">
            <div className=" mt-4 bg-white rounded-md shadow-lg border">
              <div className="py-1">
                <Link href="/myaccount" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                  <span className="flex flex-col">
                    My Account
                  </span>
                </Link>
                <Link href="/orders" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                  <span className="flex flex-col">
                    Orders
                  </span>
                </Link>
                <div onClick={logout} className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                  <span className="flex flex-col">
                    Log out
                  </span>
                </div>
              </div>
            </div>
          </div>
        }
      </a>


    </>
  );
};

export default Navbar;

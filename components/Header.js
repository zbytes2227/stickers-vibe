import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>

      <Image src='/header1.png' alt='sgfh' width={2500} height={1000} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Stick it, love it, share it - with Stickers Vibe</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">&quot;Shop now at Stickers Vibe and let your stickers do the talking - because sometimes words just aren&apos;t enough!&quot;

            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Premium stickers</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Waterproof and self-adhesive</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Unique and diverse designs.</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>



          </div>
          <Link href={'/stickers'}>
          <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Shop Stickers Now</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
  


export default Header
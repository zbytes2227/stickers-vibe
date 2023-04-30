import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';


const Forgot = () => {

    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])

    return (
        <section className=" ">
            <div className="flex flex-col items-center px-6 py-8 mx-auto mt-8 md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                    <img className="w-16 h-16 mr-2" src="/logo2.png" alt="logo" />
                    Stickers Vibe
                </a>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Forgot Password
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                            </div>

                            <button type="submit" className="w-full text-white bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Continue</button>
                            <p className="text-sm font-light text-gray-500 ">
                                Don’t have an account yet? <Link href="/signup" className="font-medium text-primary-600 hover:underline ">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Forgot
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    useEffect(() => {
        if(localStorage.getItem('token')){
            router.push('/')
        }
        }, [])

    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            name: name,
            email: email,
            password: password,
        };
        console.log(data);
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Success:", result);

        if (result.success) {
            toast.success(`${result.msg}`, {
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
            toast.error(`${result.msg}`, {
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

    return (
        <section className=" ">
            <ToastContainer />
            <div className="flex flex-col items-center px-6 py-8 mx-auto mt-8 md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                    <img className="w-16 h-16 mr-2" src="/logo2.png" alt="logo" />
                    Stickers Vibe
                </a>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Sign up to Stickers Vibe
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Name" required="" value={name} onChange={handleChange} />
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" value={email} onChange={handleChange} />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" value={password} onChange={handleChange} />
                            </div>
                            <button type="submit" className="w-full text-white bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                            <p className="text-sm font-light text-gray-500 ">
                                Already have an Account? <Link href="/login" className="font-medium text-primary-600 hover:underline ">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {
  const [Cart, setCart] = useState({})
  const [subTotal, setsubTotal] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setkey] = useState()
  const [progress, setProgress] = useState(0)

  const router = useRouter();

  useEffect(() => {
    try {
      if (localStorage.getItem("MY_CART")) {
        // console.log();
        setCart(JSON.parse(localStorage.getItem("MY_CART")));
        saveCart(JSON.parse(localStorage.getItem("MY_CART")));
        // saveCart(Cart)
      }
    } catch (error) {
      localStorage.clear();
      console.error(error);
    }
    let token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token })
      setkey(Math.random())
    }
  }, [])

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  }, [router.query])


  const saveCart = (myCart) => {
    localStorage.setItem("MY_CART", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setsubTotal(subt);
    // console.log(Cart);

  }

  const addToCart = (itemId, qty, price, name, img) => {
    let newCart = Cart;
    if (itemId in Cart) {
      newCart[itemId].qty = Cart[itemId].qty + qty;
    } else {
      newCart[itemId] = { itemId, qty: 1, price, name, img }
    }
    setCart(newCart);
    saveCart(newCart);
    toast.success(`Item added to cart`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // console.log('newCart');
    // console.log(Cart);
  }

  const clearCart = () => {
    setCart({});
    saveCart({});

    toast.error('Cart Cleared !', {
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


  const buyNow = (itemId, qty, price, name, img) => {
    setCart({});
    saveCart({});
    let newCart = {};
    newCart[itemId] = { itemId, qty: 1, price, name, img }
    setCart(newCart);
    saveCart(newCart);
    // console.log('newCart');
    // console.log(Cart);
    router.push('/checkout')
  }

  const logout = () => {
    localStorage.removeItem("token");
    setkey(Math.random())
    setUser({ value: null });
    router.push('/')
    toast.error('Log out Successful !', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const removeFromCart = (itemId, qty, price, name, img) => {
    let newCart = Cart;
    if (itemId in Cart) {
      newCart[itemId].qty = Cart[itemId].qty - qty;
    }
    if (newCart[itemId].qty <= 0) {
      delete newCart[itemId]
      toast.error('Item Removed from Cart !', {
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
    setCart(newCart);
    saveCart(newCart);
  }
  return <>

    <LoadingBar
      color='#22C55E'
      height={4}
      waitingTime={500}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />

    { <Navbar user={user} logout={logout} key={key} Cart={Cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} /> }
    <Component Cart={Cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} {...pageProps} buyNow={buyNow} />
    <Footer />
  </>

}

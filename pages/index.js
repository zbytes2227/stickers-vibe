import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Skickers Vibe | Stick it Love it Share it</title>
        <meta name="description" content="Stick it - love it - share it - Skickers Vibe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

    </>
  )
}

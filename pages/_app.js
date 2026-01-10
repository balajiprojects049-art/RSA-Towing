import { WhatsAppButton } from '../components/WhatsAppButton'
import '../styles/globals.css'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>24/7 Towing & Roadside Assistance</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#071022] dark:to-[#08121a] text-slate-900 dark:text-slate-100">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Component {...pageProps} />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

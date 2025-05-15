import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { listings } from '../constants'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Airbnb clone listing page" />
      </Head>

      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to ALX Listing App
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {listings.map((listing, index) => (
            <Card key={index} {...listing} />
          ))}
        </div>

        <div className="mt-6">
          <Button variant="primary" onClick={() => alert('Clicked!')}>
            Book Now
          </Button>
        </div>
      </main>
    </div>
  )
}

export default Home
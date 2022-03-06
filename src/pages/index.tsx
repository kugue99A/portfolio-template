import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Head from 'next/head'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Your Portfolio</title>
        <meta name="description" content="NUTMEG Member Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500;700&display=swap'
        />
      </Head>
      <h1>NUTMEG</h1>
    </>
  )
}

export default Home

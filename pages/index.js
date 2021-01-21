import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Timepaste</title>
      </Head>
      <div className="min-h-screen bg-red-100 text-red-800 font-bold flex items-center justify-center">
        <div>
          <h1 className="text-6xl">Timepaste</h1>
          <h2 className="text-2xl ml-2">Comming soon!</h2>
        </div>
      </div>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Simple Next.js demo! See <Link href="/cars">Cars</Link>
        </h1>
        </main>
    </div>
  )
}
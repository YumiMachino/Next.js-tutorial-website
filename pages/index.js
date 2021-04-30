import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
    </Head>
      <div className={styles.title}>
        <h1 className={styles.text}>Homepage</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum dapibus diam, quis rutrum leo malesuada sed. Praesent et tristique arcu. Nulla interdum purus nec mollis volutpat. Fusce quis ligula tellus. Ut pharetra nulla elit, quis cursus purus eleifend ac. Phasellus auctor lacus est, quis dictum nulla tempor vel. Maecenas efficitur id tortor lobortis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac laoreet tortor. Integer pulvinar interdum tellus, eu vulputate justo porttitor non. Ut dignissim magna non neque viverra iaculis.
        </p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum dapibus diam, quis rutrum leo malesuada sed. Praesent et tristique arcu. Nulla interdum purus nec mollis volutpat. Fusce quis ligula tellus. Ut pharetra nulla elit, quis cursus purus eleifend ac. Phasellus auctor lacus est, quis dictum nulla tempor vel. Maecenas efficitur id tortor lobortis pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac laoreet tortor. Integer pulvinar interdum tellus, eu vulputate justo porttitor non. Ut dignissim magna non neque viverra iaculis.
    </p>
    <Link href="ninja">
      <a className={styles.btn}>See Ninja Listing</a>
    </Link>
    </div>
  </>
  )
}

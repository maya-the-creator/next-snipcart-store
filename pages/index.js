import Head from 'next/head'

import products from '../products.json'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Sticker Store</h1>

        <p className={styles.description}>
          <a
            href="#"
            className="snipcart-checkout snipcart-summary"
            style={{ textDecoration: `none` }}
          >
            <strong>Cart:</strong>
            <span className="snipcart-total-price">$0.00</span>
          </a>
        </p>

        <div className={styles.grid}>
          {products.map(product => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={`Preview of ${product.title}`} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>
                <button
                  className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.title}
                  data-item-price={product.price}
                  data-item-url="/"
                >
                  Add to Cart
                </button>
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js"
      />
      <div
        id="snipcart"
        data-api-key="ZjllNTllZGUtMjA4YS00N2RkLWI1NDQtYzA0ZjMyNWJhNDEwNjM3MzI4MDA2OTAyMTk0NjY3"
        hidden
      />
    </div>
  )
}

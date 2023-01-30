import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Johannes Alexander Putra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://johanesalexanderputra.my.id">
            Johannes Alexander Putra!
          </a>
        </h1>

        <div className={styles.grid}>
          <a
            href="https://www.instagram.com/johannesap_/"
            className={styles.card}
          >
            <h3>Instagram &rarr;</h3>
            <p>Johannes's Instagram Page</p>
          </a>

          <a href="https://github.com/Itsjohanes" className={styles.card}>
            <h3>Github &rarr;</h3>
            <p>Johannes's Github Page</p>
          </a>

          <a href="http://www.jap.my.id/" className={styles.card}>
            <h3>Blogspot &rarr;</h3>
            <p>Johanes's Blogspot</p>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100073165925671"
            className={styles.card}
          >
            <h3>Facebook &rarr;</h3>
            <p>Johannes's Facebook profile</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [serialValue, setSerialValue] = useState("");
  const onClickHandler = () => {};
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">iPhone serial analyser</a>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <label htmlFor="serial-number">iPhone Serial:</label>
            <input
              type="text"
              id="serial-number"
              name="fav_language"
              value={serialValue}
              onChange={(e) => setSerialValue(e.target.value)}
            />
            <button onClick={onClickHandler}>Check</button>
          </div>
          <div className={styles.card}></div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

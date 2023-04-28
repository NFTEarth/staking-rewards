import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

const stakingContractAddress = "0xaA9D9a8f810463f24825c05f3075c1Fc6a430430";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to NFTE token staking rewards
        </h1>

        <p className={styles.description}>
          Get started by staking your $NFTE tokens, and watch your $ARB rewards grow
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>
          <a href="https://arbiscan.io/address/0xaa9d9a8f810463f24825c05f3075c1fc6a430430" className={styles.card}>
            <h2>Arbiscan &rarr;</h2>
            <p>
              View the token staking contract on the Arbitrum block explorer
            </p>
          </a>

         <a
            href="https://nftearth.exchange"
            className={styles.card}
          >
            <h2>Marketplace &rarr;</h2>
            <p>
              Trade NFTs on L2 at the NFTEarth marketplace
            </p>

          <a href="https://docs.nftearth.exchange" className={styles.card}>
            <h2>Docs &rarr;</h2>
            <p>
              NFTEarth docs
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}

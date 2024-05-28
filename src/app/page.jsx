import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.title}>
          {" "}
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          {" "}
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.items}>
        <Image src={Hero} alt="hero image" className={styles.image} />
      </div>
    </div>
  );
}

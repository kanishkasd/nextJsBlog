import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/id" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/12295008/pexels-photo-12295008.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={400}
            height={400}
            alt=""
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/id" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20508967/pexels-photo-20508967/free-photo-of-man-in-jacket-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={400}
            height={400}
            alt=""
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/id" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/25039343/pexels-photo-25039343/free-photo-of-a-painting-of-a-blue-sky-with-wHite-clouds.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={400}
            height={400}
            alt=""
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;

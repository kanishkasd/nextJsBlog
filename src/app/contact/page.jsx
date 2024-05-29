import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            alt=""
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" className={styles.input} placeholder="name" />
          <input type="text" className={styles.input} placeholder="email" />
          <textarea
            className={styles.textarea}
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

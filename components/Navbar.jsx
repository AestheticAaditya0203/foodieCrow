import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href={`/products/1`}>
              <a>Products</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </li>
          <Image
            src="/img/logo.png"
            alt=""
            width="60px"
            height="60px"
            style={{ borderRadius: "25%" }}
          />
          <li className={styles.listItem}>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

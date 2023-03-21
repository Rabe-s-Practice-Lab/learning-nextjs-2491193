import Link from "next/link";
import styles from "../styles/Home.module.css";

/* Menu Component here */

function Menu() {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        gap: "1em",
        fontSize: "1.5rem",
      }}
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/contacts"> Contacts</Link>
      </li>
    </ul>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Menu />
      {children}
    </div>
  );
}

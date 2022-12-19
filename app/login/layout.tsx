import styles from "./login.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className={styles.heading}>Login</h1>
      {children}
    </>
  );
}

import { Typography } from '@material-ui/core';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Typography variant="h1">Hola!!</Typography>
      </main>
    </div>
  );
}

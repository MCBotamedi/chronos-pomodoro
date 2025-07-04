import styles from './styles.module.css';

export function Footer() {
  return <footer className={styles.footer}>
    <a href=''>Entenda como Funciona a Técnica pomodoro</a>
    <a href=''>Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️</a>
  </footer>

}

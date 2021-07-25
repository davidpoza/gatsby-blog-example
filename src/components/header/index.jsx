import React from 'react';
import { Link } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import * as styles from './styles.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <div className={styles.title}>David Poza</div>
            <div className={styles.subtitle}>Creatividad digital. Mi blog personal</div>
          </div>
        </Link>
        <nav className={styles.menu}>
          <ul>
            <li><Link to="https://bookmarks.davidinformatico.com/">Mis enlaces</Link></li>
            <li><Link to="/contacta">Contacta</Link></li>
            <li><Link to="/sobre-mi">Sobre mí</Link></li>
            <li>
              <ThemeToggler>
                {
                  ({ theme, toggleTheme }) => (
                    <div>
                      <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun } onClick={() => {
                        theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')
                      }} />
                    </div>
                  )
                }
              </ThemeToggler>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
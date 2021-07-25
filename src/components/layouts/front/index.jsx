import React from 'react';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import HtmlHead from 'src/components/htmlHead';
import * as styles from './styles.module.scss';
import 'src/styles/index.scss';

export default function FrontLayout({ children, title }) {
  return (
    <div className={styles.container}>
      <HtmlHead title={title} />
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
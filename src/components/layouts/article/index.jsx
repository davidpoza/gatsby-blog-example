import React from 'react';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import HtmlHead from 'src/components/htmlHead';
import * as styles from './styles.module.scss';
import 'src/styles/index.scss';
import './blocks.scss';

export default function ArticleLayout({
  children,
  articleHeader,
  title,
  description,
  sideBar = [],
  image,
}) {
  return (
    <div className={styles.container}>
      <HtmlHead title={title} description={description} isArticle={true} image={image} />
      <Header />
      <div className={styles.wrapper}>
        { articleHeader }
        <div className={styles.cols}>
          <article>
            {children}
          </article>
          <aside>
            {
              sideBar.map(Widget => Widget)
            }
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import * as styles from './styles.module.scss';

export default function AboutMe() {
  return (
    <div className={styles.container} >
      <h3>David Poza Suárez</h3>
      <div className={styles.content} >
        <img width="125px" height="125px" src="/images/aboutMe.jpeg" />
        <p>Tengo 33 años, soy de Madrid y estudié administración de sistemas. Sin embargo mi pasión ha acabado siendo el desarrollo web, por lo que decidí centrarme en el ecosistema Javascript, en constante evolución.</p>
        <p>Casi todos los artículos de este blog van enfocados a aprender sobre programación o sistemas/apps, pero además compartiré también mis aficiones, casi siempre relacionadas con el mundo de la tecnología.</p>
      </div>
      <div className={styles.socialIcons}>
        <Link to="https://github.com/davidpoza"><FontAwesomeIcon height="1em" icon={faGithub} /></Link>
        <Link to="https://linkedin.com/in/david-poza-su%C3%A1rez-50671635"><FontAwesomeIcon height="1em" icon={faLinkedin} /></Link>
        <Link to="https://codepen.io/davidpoza/"><FontAwesomeIcon height="1em" icon={faCodepen} /></Link>
        <Link to="https://twitter.com/enformatico"><FontAwesomeIcon height="1em" icon={faTwitter} /></Link>
        <Link to="https://www.instagram.com/enformatico/"><FontAwesomeIcon height="1em" icon={faInstagram} /></Link>
      </div>
    </div>
  );
}
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as styles from './styles.module.scss';

export default function ContactForm() {
  return (
    <div className={styles.container} >
      <h3>Contacta conmigo</h3>
      <div className={styles.content} >
        <form
          accept-charset="UTF-8"
          action="https://getform.io/f/d13a5f31-6ef9-4a4b-84db-574d26a7eb65"
          method="POST"
          enctype="multipart/form-data"
          target="_blank"
        >
          <div className={styles.inputContainer}>
            <FontAwesomeIcon height="1em" style={{ paddingLeft: '0.5em' }} icon={faUser} />
            <input
              type="text"
              name="name"
              className={styles.formControl}
              id="name"
              placeholder="Introduce tu nombre"
            />
          </div>
          <div className={styles.inputContainer}>
            <FontAwesomeIcon height="1em" style={{ paddingLeft: '0.5em' }} icon={faEnvelope} />
            <input
              type="email"
              name="email"
              className={styles.formControl}
              id="email"
              placeholder="Introduce tu email"
              required="required"
            />
          </div>
          <div className={styles.inputContainer}>
            <textarea
              name="message"
              id="message"
              className={styles.formControl}
              placeholder="Deja tu mensaje aquí"
              rows="6"
            />
          </div>
          <hr />
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
}

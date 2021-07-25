import React, { useCallback, useEffect, useState } from 'react';
import useDeviceDetect from 'src/shared/hooks/useDeviceDetect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import * as styles from './styles.module.scss';

export default function Toc({ html }) {
  const { isMobile } = useDeviceDetect();
  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => {
    if (isMobile) setOpen(!open);
  });
  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  if (!html) return null;

  return (
    <div className={styles.container} >
      <h3 onClick={handleClick}>
        {
          isMobile &&
          <FontAwesomeIcon height="1em" icon={open? faTimes: faBars} />
        }
        Tabla de contenidos
      </h3>
      {
        open &&
        <div className={styles.content} onClick={handleClick} dangerouslySetInnerHTML={{ __html: html }} />
      }
    </div>
  );
}
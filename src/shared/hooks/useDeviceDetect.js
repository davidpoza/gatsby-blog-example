import { useEffect, useState } from 'react';

export default function useDeviceDetect() {
  const [isMobile, setMobile] = useState(true);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === undefined ? '' : navigator.userAgent;

    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setTimeout(() => {
      setMobile(mobile);
    }, 1000)
  }, []);

  return { isMobile };
}

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";


function AnimateButton() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['red', 'blue', 'green'];
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const buttonColorClass = `button-color-${currentColorIndex}`;

  return (
    <Link href={'/'} className={`c-button ${buttonColorClass}`}> {t("Why Choose Us")}</Link>
  )
}

export default AnimateButton
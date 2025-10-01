import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { USAFlag, ColombiaFlag } from './icons/ThemeIcons';
import styles from './LanguageSelector.module.scss';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button 
      className={styles.languageToggle}
      onClick={toggleLanguage}
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'}
      title={language === 'es' ? 'Switch to English' : 'Cambiar a español'}
    >
      {language === 'es' ? <USAFlag /> : <ColombiaFlag />}
    </button>
  );
};
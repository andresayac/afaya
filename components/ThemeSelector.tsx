import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { MoonIcon, SunIcon } from './icons/ThemeIcons';
import styles from './ThemeSelector.module.scss';

export const ThemeSelector: React.FC = () => {
  const { actualTheme, setTheme } = useTheme();
  const { t } = useLanguage();

  const toggleTheme = () => {
    setTheme(actualTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={t('theme.toggleTheme')}
      title={actualTheme === 'light' ? t('theme.switchToDark') : t('theme.switchToLight')}
    >
      {actualTheme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
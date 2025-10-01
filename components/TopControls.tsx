import React from 'react';
import { LanguageSelector } from './LanguageSelector';
import { ThemeSelector } from './ThemeSelector';
import styles from './TopControls.module.scss';

export const TopControls: React.FC = () => {
  return (
    <div className={styles.topControls}>
      <ThemeSelector />
      <LanguageSelector />
    </div>
  );
};
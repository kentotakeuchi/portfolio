import { useState } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState('en');

  const changeLanguageHandler = (clickedLng) => {
    setLanguage(clickedLng);
  };

  return { language, changeLanguageHandler };
};

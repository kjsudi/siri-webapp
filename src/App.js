import React, { useState } from "react";
import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";
import styles from "App.module.css";
import { getLanguageObject, langLocalStorageKey } from "components/Language";
import Box from "components/generic/Box";
import i18next from "i18next";
import usePersistence from "hooks/usePersistence";
import BackToTop from "react-back-to-top-button";
import { ReactComponent as BackToTopIcon } from "assets/top.svg";
import Card from "components/Card";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = usePersistence(
    langLocalStorageKey,
    i18next.language
  );

  const onToggleLanguage = () => {
    let toggledLanguage = getLanguageObject(language, true).value;
    i18next.changeLanguage(toggledLanguage);
    setLanguage(toggledLanguage); // This ensures re-render
  };

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div className={styles.wrapper}>
      <Header selectedLanguage={language} onToggleLanguage={onToggleLanguage} />
      <Card size="max" />
      <Main />
      <Footer />
      <BackToTop showAt={200} speed={1000} style={{ marginRight: "1%" }}>
        <Box round radius="35px" bgColor="#C8C8C8">
          <BackToTopIcon className={styles.backToTopIcon} />
        </Box>
      </BackToTop>
    </div>
  );
};

export default App;

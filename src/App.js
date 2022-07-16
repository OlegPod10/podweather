import Container from "./containers/Container/Container";
import Header from "./components/Header/Header";
import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  const [theme, setTheme] = useLocalStorage("light");

  const switchTheme = (e) => {
    if (e.target.checked === false) {
      return setTheme("light");
    } else setTheme("dark");
  };

  const [city, setCIty] = useLocalStorage("");

  const searchCity = (e) => {
    setCIty(e.target.value);
  };

  const [displayErorr, setDisplayErorr] = useState("");

  const erorrDisabler = () => {
    setDisplayErorr("");
  };

  const switchErorr = () => {
    setDisplayErorr(`${t("Сity doesn't exist")}`);
  };

  return (
    <div className="App" data-theme={theme}>
      <Header
        switchTheme={switchTheme}
        cityName={searchCity}
        erorrDisplay={displayErorr}
      />
      <Container
        cityName={city}
        erorr={switchErorr}
        erorrDisabler={erorrDisabler}
      />
    </div>
  );
}

export default App;

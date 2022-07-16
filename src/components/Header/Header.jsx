import React, { useState } from "react";
import Clock from "../Clock/Clock";
import Switch from "@mui/material/Switch";
import useLocalStorage from "use-local-storage";
import SearchBar from "../SearchBar/SearchBar";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import './Header.css'

export default function Header({ switchTheme, cityName, erorrDisplay }) {
  const [checked, setChecked] = useLocalStorage(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const { t } = useTranslation();

  return (
    <header>
      <Clock />
      <div className="theme-toggle">
        <h2>{t("dark_theme")}</h2>
        <Switch
          onClick={switchTheme}
          color="default"
          checked={checked}
          onChange={handleChange}
        />
      </div>

      <SearchBar
        getName={cityName}
        erorrDisplay={erorrDisplay}
        cityName={cityName}
      />
      <LanguageSwitch className="lng" />

  
    </header>
  );
}

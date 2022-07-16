import React from "react";
import { useTranslation } from "react-i18next";
import './SearchBar.css'

export default function SearchBar({ cityName, erorrDisplay }) {
  const { t } = useTranslation();
  return (
    <div className="SearchBlock">
      <input
        onChange={cityName}
        placeholder={t("Enter city name...")}
        type="text"
        className="search"
        id="city"
      />
      <p>{erorrDisplay}</p>
    </div>
  );
}

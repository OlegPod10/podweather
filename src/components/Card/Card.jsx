import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import './Card.css'

export default function Card(props) {
  const { t } = useTranslation();
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-header_city">{props.date}</span>
      </div>
      <div className="card-img">
        <img src={props.imgUrl} alt="" />
      </div>
      <p className="white-text">{props.sky}</p>
      <div className="card-foter">
        <ul className="footer-list">
          <li>
            <img src="./img/icons8-wind-96.png" alt="WindSpeed" />
            <span className="list-km">
              {props.windSpeed} {t("km/h")}
            </span>
          </li>
          <li>
            <img src="./img/icons8-water-50.png" alt="WaterProcent" />
            <span className="list-procent"> {props.procent} %</span>
          </li>
        </ul>
        <div className="footer-temp">{props.temp}°</div>
      </div>
      <div>
        <Accordion
          sx={{
            backgroundColor: `var(--back-card)`,
            color: `var(--text-primary)`,
            boxShadow: `none`,
          }}
          className="test"
          aria-controls={props.id}
          id={props.id}
        >
          <AccordionSummary
            className="accardeon"
            expandIcon={<ExpandMoreIcon    sx={{
              color: `var(--text-primary)`
            }} />}
            aria-controls={props.id}
            id={props.id}
          >
            <Typography>{t("Details")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                {t("Feels like")}: {props.feels}°
              </p>
              <p>
                {t("Gust")}: {props.gust} {t("km/h")}
              </p>
              <p>
                {t("Deg")}: {props.deg}
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

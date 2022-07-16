import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LanguageIcon from "@mui/icons-material/Language";

export default function LanguageSwitch() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: "white",
        contrastText: "black",
      },
    },
  });

  const languages = [
    {
      code: "en",
      country_code: "en",
      name: "English",
    },
    {
      code: "ru",
      country_code: "ru",
      name: "Русский",
    },
  ];

  const { t } = useTranslation();

  const currentLanguage = cookies.get("i18next") || "en";

  return (
    <div className="lng">
      <ThemeProvider theme={theme} disableScrollLock={true}>
        <Button
          sx={{
            boxShadow: "none",
          }}
          size="small"
          color="neutral"
          variant="contained"
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <LanguageIcon
            className="iconLng"
            sx={{ color: "black" }}
            fontSize="medium"
          />
        </Button>
        <Menu
          className="menuItem"
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          disableScrollLock={true}
        >
          {languages.map(({ code, name }) => {
            return (
              <MenuItem
                key={code}
                onClick={() => {
                  i18next.changeLanguage(code);
                  handleClose();
                }}
              >
                {name}
              </MenuItem>
            );
          })}
        </Menu>
      </ThemeProvider>
    </div>
  );
}

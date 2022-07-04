import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

// local imports
import DateTimePickerComponent from "../components/DateTimePickerComponent";
import ThemeToggle from "../components/ThemeToggle";

// css
import styles from "../styles/Mui.module.scss";

const MUI = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
        },
      }),
    [isDarkMode]
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setIsDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className={styles.container}>
          <Head>
            <title>Next JS Testing</title>
            <meta name="description" content="Next JS Sandbox" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Box sx={{ bgcolor: "background.default" }}>
            <main className={styles.main}>
              <ThemeToggle toggleTheme={toggleTheme} />
              <DateTimePickerComponent />
            </main>
          </Box>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default MUI;

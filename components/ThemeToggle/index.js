import { Box, Button } from "@mui/material";

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
        p: 3,
      }}
    >
      <Button variant="outlined" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </Box>
  );
};

export default ThemeToggle;

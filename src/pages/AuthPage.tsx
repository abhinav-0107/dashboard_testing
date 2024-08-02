import { Grid, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthPageBg from "../assets/Images/AuthPage-bg-Image.png";
import LogInForm from "../components/LogInForm";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

const defaultTheme = createTheme();

export default function AuthPage() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${AuthPageBg})`,
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {showSignUpForm ? (
          <SignUpForm />
        ) : (
          <LogInForm setShowSignUpForm={setShowSignUpForm} />
        )}
      </Grid>
    </ThemeProvider>
  );
}

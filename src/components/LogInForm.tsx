import { useState } from "react";
import {
  Button,
  Avatar,
  Divider,
  Typography,
  Grid,
  Box,
  Paper,
  Link,
  // Checkbox,
  // FormControlLabel,
  TextField,
} from "@mui/material";
import GoogleButton from "react-google-button";
import AuthPageWenergieAvatar from "../assets/Images/wenergie-logo.png";
import { auth, googleProvider } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

const LogInForm = (props: any) => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmail = async (event: any) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Handle successful login
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  const signInWithGoogle = async () => {
    try {
      const response : any = await auth.signInWithPopup(googleProvider);
      navigate("/Home")
      console.log(response.user.email);

    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: 1, width: 100, height: 100 }}
          src={AuthPageWenergieAvatar}
          alt="W"
        />

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={signInWithEmail}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Grid container alignItems="center" sx={{ mt: 2, mb: 3 }}>
            <Grid item xs>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" sx={{ width: "130px" }}>
                Sign In
              </Button>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {"Don't have an account? "}
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => {
                    props.setShowSignUpForm(true);
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", alignItems: "center", my: 5 }}>
            <Divider sx={{ flexGrow: 1 }} />
            <Typography variant="body2" sx={{ mx: 2 }}>
              Or log in with
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <GoogleButton label="Continue with Google" onClick={signInWithGoogle} />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default LogInForm;

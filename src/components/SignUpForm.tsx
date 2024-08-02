import { useState } from "react";
import {
  Button,
  Avatar,
  Typography,
  Grid,
  Paper,
  Box,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import AuthPageWenergieAvatar from "../assets/Images/wenergie-logo.png";
import ReactCountryFlag from "react-country-flag";
import countryCodes from "../assets/Data/CountryCodes.json";
import { auth } from "../config/firebaseConfig";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [countryDialCode, setCountryDialCode] = useState<string>("");

  const handleCountryDialCodeChange = (event: SelectChangeEvent<string>) => {
    setCountryDialCode(event.target.value);
  };

  const handleEmailSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // Handle successful signup
    } catch (error) {
      console.error(error);
      // Handle signup error
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
          Sign Up
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleEmailSignUp}
          sx={{ mt: 1 }}
        >
          <Box display="flex" justifyContent="space-between" marginTop={2}>
            <TextField
              required
              id="first-name"
              label="First Name"
              variant="outlined"
              sx={{ width: "48%" }} // Adjust width as needed
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              required
              id="last-name"
              label="Last Name"
              variant="outlined"
              sx={{ width: "48%" }} // Adjust width as needed
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
          {/* Email Text Box */}
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
          {/* Company Text Box */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="Company"
            label="Company"
            name="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <Box display="flex" alignItems="center">
            <FormControl
              variant="outlined"
              sx={{ minWidth: 80, marginRight: 2 }} // Adjust width as needed
            >
              <InputLabel id="country-code-label">Code</InputLabel>
              <Select
                labelId="country-code-label"
                id="country-code"
                value={countryDialCode}
                onChange={handleCountryDialCodeChange}
                label="Code"
                required
                renderValue={(selected) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {
                      countryCodes.find(
                        (country) => country.dialCode === selected
                      )?.dialCode
                    }
                  </div>
                )}
              >
                {countryCodes.map((country) => (
                  <MenuItem key={country.countryCode} value={country.dialCode}>
                    <ReactCountryFlag
                      countryCode={country.countryCode}
                      style={{ marginRight: "8px" }}
                    />
                    {`${country.country} (${country.dialCode})`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="tel"
              autoFocus
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>

          {/* Password Text Box */}
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
            <Grid item>
              <Button type="submit" variant="contained" sx={{ width: "130px" }}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignUpForm;

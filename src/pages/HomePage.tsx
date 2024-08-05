import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Box,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", generation: 4000, consumption: 2400 },
  { name: "Feb", generation: 3000, consumption: 1398 },
  { name: "Mar", generation: 2000, consumption: 9800 },
  { name: "Apr", generation: 2780, consumption: 3908 },
  { name: "May", generation: 1890, consumption: 4800 },
  { name: "Jun", generation: 2390, consumption: 3800 },
  { name: "Jul", generation: 3490, consumption: 4300 },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This navigates back to the previous page
  };

  return (
    <Box sx={{ minHeight: "100vh", p: 0 }}>
      {/* Navigation Bar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#1976d2", top: 0, left: 0, right: 0 }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={handleBackClick}
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => navigate("/contact")}>
            Contact
          </Button>
          <Avatar
            alt="User Name"
            src="/path/to/dummy-image.jpg" // Replace with your image path or URL
            sx={{ ml: 2 }}
          />
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          minHeight: "100vh",
          p: 3,
          mt: 0, // Remove space between AppBar and content
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Site Details</Typography>
                <Divider style={{ margin: "16px 0" }} />
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="bold">
                      SiteName
                    </Typography>
                    <Typography variant="body2">
                      6- Adithya - RMV 2nd Stage
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="bold">
                      Integrator Id
                    </Typography>
                    <Typography variant="body2">WENERGIE</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="bold">
                      SiteLocation
                    </Typography>
                    <Typography variant="body2">
                      [13.040866, 77.57021]
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="bold">
                      Login
                    </Typography>
                    <Typography variant="body2">aksh_hari@yahoo.com</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Generation</Typography>
                <Divider style={{ margin: "16px 0" }} />
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="bold">
                      Asset ID
                    </Typography>
                    <Typography variant="body2">0x00000008Gn01</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="bold">
                      Day Energy
                    </Typography>
                    <Typography variant="body2">0.5</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="bold">
                      Power
                    </Typography>
                    <Typography variant="body2">0.6513</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="bold">
                      Status
                    </Typography>
                    <Typography variant="body2">Online</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Consumption</Typography>
                <Divider style={{ margin: "16px 0" }} />
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="bold">
                      Asset ID
                    </Typography>
                    <Typography variant="body2">0x00000008Ct01</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="bold">
                      Day Energy
                    </Typography>
                    <Typography variant="body2">2.494</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="bold">
                      Power
                    </Typography>
                    <Typography variant="body2">0.0</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="bold">
                      Status
                    </Typography>
                    <Typography variant="body2">Offline</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Energy Data</Typography>
                <Divider style={{ margin: "16px 0" }} />
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="generation"
                      stroke="#8884d8"
                    />
                    <Line
                      type="monotone"
                      dataKey="consumption"
                      stroke="#82ca9d"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;

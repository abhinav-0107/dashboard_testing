// src/components/HomeMaster.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  AppBar,
  Toolbar,
  Avatar
} from "@mui/material";

const HomeMaster = () => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate("/home");
  };

  // const handleNavClick = (path : any) => {
  //   navigate(path);
  // };

  return (
    <Box sx={{ bgcolor: "grey.200", minHeight: "100vh", margin: 0, padding: 0 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1976d2", margin: 0, padding: 0 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Network Dashboard
          </Typography>
          {/* <Button color="inherit" onClick={() => handleNavClick("/")}>Home</Button>
          <Button color="inherit" onClick={() => handleNavClick("/about")}>About</Button>
          <Button color="inherit" onClick={() => handleNavClick("/contact")}>Contact</Button> */}
          <Avatar 
            alt="User Name" 
            src="/path/to/dummy-image.jpg" // Replace with your image path or URL
            sx={{ ml: 2 }}
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          NetworkView
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%", boxShadow: 6 }}>
              <CardContent>
                <Typography variant="h3" color="success.main">
                  50
                </Typography>
                <Typography variant="body1">Micro Grids</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%", boxShadow: 6 }}>
              <CardContent>
                <Typography variant="h3" color="success.main">
                  66/108
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Typography variant="body2">24 Consumption</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body2">25 Generation</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body2">17 Storage</Typography>
                  </Grid>
                </Grid>
                <Typography variant="body1" color="success.main" sx={{ mt: 1 }}>
                  DERs available for Dispatch
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%", boxShadow: 6 }}>
              <CardContent>
                <Typography variant="body1">Live Generation</Typography>
                <Typography variant="h4" color="success.main">
                  1.0692 kW
                </Typography>
                <Typography variant="body1">Live Consumption</Typography>
                <Typography variant="h4" color="warning.main">
                  302.2519 kW
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%", boxShadow: 6 }}>
              <CardContent>
                <Typography variant="body1">Total Generation</Typography>
                <Typography variant="h4" color="success.main">
                  2141.18 kWh
                </Typography>
                <Typography variant="body1">Total Consumption</Typography>
                <Typography variant="h4" color="warning.main">
                  1728.808 kWh
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Table */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            MicroGrids
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: 6 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Site ID</TableCell>
                  <TableCell>Integration ID (uniqueValues)</TableCell>
                  <TableCell>Consumption Power (max)</TableCell>
                  <TableCell>Generation Power (max)</TableCell>
                  <TableCell>Available Storage (max)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  {
                    id: "0x0000014",
                    integrationId: "WENERGIE",
                    consumption: 0,
                    generation: 0,
                    storage: 0,
                  },
                  {
                    id: "0x0000010",
                    integrationId: "SolarEra",
                    consumption: 1.58,
                    generation: 0,
                    storage: 0,
                  },
                  {
                    id: "0x000000c",
                    integrationId: "UniqSolar",
                    consumption: 0.38,
                    generation: 0,
                    storage: 0,
                  },
                  {
                    id: "0x0000001",
                    integrationId: "WENERGIE",
                    consumption: 0.3,
                    generation: 0,
                    storage: 0,
                  },
                  {
                    id: "0x0000011",
                    integrationId: "SolarEra",
                    consumption: 0.47,
                    generation: 0,
                    storage: 0,
                  },
                ].map((row, index) => (
                  <TableRow
                    key={index}
                    onClick={handleRowClick}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "grey.300",
                      },
                    }}
                  >
                    <TableCell>
                      <Typography color="success.main">{row.id}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="success.main">
                        {row.integrationId}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="success.main">
                        {row.consumption}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="success.main">
                        {row.generation}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="success.main">
                        {row.storage}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography>Total</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="success.main">10.5</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="success.main">0.533</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="success.main">199</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeMaster;

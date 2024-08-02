import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Box,
} from "@mui/material";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Box sx={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
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
                  <Typography variant="body2">[13.040866, 77.57021]</Typography>
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
          <Card>
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
          <Card>
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
      </Grid>
    </Box>
  );
};

export default HomePage;

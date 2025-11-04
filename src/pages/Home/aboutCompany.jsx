import React from "react";
import { Box, Typography, Container } from "@mui/material";

const AboutCompany = () => (
  <Box
    sx={{
      backgroundColor: "#f1f8e9",
      py: { xs: 8, md: 12 },
      px: { xs: 2, md: 0 },
      fontFamily: "Inter, sans-serif",
      position: "relative",
      overflow: "hidden",
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        backgroundColor: "#8bc34a",
      },
    }}
  >
    <div
      style={{
        maxWidth: "full",
        margin: "0 auto",
        paddingLeft: "30px",
        paddingRight: "30px",
        textAlign: "center",
      }}
    >

      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 800,
          mb: { xs: 2, md: 3 },
          fontSize: { xs: "1.7rem", sm: "2rem", md: "2.2rem" },
          lineHeight: 1.2,
          "& span": {
            color: "#8bc34a",
          },
        }}
      >
        Welcome to <span>Juggernaut </span>Equipment Private Limited
      </Typography>
      <Typography variant="body1" paragraph>
        JEPL is a PAN India Sales, Spares & Service provider of Heavy Construction and 
        Materials Handling Equipment’s partnering with global giants to
        supply & revolutionize India’s Construction equipment by offering an unmatched 
        range of Electric Equipments in India like Excavators, Wheel
        Loaders, Forklifts, Reach Stacker, Skid Steel Loaders, Off Highway Tipper.
      </Typography>
      <Typography variant="body1" paragraph>
        India produces more than 50 Lacks Tons of Carbon from Diesel burnt by
        the consortium of construction equipment. With use of Lithium
        Iron Phosphate Battery operated equipment’s we are working for a cleaner &
        greener future with huge upside potential for
        Return on investment for our customer.
      </Typography>
      <Typography variant="body1" paragraph>
        We are set out to be the first INDIAN company to sell fully electrify
        their heavy equipment range.
      </Typography>
      <Typography variant="body1" paragraph>
        Though electrification is slowly gaining support globally through the
        sales of EVs, we’ve noticed that industries like Construction, Mining, Metal Industry, Manufacturing, and Agriculture are lacking in sustainable, emissions-free
        equipment options. That’s why we’re taking pioneering steps
        towards complete industrial electrification. We are the first INDIAN company to have leveraged our manufacturing tie-ups to produce the largest range of commercially-available heavy electric equipment in India.
      </Typography>
      <Typography variant="body1" paragraph>
        Our innovative technical offering and expertise make
        JEPL the dependable choice, delivering precision and power at scale. Not
        only do JEPL machines have the power, functionality, and reliability
        required by heavy industrial work, they’re all-electric.
      </Typography>
    </div>
  </Box>
);

export default AboutCompany;

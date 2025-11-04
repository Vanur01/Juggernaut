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
        // backgroundColor: "#8bc34a",
      },
    }}
  >
    <div
      style={{
        maxWidth: "full",
        margin: "0 auto",
        // paddingLeft: "100px",
        // paddingRight: "100px",
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
        About <span>Juggernaut </span>
      </Typography>
      <Typography variant="body1" paragraph>
        JEPL is dedicated in the research and development of Electric Material
        Handling Equipment and Construction Machinery. The current products
        ranges cover:
      </Typography>
      <Typography variant="body1" paragraph>
        Lithium battery
        Crawler Excavator, Wheel Loader,Heavy-duty Forklift, Reach Stacker,
        Skid Steel Loader etc.
      </Typography>
      <Typography variant="body1" paragraph>
        Other equipments include  Rough Terrain Forklift, Telescopic Forklift, Furnace-Charging Vehicle etc.
      </Typography>
    </div>
  </Box>
);

export default AboutCompany;

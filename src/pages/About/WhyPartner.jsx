import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  useTheme,
} from "@mui/material";
import LightbulbOutlineIcon from "@mui/icons-material/LightbulbOutline";
import BuildIcon from "@mui/icons-material/Build";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Link } from 'react-router-dom'



const WhyPartner = () => {
  const theme = useTheme();

  const reasons = [
    {
      icon: (
        <LightbulbOutlineIcon sx={{ fontSize: { xs: 30, sm: 40 }, mb: 1 }} />
      ),
      text: "Proven R&D & patents → faster innovation",
    },
    {
      icon: <BuildIcon sx={{ fontSize: { xs: 30, sm: 40 }, mb: 1 }} />,
      text: "PAN-India service & genuine parts",
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: { xs: 30, sm: 40 }, mb: 1 }} />,
      text: "Lower TCO & zero emissions",
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: { xs: 30, sm: 40 }, mb: 1 }} />,
      text: "Strong quality & safety certifications",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#1a365d",
        color: "white",
        textAlign: "center",
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        px: { xs: 2, sm: 3, md: 4 },
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          sx={{
            fontWeight: 700,
            mb: { xs: 4, sm: 5, md: 6, lg: 8 },
            fontSize: {
              xs: "1.5rem",
              sm: "1.75rem",
              md: "2rem",
              lg: "2.2rem",
            },
            lineHeight: 1.2,
            color: "#ffffff",
          }}
        >
          Why Partner with JEPL + SOCMA?
        </Typography>

        {/* Features Grid */}
        <Grid
          container
          spacing={{ xs: 3, sm: 3, md: 4 }}
          justifyContent="center"
          sx={{
            mb: { xs: 4, sm: 5, md: 6, lg: 8 },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          {reasons.map((reason, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={3}
              sx={{
                width: { xs: "100%", sm: "auto" },
                maxWidth: { xs: "450px", sm: "none", md: "260px" },
                px: { xs: 0, sm: 1.5 },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: { xs: 2.5, sm: 2.5, md: 3 },
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  height: { xs: "100px", sm: "100px", md: "120px" },
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ color: "#8bc34a", mb: { xs: 1.5, sm: 2 } }}>
                  {reason.icon}
                </Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: {
                      xs: "1rem",
                      sm: "0.9375rem",
                      md: "1rem",
                    },
                    lineHeight: 1.5,
                    textAlign: "center",
                    px: 1,
                  }}
                >
                  {reason.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action Button */}
        <Button
          variant="contained"
          component={Link}
          to="/contact"
          sx={{
            backgroundColor: "#8bc34a",
            color: "#fff",
            fontWeight: 600,
            textTransform: "none",
            px: { xs: 4, sm: 4, md: 5 },
            py: { xs: 1.25, sm: 1.25, md: 1.5 },
            borderRadius: "8px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#7cb342",
              boxShadow: "none",
            },
            fontSize: {
              xs: "1rem",
              sm: "0.9375rem",
              md: "1rem",
            },
            minWidth: { xs: "220px", sm: "220px" },
          }}
        >
          Contact Our Team
        </Button>
      </Container>
    </Box>
  );
};

export default WhyPartner;

import React from "react";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import CompanyOverview from "./CompanyOverview";
import StrategicAlliance from "./StrategicAlliance";
import RDInnovation from "./R&DInnovation";
import MilestonesTimeline from "./MilestonesTimeline";
import WorldwideReach from "./WorldwideReach";
import NextFrontier from "./NextFrontier";
import WhyPartner from "./WhyPartner";
import {Link} from 'react-router-dom'



const ElectricRevolution = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#1a2639", // Darker, more sophisticated blue
          color: "white",
          textAlign: "center",
          py: { xs: 10, md: 15 },
          px: { xs: 2, md: 0 },
          position: "relative",
          overflow: "hidden",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(26,38,57,0.9) 0%, rgba(44,62,80,0.9) 100%)",
            zIndex: 1,
          },
        }}
      >
        {/* Decorative elements */}
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            backgroundColor: "rgba(139, 195, 74, 0.1)",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: -150,
            left: -150,
            width: 400,
            height: 400,
            borderRadius: "50%",
            backgroundColor: "rgba(139, 195, 74, 0.05)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: { xs: 3, md: 4 },
                fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
                lineHeight: 1.2,
                letterSpacing: "-0.5px",
                "& span": {
                  color: "#8bc34a",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: "100%",
                    height: 3,
                    backgroundColor: "#8bc34a",
                  },
                },
              }}
            >
              Powering India's <span>Electric Construction</span> Revolution
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: { xs: 5, md: 6 },
                lineHeight: 1.8,
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                maxWidth: 1000,
                mx: "auto",
                opacity: 0.9,
                px: { xs: 2, md: 0 },
              }}
            >
              Juggernaut Equipment Pvt Ltd, Established in 2022 in Odisha, the Steel, Mining & Aluminum hub of India with its Corporate Head Office around the country’s capital in Gurgaon. JEPL has joined hands with multiple global giants to Manufacture & revolutionize the India’s Construction equipment by offer a range of Electric Machines Excavators, Wheel Loaders, Forklifts. JEPL shall be involved in Sales – Machines & Parts & After Sales Service of the machines. The machines shall be manufactured in India by January 2026
            </Typography>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                component={Link}
                to="/products/wheel-loaders"
                sx={{
                  backgroundColor: "#8bc34a",
                  color: "white",
                  fontWeight: 700,
                  textTransform: "none",
                  px: { xs: 5, md: 6 },
                  py: { xs: 1.5, md: 1.8 },
                  borderRadius: "50px",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  boxShadow: "0 4px 20px rgba(139, 195, 74, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#7cb342",
                    boxShadow: "0 6px 24px rgba(139, 195, 74, 0.4)",
                  },
                }}
              >
                Explore Our Products
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
      <CompanyOverview />
      {/* <StrategicAlliance /> */}
      <RDInnovation />
      {/* <MilestonesTimeline /> */}
      <WorldwideReach />
      <NextFrontier />
      <WhyPartner />
    </Box>
  );
};

export default ElectricRevolution;

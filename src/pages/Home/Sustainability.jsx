import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/system";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'

const Sustainability = () => {
  const theme = useTheme();

  const timelineEvents = [
    { year: "2025", description: "First electric forklifts roll out" },
    { year: "2027", description: "EV excavator line reaches 5 models" },
    { year: "2030", description: "Full heavy-equipment fleet electrified" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#f1f8e9', // Light green background
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 0 },
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: '#8bc34a', // Green accent bar
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left Column: Main Text and Button */}
          <Grid item xs={12} md={6} sx={{ maxWidth: "550px" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  variant="h3"
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
                  Our <span>Planet's</span> Sustainability
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: { xs: 4, md: 5 },
                    lineHeight: 1.7,
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    maxWidth: { xs: "auto", md: "500px" },
                    mx: { xs: "auto", md: "0" },
                    opacity: 0.9,
                  }}
                >
                  At JEPL, we're committed to removing greenhouse gases from
                  heavy industry one machine at a time. Our LiFePO₄-powered
                  equipment paves the way to net-zero worksites.
                </Typography>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/sustainability"
                    sx={{
                      backgroundColor: "#8bc34a",
                      color: "#000",
                      fontWeight: 700,
                      textTransform: "none",
                      px: { xs: 4, md: 5 },
                      py: { xs: 1.5, md: 1.75 },
                      borderRadius: "8px",
                      fontSize: "1rem",
                      boxShadow: "0 4px 15px rgba(139, 195, 74, 0.3)",
                      "&:hover": {
                        backgroundColor: "#7cb342",
                      },
                    }}
                  >
                    Read Our Sustainability Report
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column: Timeline */}
          <Grid item xs={12} md={6} sx={{ maxWidth: "550px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 3, md: 4 },
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 2, md: 3 },
                        p: 2,
                        width: "400px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(139, 195, 74, 0.1)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 45, md: 60 },
                          height: { xs: 45, md: 60 },
                          borderRadius: "50%",
                          border: "2px solid rgba(139, 195, 74, 0.5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          backgroundColor: "rgba(139, 195, 74, 0.1)",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: "#8bc34a",
                            fontSize: { xs: "1rem", md: "1.2rem" },
                          }}
                        >
                          {event.year}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          fontSize: {
                            xs: "0.925rem",
                            sm: "1rem",
                            md: "1.1rem",
                          },
                          lineHeight: 1.5,
                          textAlign: { xs: "center", md: "left" },
                        }}
                      >
                        {event.description}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Sustainability;

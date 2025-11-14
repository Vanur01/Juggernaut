import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import { motion } from "framer-motion";
import goElectric1 from "../../assets/Home/Frame2.png";

const DieselToElectric = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down(400));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: theme.shadows[6],
      transition: { duration: 0.3 },
    },
  };

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
      variants={containerVariants}
      sx={{
        backgroundColor: "#f9fafb",
        py: { xs: isSmallMobile ? 4 : 6, md: 8 },
        px: { xs: 1, sm: 2 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Icon */}
      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{
          display: "inline-flex",
          mb: { xs: 1, sm: 2 },
          padding: { xs: 1.5, sm: 2 },
          backgroundColor: "rgba(139, 195, 74, 0.1)",
          borderRadius: "50%",
        }}
      >
        <BoltIcon
          sx={{
            fontSize: { xs: 32, sm: 40 },
            color: "#8bc34a",
            filter: "drop-shadow(0 0 8px rgba(139, 195, 74, 0.3))",
          }}
        />
      </Box>

      {/* Heading */}
      <Typography
        component={motion.h5}
        variants={itemVariants}
        variant={isSmallMobile ? "subtitle1" : isMobile ? "h6" : "h5"}
        fontWeight="bold"
        gutterBottom
        sx={{
          color: "text.primary",
          maxWidth: 800,
          mx: "auto",
          px: { xs: 1, sm: 2 },
          fontSize: {
            xs: isSmallMobile ? "1.1rem" : "1.25rem",
            sm: "1.5rem",
            md: "1.75rem",
          },
        }}
      >
        From Diesel to Electric — A{" "}
        <Box component="span" sx={{ color: "#8bc34a" }}>
          Bold Shift
        </Box>
      </Typography>

      {/* Subheading */}
      <Typography
        component={motion.p}
        variants={itemVariants}
        variant="body1"
        color="text.secondary"
        maxWidth="700px"
        mx="auto"
        mb={{ xs: 4, sm: 6 }}
        sx={{
          px: { xs: 1, sm: 2 },
          fontSize: {
            xs: isSmallMobile ? "0.8rem" : "0.9rem",
            sm: "1rem",
          },
          lineHeight: { xs: 1.5, sm: 1.6 },
        }}
      >
        We're pioneering the move away from fossil-fuel-burning industrial
        equipment. As one of the first companies to manufacture commercially
        available all-electric heavy equipment at scale, JEPL is proving that
        heavy machinery doesn't have to mean heavy emissions.
      </Typography>

      {/* Side-by-side boxes with images */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
        justifyContent="center"
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 1, sm: 0 },
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Box
            component={motion.div}
            variants={itemVariants}
            whileHover={!isMobile ? "hover" : undefined}
            sx={{
              height: {
                xs: isSmallMobile ? 180 : 220,
                sm: 250,
                md: 320,
                lg: 350,
              },
              width: "100%",
              maxWidth: 500,
              mx: "auto",
              backgroundColor: "#3e4651",
              color: "white",
              borderRadius: 2,
              boxShadow: theme.shadows[3],
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "4px",
                backgroundColor: "#f44336",
              },
            }}
          >
            <Box
              component="img"
              src="https://img.freepik.com/premium-photo/traffic-jam-with-heavy-vehicle-emissions_537415-6509.jpg"
              alt="Diesel Equipment"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.9,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.7)",
                p: { xs: 1, sm: 2 },
                textAlign: "center",
              }}
            >
              <Typography
                variant={isSmallMobile ? "subtitle2" : "h6"}
                fontWeight="bold"
                sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
              >
                Diesel Equipment
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: { xs: 0.5, sm: 1 },
                  opacity: 0.9,
                  fontSize: { xs: "0.7rem", sm: "0.8rem" },
                }}
              >
                High Emissions • Noisy • Expensive Fuel
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Box
            component={motion.div}
            variants={itemVariants}
            whileHover={!isMobile ? "hover" : undefined}
            sx={{
              height: {
                xs: isSmallMobile ? 180 : 220,
                sm: 250,
                md: 320,
                lg: 350,
              },
              width: "100%",
              maxWidth: 500,
              mx: "auto",
              backgroundColor: "#8bc34a",
              color: "white",
              borderRadius: 2,
              boxShadow: theme.shadows[3],
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "4px",
                backgroundColor: "#4caf50",
              },
            }}
          >
            <Box
              component="img"
              src={goElectric1}
              alt="Electric Equipment"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.9,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.7)",
                p: { xs: 1, sm: 2 },
                textAlign: "center",
              }}
            >
              <Typography
                variant={isSmallMobile ? "subtitle2" : "h6"}
                fontWeight="bold"
                sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
              >
                Electric Equipment
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: { xs: 0.5, sm: 1 },
                  opacity: 0.9,
                  fontSize: { xs: "0.7rem", sm: "0.8rem" },
                }}
              >
                Zero Emissions • Quiet • Cost Efficient
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Footer note */}
      <Typography
        component={motion.p}
        variants={itemVariants}
        variant="body2"
        fontStyle="italic"
color="black"        mt={{ xs: 3, sm: 4 }}
        sx={{
          maxWidth: 600,
          mx: "auto",
          px: { xs: 1, sm: 2 },
          fontSize: { xs: "1rem", sm: "1rem" },
           fontWeight: "bold",
        }}
      >
        This change is bold. It's challenging. But we're taking it one unit at a
        time.
      </Typography>
    </Box>
  );
};

export default DieselToElectric;

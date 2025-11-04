
import React from "react";
import { Box, Typography, Container, Breadcrumbs, Link } from "@mui/material";
import PortEquipment from "./PortEquipment";
import banner from "../assets/Home/service_banner.png";

const PortEquipmentBanner = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "350px",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: "#fff", mb: 2 }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="inherit">PortEquipment</Typography>
          </Breadcrumbs>

          <Typography variant="h4" fontWeight="bold" gutterBottom>
            BUILT ON TRUST. DRIVEN BY POWER.
          </Typography>

          <Typography
            variant="body1"
            sx={{ maxWidth: "600px", fontSize: "18px" }}
          >
          Juggernaut Equipments delivers reliable, high-performance heavy machinery 
          solutions built for High performance, safety, and durability.
          </Typography>
        </Container>
      </Box>
      <PortEquipment />
    </Box>
  );
};

export default PortEquipmentBanner;

import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";


const UnderConstruction = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "linear-gradient(to right, #1976d2, #42a5f5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        px: 2,
      }}
    >
      <Container>
        <img
          src="https://www.freepnglogos.com/uploads/under-construction-png/under-construction-south-wilford-endowed-church-england-primary-school-1.png"
          alt="Under Construction"
          style={{ maxWidth: "800px", marginBottom: "20px" ,height:"auto" }}
        />
      </Container>
    </Box>
  );
};

export default UnderConstruction;

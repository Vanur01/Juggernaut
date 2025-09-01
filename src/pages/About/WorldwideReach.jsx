import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  useTheme,
} from '@mui/material';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat'; // For Ports & Mining Sites
import WarehouseIcon from '@mui/icons-material/Warehouse'; // For Logistics & Warehousing
import FlagIcon from '@mui/icons-material/Flag'; // For Domestic Deployments in India

const WorldwideReach = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <DirectionsBoatIcon sx={{ fontSize: { xs: 25, md: 30 }, color: "#8bc34a" }} />,
      title: 'Ports & Mining Sites',
    },
    {
      icon: <WarehouseIcon sx={{ fontSize: { xs: 25, md: 30 }, color: "#8bc34a" }} />,
      title: 'Logistics & Warehousing',
    },
    {
      icon: <FlagIcon sx={{ fontSize: { xs: 25, md: 30 }, color: "#8bc34a" }} />,
      title: 'Domestic Deployments in India',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff', // White background
        py: { xs: 8, md: 12 }, // Responsive vertical padding
        px: { xs: 2, md: 4 }, // Responsive horizontal padding
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{
            fontWeight: 700,
            mb: { xs: 6, md: 8 },
            color: theme.palette.text.primary,
            fontSize: { xs: '1.7rem', sm: '2rem', md: '2.2rem' },
          }}
        >
          Worldwide Reach
        </Typography>

        {/* World Map Placeholder */}
        <Box
          sx={{
            backgroundColor: '#455a64', // Dark grey background from the image
            borderRadius: '8px', // Rounded corners
            height: { xs: 90, sm: 100, md: 120 }, // Responsive height for the map
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)', // Subtle shadow
            p: 2, // Padding inside the box
            mb: { xs: 6, md: 8 }, // Margin below the map
          }}
        >
          <Typography variant="h6" color="white" sx={{ opacity: 0.8, textAlign: 'center', maxWidth: '70%' , fontSize: "16px" }}>
            World Map: JEPL & SOCMA equipment exported to SEA, Central Asia, Middle East, Africa, Americas, Europe
          </Typography>
        </Box>

        {/* Feature Cards */}
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0} // No shadow as per image
                sx={{
                  borderRadius: '12px', // Rounded corners for the card
                  border: '1px solid #e0e0e0', // Light border as per image
                  p: { xs: 1, md: 2 }, // Responsive padding
                  height: '80px', // Ensure cards have equal height
                  width:"250px",
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.2s ease-in-out', // Subtle hover effect
                  '&:hover': {
                    transform: 'translateY(-5px)', // Lift effect on hover
                    boxShadow: theme.shadows[3], // Add subtle shadow on hover
                  },
                }}
              >
                <Box sx={{ mb: { xs: 2, md: 3 }, color: theme.palette.text.primary }}>
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: theme.palette.text.primary,
                    fontSize: { xs: '0.925rem', sm: '1rem' },
                  }}
                >
                  {feature.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorldwideReach;

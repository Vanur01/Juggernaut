import React from 'react';
import { Box, Typography, Grid, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import MapIcon from '@mui/icons-material/Map';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const CompanyOverview = () => {
  const theme = useTheme();

  const overviewItems = [
    {
      icon: <Typography variant="h4" sx={{ fontWeight: 800, color: '#8bc34a' }}>2022</Typography>,
      title: "Established",
      description: "Odisha origin, Gurgaon corporate HQ",
    },
    {
      icon: <MapIcon sx={{ fontSize: 40, color: '#8bc34a' }} />,
      title: "PAN-India Network",
      description: "Sales, Parts & Service across 28 States",
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 40, color: '#8bc34a' }} />,
      title: "Future-Ready",
      description: "Local assembly & manufacturing planned",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 0 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 6 }} justifyContent="center">
          {overviewItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    height: '100%',
                    p: { xs: 3, md: 4 },
                    borderRadius: '16px',
                    width:"280px",
                    backgroundColor: '#f8f9fa',
                    border: '1px solid rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(139, 195, 74, 0.03)',
                      borderColor: 'rgba(139, 195, 74, 0.3)'
                    }
                  }}
                >
                  <Box sx={{ 
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    height: 60
                  }}>
                    {item.icon}
                  </Box>
                  
                  <Typography
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: theme.palette.text.primary,
                      fontSize: "20px"
                    }}
                  >
                    {item.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.2,
                      fontSize: '1.05rem',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanyOverview;
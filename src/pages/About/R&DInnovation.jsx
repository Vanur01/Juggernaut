import React from 'react';
import { Box, Typography, Grid, Container, useTheme } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';

const RDInnovation = () => {
  const theme = useTheme();

  const innovationItems = [
    {
      icon: <Typography variant="h4" sx={{ fontWeight: 700, color: '#8bc34a' }}>100%</Typography>,
      title: 'Tech Conversion',
      description: '5 invention + 50 utility + 3 appearance patents in full product use',
    },
    {
      icon: <StarIcon sx={{ fontSize: 40, color: '#8bc34a' }} />,
      title: 'Quality Certifications',
      description: 'GB/T19001 QMS; Special Equipment License for IC forklifts',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            fontWeight: 800,
            mb: { xs: 6, md: 8 },
            color: theme.palette.text.primary,
            fontSize: { xs: '1.7rem', md: '2.2rem' },
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              backgroundColor: '#8bc34a',
              borderRadius: 2
            }
          }}
        >
          R&D & Innovation
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {innovationItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    height: '100%',
                    p: 4,
                    borderRadius: '16px',
                    width:"280px",
                    backgroundColor: '#f8f9fa',
                    border: '1px solid rgba(0,0,0,0.05)',
                    textAlign: 'center',
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
                    variant="h6"
                    component="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {item.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                      fontSize: '1rem',
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

export default RDInnovation;
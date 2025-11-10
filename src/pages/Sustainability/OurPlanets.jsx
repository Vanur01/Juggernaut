import React from 'react';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import FactoryIcon from '@mui/icons-material/Factory';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import { motion } from 'framer-motion';

const OurPlanets = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box 
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      sx={{ 
        padding: { xs: '40px 20px', md: '80px 40px' },
        backgroundColor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(139, 195, 74, 0.05) 0%, transparent 100%)',
          zIndex: 0
        }
      }}
    >
      <Grid container spacing={6} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Left Side */}
        <Grid item xs={12} md={6} sx={{maxWidth:"700px"}}>
          <Box 
            component={motion.div}
            variants={itemVariants}
            display="flex" 
            alignItems="flex-start" 
            gap={3}
          >
            <Box>
              <Typography 
                variant="h4" 
                fontWeight="bold" 
                color="text.primary"
                gutterBottom
                sx={{
                  background: '#8bc34a',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                Our Planet's Sustainability Matters
              </Typography>
              <Typography variant="body1" color="text.secondary" mt={1} sx={{ lineHeight: 1.7 }}>
                At JEPL, we are committed to making a difference — in
                 people's lives, in communities, and for the planet
                We do business with purpose: developing clean-technology solutions that enable a more sustainable and equitable world for future generations with huge financial gain for our esteemed customers.
              </Typography>

              <Grid container spacing={3} mt={3}>
                <Grid item xs={6}>
                  <Box
                    component={motion.div}
                    variants={itemVariants}
                    whileHover="hover"
                    sx={{
                      backgroundColor: '#fff',
                      p: 3,
                      borderRadius: 2,
                      height: '75%',
                      width: isMobile ? "300px" : "250px",
                      borderLeft: '4px solid #8bc34a',
                      boxShadow: theme.shadows[2]
                    }}
                  >
                    <FactoryIcon sx={{ fontSize: 32, mb: 1 , color:"#8bc34a" }} />
                    <Typography variant="h6" fontWeight="600">Clean Manufacturing</Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      Zero-emission production facilities
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    component={motion.div}
                    variants={itemVariants}
                    whileHover="hover"
                    sx={{
                      backgroundColor: '#fff',
                      p: 3,
                      borderRadius: 2,
                      height: '75%',
                      width: isMobile ? "300px" : "250px",
                      borderLeft: '4px solid #8bc34a',
                      boxShadow: theme.shadows[2]
                    }}
                  >
                    <NaturePeopleIcon sx={{ fontSize: 32, mb: 1  , color:"#8bc34a" }} />
                    <Typography variant="h6" fontWeight="600">Community Impact</Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      Creating sustainable jobs
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{
              position: 'relative',
              height: { xs: 300, md: 400 },
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: theme.shadows[4],
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
                zIndex: 1
              }
            }}
          >
            <Box
              component="img"
              src="https://img.freepik.com/premium-photo/world-environment-earth-day-concept_1036687-3475.jpg"
              alt="Electric machinery"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                p: 4,
                zIndex: 2,
                color: '#fff'
              }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Factory-to-Field Transition
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Seamless integration of electric machinery into industrial workflows
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurPlanets;
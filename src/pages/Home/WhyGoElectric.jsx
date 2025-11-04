import React from 'react';
import { Box, Typography, Grid, Container, useTheme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { motion } from 'framer-motion';
import goElectric from '../../assets/Home/goElectric1.jpeg';
import goElectric2 from '../../assets/Home/goElectric2.jpeg'; // Add a second image

const WhyGoElectric = () => {
  const theme = useTheme();

  const benefits = [
    { text: 'Lower Maintenance: Up to 60% savings vs. ICE models.' },
    { text: 'Quieter Operation: Sound levels 70% lower.' },
    { text: 'Instant Torque & Smooth Control: Electric drivetrains deliver precision.' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 0 },
        fontFamily: 'Inter, sans-serif',
        color: '#fff',
      }}
    >
      <div>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" justifyContent="center">
          {/* Left Column: First Image */}
          <Grid item xs={12} md={4} sx={{ maxWidth: "400px" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  borderRadius: '16px',
                  height: { xs: 250, sm: 350, md: 400 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    backgroundColor: '#8bc34a',
                  }
                }}
              >
                <Box
                  component="img"
                  src={goElectric}
                  alt="Electric heavy equipment"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Middle Column: Text Content */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    mb: { xs: 2, md: 3 },
                    fontSize: { xs: '1.7rem', sm: '2rem', md: '2.2rem' },
                    lineHeight: 1.2,
                    '& span': {
                      color: '#8bc34a'
                    }
                  }}
                >
                  Why Go <span>Electric?</span>
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    mb: { xs: 3, md: 4 },
                    lineHeight: 1.7,
                    fontSize: { xs: '1rem', sm: '1.05rem' },
                    maxWidth: { xs: 'auto', md: '500px' },
                    mx: 'auto',
                    opacity: 0.9
                  }}
                >
                  Moving to electric heavy-equipment isn't just green—it's smart business. Our machines deliver lower operating costs, quieter jobsites and almost zero emissions without sacrificing power.
                </Typography>

                {/* Benefits List */}
                <Box sx={{ mb: { xs: 4, md: 5 } }}>
                  {benefits.map((benefit, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        mb: 2,
                        justifyContent: 'center',
                        p: 1.5,
                        borderRadius: '8px',
                        backgroundColor: 'rgba(139, 195, 74, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(139, 195, 74, 0.2)',
                        }
                      }}
                    >
                      <CheckIcon 
                        sx={{ 
                          mr: 2, 
                          mt: 0.2, 
                          fontSize: 22,
                          color: '#8bc34a'
                        }} 
                      />
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: 500, 
                          fontSize: { xs: '0.95rem', sm: '1rem' },
                          textAlign: 'left'
                        }}
                      >
                        {benefit.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column: Second Image */}
          <Grid item xs={12} md={4} sx={{ maxWidth: "400px" }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box
                sx={{
                  borderRadius: '16px',
                  height: { xs: 250, sm: 350, md: 400 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    backgroundColor: '#8bc34a',
                  }
                }}
              >
                <Box
                  component="img"
                  src={goElectric2} // Use the second image
                  alt="Electric equipment benefits"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default WhyGoElectric;
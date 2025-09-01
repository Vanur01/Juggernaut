import React from 'react';
import { Box, Typography, Grid, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const NextFrontierSection = () => {
  const theme = useTheme();

  const roadmapEvents = [
    { 
      year: '25-26', 
      description: 'Local sub-assembly begins',
      icon: '⚙️'
    },
    { 
      year: '2027', 
      description: 'In-house LiFePO₄ battery line',
      icon: '🔋'
    },
    { 
      year: '2030', 
      description: 'Fully-integrated Indian manufacturing',
      icon: '🏭'
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
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column - Content */}
          <Grid item xs={12} md={6} sx={{maxWidth:"600px"}}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{ pr: { md: 4 } }}>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    color: theme.palette.text.primary,
                    fontSize: { xs: '1.7rem', md: '2.2rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Forging the <span style={{ color: '#8bc34a' }}>Next Frontier</span>
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                    mb: 3
                  }}
                >
                  Building on SOCMA's hybrid R&D ('CVT transmission'), hybrid/electric loaders
                  and our strategic investments, we aim to become the world's leading brand in
                  electric heavy machinery.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: '1.1rem'
                  }}
                >
                  Our products will be clean, efficient, and uncompromising in performance,
                  setting new standards in the industry.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column - Roadmap */}
          <Grid item xs={12} md={6} sx={{ maxWidth:"500px"}}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box sx={{
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                p: { xs: 3, md: 4 },
                borderLeft: '4px solid #8bc34a'
              }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: theme.palette.text.primary,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{
                    width: 12,
                    height: 12,
                    backgroundColor: '#8bc34a',
                    borderRadius: '50%',
                    mr: 2
                  }} />
                  Roadmap
                </Typography>

                <Box sx={{
                  position: 'relative',
                  pl: 3,
                }}>
                  {roadmapEvents.map((event, index) => (
                    <Box key={index} sx={{ 
                      mb: 4,
                      position: 'relative',
                      '&:last-child': { mb: 0 }
                    }}>
                      <Box sx={{
                        position: 'absolute',
                        left: -35,
                        top: 0,
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: '#8bc34a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.9rem'
                      }}>
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: '#8bc34a',
                          fontSize: '1.5rem'
                        }}
                      >
                        {event.year}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.7,
                          fontSize: '1.05rem'
                        }}
                      >
                        {event.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NextFrontierSection;
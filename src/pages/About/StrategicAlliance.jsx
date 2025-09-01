import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Container, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  useTheme 
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';
import goElectric from '../../assets/Home/goElectric.png'


const StrategicAlliance = () => {
  const theme = useTheme();

  const newEnergyProducts = [
    'Li-battery excavators',
    'Wheel loaders',
    'Heavy forklifts',
    'Reach stackers',
  ];

  const materialHandlingProducts = [
    'Rough-terrain forklifts',
    'Telescopic handlers',
    'Furnace vehicles',
    'Container handlers',
  ];

  return (
    <Box sx={{ 
      backgroundColor: '#ffffff',
      py: { xs: 8, md: 12 },
      px: { xs: 2, md: 0 }
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left Column - Image */}
          <Grid item xs={12} md={6} sx={{maxWidth:"450px"}}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                height: { xs: 300, md: 400 },
                position: 'relative',
                '&:hover img': {
                  transform: 'scale(1.03)'
                }
              }}>
                <Box
                  component="img"
                  src={goElectric}
                  alt="SOCMA Factory"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                }}>
                  <Typography variant="h6" color="white" fontWeight={600}>
                    SOCMA Manufacturing Facility
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column - Content */}
          <Grid item xs={12} md={6} sx={{maxWidth:"600px"}}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box sx={{ pl: { md: 4 } }}>
                <Typography variant="h3" sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.7rem', md: '2.2rem' },
                  lineHeight: 1.2,
                  color: theme.palette.text.primary
                }}>
                  Our <span style={{ color: '#8bc34a' }}>Strategic</span> Alliance
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: '1.1rem'
                }}>
                  SOCMA, founded in 2010 in Fujian Quanzhou's investment zone, brings 40,000
                  m² of advanced R&D and production capacity. Together, JEPL + SOCMA
                  pioneer electric crawlers, loaders, heavy-duty forklifts, reach stackers, skid
                  loaders, and more—melding SOCMA's patent-driven expertise with JEPL's
                  India-wide service footprint.
                </Typography>

                {/* Product Lists */}
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.text.primary,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <Box sx={{
                        width: 12,
                        height: 12,
                        backgroundColor: '#8bc34a',
                        borderRadius: '50%',
                        mr: 1.5
                      }} />
                      New-energy:
                    </Typography>
                    <List dense sx={{ p: 0 }}>
                      {newEnergyProducts.map((product, index) => (
                        <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleOutlineIcon sx={{ color: '#8bc34a' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={product}
                            primaryTypographyProps={{
                              variant: 'body1',
                              color: 'text.secondary'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>

                  <Grid item xs={12} sm={6} sx={{maxWidth:"500px"}}>
                    <Typography variant="h6" sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.text.primary,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <Box sx={{
                        width: 12,
                        height: 12,
                        backgroundColor: '#8bc34a',
                        borderRadius: '50%',
                        mr: 1.5
                      }} />
                      Material-handling:
                    </Typography>
                    <List dense sx={{ p: 0 }}>
                      {materialHandlingProducts.map((product, index) => (
                        <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleOutlineIcon sx={{ color: '#8bc34a' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={product}
                            primaryTypographyProps={{
                              variant: 'body1',
                              color: 'text.secondary'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StrategicAlliance;
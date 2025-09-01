import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Container, 
  useTheme,
  keyframes,
  useMediaQuery
} from '@mui/material';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import BuildIcon from '@mui/icons-material/Build';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { motion } from 'framer-motion';

// Animation definitions
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Feature = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const features = [
    {
      icon: <VolumeOffIcon sx={{ fontSize: { xs: 40, sm: 45, md: 50 } }} />,
      title: '60% Quieter Operation',
      description: 'Significantly reduced noise levels protect your crew\'s hearing.',
    },
    {
      icon: <BuildIcon sx={{ fontSize: { xs: 40, sm: 45, md: 50 } }} />,
      title: 'Up to 40% Lower Maintenance',
      description: 'Fewer moving parts mean lower TCO vs. diesel.',
    },
    {
      icon: <LocalFloristIcon sx={{ fontSize: { xs: 40, sm: 45, md: 50 } }} />,
      title: '100% Emission-Free',
      description: 'Zero tailpipe emissions for a cleaner worksite.',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#f1f8e9',
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        px: { xs: 1, sm: 2, md: 3, lg: 4 },
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={{ xs: 3, sm: 4, md: 6, lg: 8 }} 
          justifyContent="center" 
          alignItems="flex-start"
        >
          {features.map((feature, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index} 
              sx={{ 
                maxWidth: { xs: '100%', sm: '340px' },
                px: { xs: 2, sm: 1.5 }
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: isMobile ? "-20px" : "-50px" }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
                    height: '100%',
                    '&:hover': {
                      '& .feature-icon': {
                        animation: `${floatAnimation} 2s ease-in-out infinite`,
                        color: '#8bc34a'
                      }
                    }
                  }}
                >
                  <Box 
                    className="feature-icon"
                    sx={{ 
                      mb: { xs: 1.5, sm: 2, md: 2.5 },
                      color: theme.palette.text.primary,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: theme.palette.text.primary,
                      fontSize: { 
                        xs: '1rem', 
                        sm: '1.1rem', 
                        md: '1.2rem',
                        lg: '1.25rem' 
                      },
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '40px',
                        height: '3px',
                        background: '#8bc34a',
                        borderRadius: '3px'
                      }
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: { 
                        xs: '0.8125rem', 
                        sm: '0.875rem', 
                        md: '0.9rem',
                        lg: '0.95rem' 
                      },
                      maxWidth: '300px',
                      color: theme.palette.text.secondary,
                      mt: { xs: 1, sm: 1.5, md: 2 }
                    }}
                  >
                    {feature.description}
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

export default Feature;
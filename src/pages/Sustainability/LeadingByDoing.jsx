import React from 'react';
import { Box, Grid, Typography, Container, Paper, useTheme, useMediaQuery } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { motion } from 'framer-motion';

const LeadingByDoing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down(400));

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

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: theme.shadows[4],
      transition: { duration: 0.3 }
    }
  };

  const stats = [
    {
      icon: <ElectricBoltIcon  sx={{ fontSize: 30 , color:"#8bc34a" }} />,
      value: '80%',
      label: 'Reduction in CO₂ emissions',
      description: 'Compared to traditional diesel equipment'
    },
    {
      icon: <BatteryChargingFullIcon  sx={{ fontSize: 30 , color:"#8bc34a" }} />,
      value: '100%',
      label: 'Electric Machinery Line by 2027',
      description: 'Full transition to electric across all product lines'
    },
    {
      icon: <RecyclingIcon  sx={{ fontSize: 30 , color:"#8bc34a" }} />,
      value: '95%',
      label: 'Recyclable Components',
      description: 'Sustainable materials in our manufacturing'
    },
  ];

  return (
    <Box 
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
      variants={containerVariants}
      sx={{ 
        py: { xs: isSmallMobile ? 4 : 6, md: 8 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f8fafc',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.03) 0%, transparent 100%)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Icon */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            display: 'inline-flex',
            mb: 2,
            p: 2,
            backgroundColor: 'rgba(25, 118, 210, 0.1)',
            borderRadius: '50%'
          }}
        >
          <PublicIcon sx={{ 
            fontSize: 30, 
            color: '#8bc34a',
            filter: 'drop-shadow(0 0 8px rgba(25, 118, 210, 0.2))'
          }} />
        </Box>

        {/* Heading */}
        <Typography 
          component={motion.h5}
          variants={itemVariants}
          variant={isSmallMobile ? "h6" : "h5"}
          fontWeight={600} 
          gutterBottom
          sx={{
            color: 'text.primary',
            '& span': {
              color: '#8bc34a'
            }
          }}
        >
          Leading by <span>Doing</span>
        </Typography>

        {/* Subheading */}
        <Typography
          component={motion.p}
          variants={itemVariants}
          variant="body1"
          color="text.secondary"
          maxWidth="700px"
          mx="auto"
          mb={4}
          sx={{
            px: { xs: 2, sm: 0 },
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          Our commitment to sustainability isn't just talk. These numbers represent real progress in our mission to transform heavy industry.
        </Typography>

        {/* Stats Grid */}
        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4 }} 
          justifyContent="center" 
          sx={{ mt: 2 }}
        >
          {stats.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                component={motion.div}
                variants={itemVariants}
                whileHover={!isMobile ? "hover" : undefined}
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 3 },
                  height: '70%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  width:"300px",
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: 2,
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: theme.shadows[1]
                }}
              >
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  backgroundColor: 'rgba(25, 118, 210, 0.1)',
                  borderRadius: '50%'
                }}>
                  {item.icon}
                </Box>
                <Typography 
                  variant={isSmallMobile ? "h5" : "h4"} 
                  fontWeight={700} 
                  sx={{ 
                    color: '#8bc34a',
                    mb: 1
                  }}
                >
                  {item.value}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  fontWeight={600}
                  sx={{ mb: 1 }}
                >
                  {item.label}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    maxWidth: 200,
                    mx: 'auto'
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              transition: {
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2
              }
            }}
            sx={{
              position: 'absolute',
              background: theme.palette.primary.main,
              borderRadius: '50%',
              width: Math.random() * 5 + 3,
              height: Math.random() * 5 + 3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
              zIndex: 0
            }}
          />
        ))}
      </Container>
    </Box>
  );
};

export default LeadingByDoing;
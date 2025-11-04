import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BoltIcon from '@mui/icons-material/Bolt';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { motion } from 'framer-motion';
import {useNavigate } from 'react-router-dom'

const CleanMachine = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down(400));

  const exploreProduct = () => {
     navigate('/products/wheel-loaders')
  }

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

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      y: -3,
      boxShadow: theme.shadows[6],
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const features = [
    {
      icon: <ElectricBoltIcon fontSize="large" sx={{color:"#8bc34a"}} />,
      text: 'All-electric forklifts and excavators',
      description: 'Powerful electric alternatives to traditional diesel equipment'
    },
    {
      icon: <BoltIcon fontSize="large" sx={{color:"#8bc34a"}} />,
      text: 'Zero tailpipe emissions',
      description: 'Clean operation with no harmful exhaust fumes'
    },
    {
      icon: <BatteryChargingFullIcon fontSize="large" sx={{color:"#8bc34a"}} />,
      text: 'Energy-efficient manufacturing',
      description: 'Sustainable production processes with reduced energy use'
    },
    {
      icon: <VolumeMuteIcon fontSize="large" sx={{color:"#8bc34a"}} />,
      text: 'Low-noise operations',
      description: 'Quieter performance for urban and indoor environments'
    }
  ];

  return (
    <Box 
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
      variants={containerVariants}
      sx={{ 
        textAlign: 'center', 
        py: { xs: isSmallMobile ? 6 : 8, md: 10 },
        px: 2,
        backgroundColor: '#f9fafb',
        position: 'relative',
        overflow: 'hidden',
        // '&::before': {
        //   content: '""',
        //   position: 'absolute',
        //   top: 0,
        //   right: 0,
        //   width: '40%',
        //   height: '100%',
        //   background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, transparent 100%)',
        //   zIndex: 0
        // }
      }}
    >
      {/* Section Icon */}
      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{
          display: 'inline-flex',
          mb: 3,
          p: 2,
          backgroundColor: 'rgba(25, 118, 210, 0.1)',
          borderRadius: '50%'
        }}
      >
        <PrecisionManufacturingIcon sx={{ 
          fontSize: 40, 
          color: '#8bc34a',
          filter: 'drop-shadow(0 0 8px rgba(25, 118, 210, 0.3))'
        }} />
      </Box>

      {/* Heading */}
      <Typography 
        component={motion.h5}
        variants={itemVariants}
        variant={isSmallMobile ? "h6" : isMobile ? "h5" : "h4"}
        fontWeight="bold" 
        gutterBottom
        sx={{
          color: 'text.primary',
          maxWidth: 800,
          mx: 'auto',
          px: 2
        }}
      >
        Clean Machines, <Box component="span" sx={{ color: '#8bc34a' }}>Cleaner Future</Box>
      </Typography>

      {/* Subheading */}
      <Typography
        component={motion.p}
        variants={itemVariants}
        variant="body1"
        color="text.secondary"
        maxWidth="700px"
        mx="auto"
        mb={6}
        sx={{
          px: { xs: 2, sm: 0 },
          fontSize: { xs: '0.9rem', sm: '1rem' }
        }}
      >
        Our electric heavy machinery delivers fantastic power with minimum environmental impact.
        Experience the next generation of clean, efficient equipment.
      </Typography>

      {/* Features Grid */}
      <Grid 
        container 
        spacing={{ xs: 3, sm: 4 }} 
        justifyContent="center" 
        mt={4}
        sx={{ position: 'relative', zIndex: 1 }}
      >
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              component={motion.div}
              variants={itemVariants}
              whileHover={!isMobile ? "hover" : undefined}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: 'rgba(25, 118, 210, 0.1)',
                  width: 80,
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  mb: 2,
                  boxShadow: theme.shadows[1]
                }}
              >
                {feature.icon}
              </Paper>
              <Typography 
                variant="subtitle1" 
                fontWeight="bold" 
                color="text.primary"
                sx={{ mb: 1 }}
              >
                {feature.text}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  maxWidth: 250,
                  mx: 'auto',
                  fontSize: { xs: '0.8rem', sm: '0.875rem' }
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* CTA Button */}
      
      <Button onClick={exploreProduct}
        component={motion.a}
        variants={itemVariants}
        whileHover={!isMobile ? "hover" : undefined}
        whileTap="tap"
        variant="contained"
        href="#products"
        sx={{
          mt: { xs: 4, sm: 6 },
          backgroundColor: '#8bc34a',
          color: '#fff',
          textTransform: 'none',
          px: { xs: 3, sm: 4 },
          py: { xs: 1.25, sm: 1.5 },
          fontWeight: 600,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          '&:hover': {
            backgroundColor: '#2d3748',
            boxShadow: theme.shadows[4]
          }
        }}
      >
        Browse Our Products
      </Button>

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
    </Box>
  );
};

export default CleanMachine;
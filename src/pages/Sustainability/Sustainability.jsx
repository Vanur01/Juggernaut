import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { motion } from 'framer-motion';
import OurPlanets from './OurPlanets';
import DieselToElectric from './DieselToElectric';
import CarbonEmissions from './CarbonEmissions';
import CleanMachine from './CleanMachine';
import LeadingByDoing from './LeadingByDoing';


const HeroSection = () => {

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
        delayChildren: 0.3
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      y: -3,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <Box>
      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        sx={{
          background: 'linear-gradient(135deg, #434750 0%, #2e3138 100%)',
          color: '#fff',
          textAlign: 'center',
          py: { xs: isSmallMobile ? 6 : 8, md: 12 },
          px: 2,
          minHeight: { xs: isSmallMobile ? '60vh' : '50vh', md: '50vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 20% 50%, rgba(139, 195, 74, 0.1) 0%, transparent 50%)',
            zIndex: 0
          }
        }}
      >
        {/* Animated background elements */}
        <Box 
          component={motion.div}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          sx={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: { xs: '60px', sm: '100px' },
            height: { xs: '60px', sm: '100px' },
            background: 'radial-gradient(circle, rgba(139, 195, 74, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(5px)',
            zIndex: 0
          }}
        />
        
        <Box 
          component={motion.div}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '15%',
            width: { xs: '80px', sm: '150px' },
            height: { xs: '80px', sm: '150px' },
            background: 'radial-gradient(circle, rgba(139, 195, 74, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(5px)',
            zIndex: 0
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            component={motion.div}
            variants={iconVariants}
            whileHover={!isMobile ? "hover" : undefined}
            sx={{ display: 'inline-flex', mb: { xs: 2, sm: 3 } }}
          >
            <FlashOnIcon sx={{ 
              fontSize: { xs: 48, sm: 60 },
              color: '#8bc34a',
              filter: 'drop-shadow(0 0 8px rgba(139, 195, 74, 0.5))'
            }} />
          </Box>

          <Typography 
            component={motion.h1}
            variants={itemVariants}
            variant={isSmallMobile ? "h5" : isMobile ? "h4" : "h3"}
            sx={{ 
              fontWeight: 'bold', 
              mb: { xs: 1, sm: 2 },
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              '& span': {
                color: '#8bc34a',
                display: 'inline-block'
              }
            }}
          >
            <motion.span
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Powering
            </motion.span> a Greener Future
          </Typography>

          <Typography 
            component={motion.p}
            variants={itemVariants}
            variant="subtitle1"
            sx={{ 
              mb: { xs: 1, sm: 2 }, 
              fontSize: { xs: 14, sm: 16, md: 18 },
              color: '#e0e0e0',
              maxWidth: 700,
              mx: 'auto',
              px: { xs: 1, sm: 0 }
            }}
          >
            Electric Heavy Machinery in Green Industrial Setting
          </Typography>

          <Typography 
            component={motion.p}
            variants={itemVariants}
            variant="body1"
            sx={{ 
              mb: { xs: 3, sm: 4 }, 
              maxWidth: 600, 
              mx: 'auto', 
              color: '#d0d0d0',
              fontSize: { xs: 14, sm: 16, md: 18 },
              px: { xs: 1, sm: 0 }
            }}
          >
            Together, we're reshaping industries with sustainable clean-technology solutions.
          </Typography>
        </Box>

        {/* Floating particles - reduced number on small devices */}
        {[...Array(isSmallMobile ? 3 : 5)].map((_, i) => (
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
              background: '#8bc34a',
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
      <OurPlanets />
      <DieselToElectric />
      <CarbonEmissions />
      <CleanMachine />
      <LeadingByDoing />
    </Box>
  );
};

export default HeroSection;
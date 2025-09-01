import React from 'react';
import { Box, Typography, Grid, Button, useTheme, useMediaQuery } from '@mui/material';
import JEL856HE from '../../assets/Service/JEL-856H-E.png';
import { motion } from 'framer-motion';
import {useNavigate } from 'react-router-dom'
import ProductSpecifications from './Details';
import Gallery from '../JEL856HEDetails/Gallery'



const ProductHero = () => {
  const theme = useTheme();
  const navigate = useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleContact = () => {
    navigate('/contact')
 }


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <Box>
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      sx={{
        position: 'relative',
        height: { xs: '80vh', md: '90vh' },
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.3)), url(${JEL856HE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: { xs: 3, sm: 6, md: 10 },
        overflow: 'hidden'
      }}
    >
      {/* Dark overlay gradient */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
        zIndex: 0
      }} />

      {/* Main Content */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Title */}
        <Typography 
          component={motion.h1}
          variants={itemVariants}
          variant={isMobile ? "h3" : "h2"}
          fontWeight="bold" 
          sx={{ 
            mt: 4,
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            maxWidth: { md: '60%' }
          }}
        >
          833H Max Wheel Loader
        </Typography>

        {/* Subtitle */}
        <Typography
          component={motion.p}
          variants={itemVariants}
          variant={isMobile ? "body1" : "h6"}
          sx={{
            mt: 2,
            mb: 4,
            maxWidth: { sm: '80%', md: '50%' },
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            opacity: 0.9
          }}
        >
          Powerful, efficient, and built for demanding applications with advanced electric powertrain technology
        </Typography>

        {/* Stats */}
        <Grid 
          container 
          spacing={4} 
          sx={{ 
            mt: 4,
            maxWidth: { md: '80%' },
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(4px)',
            py: 3,
            px: 3,
            borderRadius: 2
          }}
        >
          {[
            { value: '3000', unit: 'kg', label: 'Payload Capacity' },
            { value: '80.5', unit: 'HP (60 kW)', label: 'Rated Power' },
            { value: '1.0 - 1.8', unit: 'm³', label: 'Bucket Capacity' }
          ].map((stat, index) => (
            <Grid 
              item 
              xs={12} 
              sm={4} 
              key={index}
              component={motion.div}
              variants={itemVariants}
            >
              <Typography 
                variant={isMobile ? "h4" : "h3"} 
                fontWeight="bold"
                sx={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
              >
                {stat.value} <small style={{ fontSize: '0.6em' }}>{stat.unit}</small>
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  opacity: 0.9,
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Get a Quote Floating Button */}
      <Box onClick={handleContact}
        component={motion.div}
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        sx={{
          position: 'absolute',
          bottom: { xs: 20, md: 40 },
          right: { xs: 20, md: 40 },
          backgroundColor: "#8bc34a",
          color: 'white',
          px: 3,
          py: 1.5,
          borderRadius: '6px',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: theme.shadows[1],
          zIndex: 1,
        }}
      >
        ₹ Get a Quote
      </Box>
    </Box>
    <ProductSpecifications />
    <Gallery />
    </Box>
  );
};

export default ProductHero;
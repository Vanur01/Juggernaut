import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  useTheme,
  Container,
  Avatar,
  Stack,
  Divider
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import JEF235T from '../../assets/Service/J2.png'
import Details from "./Details";
import {useNavigate } from 'react-router-dom'


const ProductPage = () => {

  const theme = useTheme();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const productImages = [
    JEF235T,
    JEF235T,
    JEF235T
  ];

  const handleContact = () => {
     navigate('/contact')
  }

  // Specifications (from image_71f3a0.png, focusing on CPD25H3 as an example)
  const specifications = [
    { label: "Model", value: "JEF PRO 80V SERIES (CPD25H3)" },
    { label: "Rated Load", value: "2500 kg" },
    { label: "Load Center Distance", value: "500 mm" },
    { label: "Lift Height", value: "3000 mm" },
    { label: "Free Lift Height", value: "155 mm" },
    { label: "Fork Size (L x W x T)", value: "1070 x 125 x 45 mm" },
    { label: "Mast Tilt Angle (Fwd/Bwd)", value: "6/10 °" },
    { label: "Minimum Turning Radius", value: "2680 mm" },
    { label: "Minimum Right Angle Stacking Aisle Width", value: "4150 mm" },
    { label: "Minimum Right Angle Aisle Width (with 1000mm pallet)", value: "2880 mm" },
    { label: "Minimum Ground Clearance", value: "110 mm" },
    { label: "Height of Overhead Guard", value: "2090 mm" },
    { label: "Height of Forks from Seat to Overhead Guard", value: "1000 mm" },
    { label: "Overhang (Fwd)", value: "465 mm" },
    { label: "Max Travel Speed (Full/No Load)", value: "14/15 km/h" },
    { label: "Max Lifting Speed (Full/No Load)", value: "300/400 mm/s" },
    { label: "Max Lowering Speed (Full/No Load)", value: "400/450 mm/s" },
    { label: "Overall Length (with/without Forks)", value: "3700/2540 mm" },
    { label: "Overall Width", value: "1160 mm" },
    { label: "Mast Height at Maximum Lift (with backrest)", value: "4030 mm" },
    { label: "Mast Lowered Height", value: "1995 mm" },
    { label: "Front Wheel", value: "7.00-12-12PR" },
    { label: "Rear Wheel", value: "6.00-9-10PR" },
    { label: "Wheelbase", value: "1665 mm" },
    { label: "Tread (Front Wheel/Rear Wheel)", value: "970/970 mm" },
    { label: "Weight (without load)", value: "3730 kg" },
    { label: "Voltage", value: "80 V" },
    { label: "Battery Capacity", value: "175Ah" },
    { label: "Motor (Traveling)", value: "11 kW" },
    { label: "Motor (Lifting)", value: "12 kW" },
    { label: "Way of Control", value: "AC" },
    { label: "Operating Pressure", value: "18.5 Mpa" },
    { label: "Maximum Drawbar Pull", value: "19 kN" },
  ];



  
  return (
    <Box sx={{ 
      backgroundColor: '#f5f7fa', 
      py: 6,
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg">
        {/* Main Product Section */}
        <Box sx={{ 
          backgroundColor: '#f5f7fa',
          borderRadius: '12px',
          overflow: 'hidden',
          mb: 6,
        }}>
          <Grid container>
            {/* Left Column - Image Gallery (40% width) */}
            <Grid item xs={12} md={5} sx={{
              p: 4,
              backgroundColor: '#f5f7fa',
              borderRight: { md: '1px solid rgba(0,0,0,0.08)' },
              maxWidth:"450px"
            }}>
              <Box sx={{
                position: 'relative',
                height: { xs: '300px', md: '400px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
                borderRadius: '8px',
                backgroundColor: '#f5f7fa'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
                
                <AnimatePresence initial={false}>
                  <motion.img
                    src={productImages[currentImageIndex]}
                    alt="Hybrid Wheel Loader"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      padding: '20px'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </Box>

              {/* Thumbnail Navigation */}
              <Box sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                {productImages.map((img, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    sx={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: `2px solid ${index === currentImageIndex ? theme.palette.primary.main : 'transparent'}`,
                      opacity: index === currentImageIndex ? 1 : 0.7,
                      transition: 'all 0.3s ease',
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': {
                        opacity: 1
                      }
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '8px'
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Right Column - Product Details (60% width) */}
            <Grid item xs={12} md={7} sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              maxWidth:"700px"
            }}>
              {/* Product Title */}
              <Typography variant="h4" sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary,
                fontSize: { xs: '1.6rem', md: '2rem' },
                lineHeight: 1.3
              }}>
                JEF PRO 80V SERIES
              </Typography>

              {/* Short Description */}
              <Typography variant="body1" color="text.secondary" sx={{
                mb: 3,
                fontSize: '1rem'
              }}>
               The JEF PRO 80V SERIES offers a range of electric forklifts designed for high efficiency and 
               robust performance in various material handling environments. 
               These models are built for durability and operator comfort.
              </Typography>

              {/* Specifications */}
              <Box sx={{ 
                backgroundColor: 'rgba(0,0,0,0.02)',
                p: 3,
                borderRadius: '8px',
                mb: 4,
                borderLeft: '3px solid #8bc34a'
              }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Specifications
                </Typography>
                <Grid container spacing={1}>
                  {specifications.map((spec, index) => (
                    <React.Fragment key={index}>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          {spec.label}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" fontWeight={500}>
                          {spec.value}
                        </Typography>
                      </Grid>
                      {index < specifications.length - 1 && (
                        <Grid item xs={12}>
                          <Divider sx={{ my: 1 }} />
                        </Grid>
                      )}
                    </React.Fragment>
                  ))}
                </Grid>
              </Box>

              {/* CTA Buttons */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 'auto' }}>
                <Button onClick={handleContact}
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    py: 1.5,
                    borderRadius: '8px',
                    fontWeight: 600,
                    backgroundColor: '#8bc34a',
                    '&:hover': {
                      backgroundColor: '#7cb342'
                    }
                  }}
                >
                  Request Quote
                </Button>
                <Button onClick={handleContact}
                  variant="outlined"
                  size="large"
                  fullWidth
                  sx={{
                    py: 1.5,
                    borderRadius: '8px',
                    fontWeight: 600,
                    borderColor: '#8bc34a',
                    color: '#8bc34a',
                    '&:hover': {
                      borderColor: '#7cb342'
                    }
                  }}
                >
                  Contact 
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      
       <Details />
      </Container>
    </Box>
  );
};

export default ProductPage;
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import JEL856HE from '../../assets/Service/JEL-856H-E.png';
import JEL876HE from '../../assets/Service/JEL-876H-E.png';
import JEL833HE from '../../assets/Service/JEL-833H-E.png';
import JEL866HE from '../../assets/Service/JEL-866H-E.png'
import JEL820EN from '../../assets/Service/JEL-820EN.png'



const imageList = [
    {
      src: JEL833HE,
      alt: 'Modern architecture design',
      caption: 'Innovative Design Concept',
      overlayText: 'Cutting-edge solutions for modern living spaces'
    },
    {
      src: JEL876HE,
      alt: 'Elegant interior space',
      caption: 'Luxury Interior Space',
      overlayText: 'Premium materials and exquisite craftsmanship'
    },
    {
      src: JEL856HE,
      alt: 'Sustainable building project',
      caption: 'Eco-Friendly Construction',
      overlayText: 'Environmentally conscious designs for a greener future'
    },
    {
      src: JEL866HE,
      alt: 'Smart building technology',
      caption: 'Advanced Smart Systems',
      overlayText: 'Integrated technology for enhanced functionality'
    },
    {
      src: JEL820EN,
      alt: 'Energy-efficient design',
      caption: 'Energy-Efficient Solutions',
      overlayText: 'Maximizing performance with minimal energy use'
    },
  ];
  

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  return (
    <Box sx={{ 
      py: 8, 
      px: 2, 
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 43, 92, 0.03)'
    }}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 'bold', 
          color: '#002b5c',
          mb: 2,
          position: 'relative',
          display: 'inline-block',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            height: 3,
            backgroundColor: '#002b5c',
            borderRadius: 3,
          }
        }}
      >
        OUR GALLERY
      </Typography>
      
      <Typography 
        variant="subtitle1" 
        sx={{ 
          color: '#555',
          mb: 4,
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        Explore our portfolio of exceptional designs and completed projects
      </Typography>
      
      <Box 
        sx={{
          position: 'relative',
          width: '80%',
          margin: '0 auto',
          height: '500px',
          overflow: 'hidden',
          borderRadius: 2,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Box sx={{
          display: 'flex',
          height: '100%',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentIndex * 100}%)`
        }}>
          {imageList.map((item, index) => (
            <Box key={index} sx={{
              minWidth: '100%',
              height: '100%',
              position: 'relative'
            }}>
              <Box 
                component="img"
                src={item.src}
                alt={item.alt}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: hovered ? 'brightness(0.7)' : 'brightness(1)',
                  transition: 'filter 0.3s ease'
                }}
              />
              
              {/* Image Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 43, 92, 0.5)',
                  opacity: hovered ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  p: 4,
                  textAlign: 'center'
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {item.caption}
                </Typography>
                <Typography variant="body1">
                  {item.overlayText}
                </Typography>
              </Box>
              
              {/* Bottom Caption */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 43, 92, 0.7)',
                  color: 'white',
                  py: 1.5,
                  px: 2,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  opacity: hovered ? 0 : 1
                }}
              >
                <Typography variant="h6">
                  {item.caption}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <IconButton 
          onClick={prevSlide} 
          sx={{ 
            position: 'absolute', 
            left: 16, 
            top: '50%', 
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(0, 43, 92, 0.8)',
              color: 'white'
            },
            transition: 'all 0.3s ease',
            opacity: hovered ? 1 : 0.7,
            width: 48,
            height: 48
          }}
        >
          <ArrowLeft fontSize="medium" />
        </IconButton>
        
        <IconButton 
          onClick={nextSlide} 
          sx={{ 
            position: 'absolute', 
            right: 16, 
            top: '50%', 
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(0, 43, 92, 0.8)',
              color: 'white'
            },
            transition: 'all 0.3s ease',
            opacity: hovered ? 1 : 0.7,
            width: 48,
            height: 48
          }}
        >
          <ArrowRight fontSize="medium" />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        {imageList.map((_, index) => (
          <Box 
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: currentIndex === index ? '#002b5c' : '#ccc',
              mx: 1,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
                bgcolor: currentIndex === index ? '#002b5c' : '#aaa'
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GallerySlider;
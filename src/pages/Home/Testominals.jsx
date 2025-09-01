import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Avatar,
  Stack,
  useTheme,
  IconButton
} from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSlider = () => {
  const theme = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const testimonials = [
    {
      quote: "Switching to JEPL's electric loaders saved us 35% on maintenance costs—and our crews love the quiet operation.",
      author: 'Ravi Patel',
      title: 'Project Manager, BuildCorp',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      quote: "The zero emissions from JEPL's forklifts have significantly improved air quality on our worksite while maintaining full power.",
      author: 'Priya Sharma',
      title: 'Operations Head, GreenLogistics',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      quote: "Exceptional power and precision from the electric excavator. We've reduced our carbon footprint without sacrificing performance.",
      author: 'Amit Singh',
      title: 'Site Supervisor, MegaBuild',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
  ];

  // Auto-advance logic
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f1f8e9', // Light green background
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 0 },
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: '#8bc34a', // Green accent bar
        }
      }}
    >
      <Container maxWidth="md">
        <Typography
          align="center"
          sx={{
            fontWeight: 800,
            mb: { xs: 4, md: 6 },
            color: '#000',
            fontSize:{xs:"1.7rem", md:"2.2rem"},
            '& span': {
              color: '#8bc34a'
            }
          }}
        >
          What Our <span>Clients</span> Say
        </Typography>

        <Box sx={{ position: 'relative', minHeight: 300 }}>
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentTestimonial}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              style={{
                position: 'absolute',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#f1f8e9',
                  borderRadius: '16px',
                  p: { xs: 3, md: 5 },
                  maxWidth: 800,
                  width: '100%',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    mb: 3,
                    fontSize: 36,
                    color: '#8bc34a',
                    lineHeight: 1,
                  }}
                >
                  "
                </Box>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    fontWeight: 500,
                    mb: { xs: 3, md: 4 },
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.7,
                    color: '#333',
                    fontStyle: 'italic',
                  }}
                >
                  {testimonials[currentTestimonial].quote}
                </Typography>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Dot Indicators */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          {testimonials.map((_, index) => (
            <IconButton
              key={index}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              sx={{
                p: 0.5,
                color: currentTestimonial === index ? '#8bc34a' : 'rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
              }}
            >
              <FiberManualRecord 
                fontSize="small" 
                sx={{ 
                  fontSize: currentTestimonial === index ? '1rem' : '0.75rem',
                  transition: 'all 0.3s ease',
                }} 
              />
            </IconButton>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default TestimonialSlider;
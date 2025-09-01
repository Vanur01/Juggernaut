import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  TextField,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import VisitOurOffice from './VisitOfiice';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataForApi = {
        ...formData,
        access_key: '7d2c0dfd-bf42-4a42-a25c-c1a0c0722306', 
        from_name: `${formData.firstName} ${formData.lastName}`,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formDataForApi),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({ success: false, message: result.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'An error occurred. Please try again.' });
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#f1f8e9',
          py: { xs: 6, md: 10, lg: 12 },
          px: { xs: 2, sm: 3, md: 4 },
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={{ xs: 4, md: 8 }} 
            alignItems="center"
            direction={{ xs: 'column-reverse', md: 'row' }}
          >
            {/* Left Column: Image and Intro Text */}
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    mb: { xs: 2, md: 3 },
                    color: '#000',
                    fontSize: { 
                      xs: '1.75rem', 
                      sm: '2.25rem', 
                      md: '2.5rem',
                      lg: '3rem' 
                    },
                    lineHeight: 1.2,
                    position: 'relative',
                    display: 'inline-block',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: { xs: '50%', md: 0 },
                      transform: { xs: 'translateX(-50%)', md: 'none' },
                      width: '80px',
                      height: '4px',
                      backgroundColor: '#8bc34a',
                      borderRadius: '2px'
                    }
                  }}
                >
                  Let's Connect
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: { xs: 3, md: 4 },
                    lineHeight: 1.6,
                    fontSize: { 
                      xs: '0.95rem', 
                      sm: '1rem', 
                      md: '1.05rem'
                    },
                    maxWidth: { xs: '100%', md: '500px' },
                    mx: { xs: 'auto', md: '0' },
                    color: '#555'
                  }}
                >
                  Have questions or want to discuss a project? Fill out the form and 
                  our team will get back to you within 24 hours.
                </Typography>

                {/* Image Container */}
                <Box
                  sx={{
                    height: { xs: 250, sm: 300, md: 350, lg: 400 },
                    width: '100%',
                    maxWidth: { xs: '100%', md: '500px' },
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    position: 'relative',
                    mx: { xs: 'auto', md: 0 },
                    mt: { xs: 3, md: 0 }
                  }}
                >
                  <Box
                    component="img"
                    src="https://www.culturemonkey.io/employee-engagement/content/images/2023/11/how-can-effective-communication-enhance-employee-morale-and-engagement.png"
                    alt="Contact us"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                      p: 3,
                      color: 'white'
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      We're Here to Help
                    </Typography>
                    <Typography variant="body2">
                      24/7 customer support for all your inquiries
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Right Column: Contact Form */}
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  backgroundColor: '#f1f8e9',
                  p: { xs: 3, sm: 4, md: 5 },
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  maxWidth: { xs: '100%', md: '600px' },
                  mx: { xs: 'auto', md: 0 },
                  width: '100%'
                }}
              >
                {submitStatus && (
                  <Typography
                    sx={{
                      color: submitStatus.success ? '#4caf50' : '#f44336',
                      fontWeight: 500,
                      textAlign: 'center'
                    }}
                  >
                    {submitStatus.message}
                  </Typography>
                )}

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      variant="outlined"
                      size="medium"
                      required
                      sx={{ 
                        '& .MuiOutlinedInput-root': { 
                          borderRadius: '8px',
                          '& fieldset': {
                            borderColor: '#8bc34a',
                          },
                          '&:hover fieldset': {
                            borderColor: '#8bc34a',
                          },
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      variant="outlined"
                      size="medium"
                      required
                      sx={{ 
                        '& .MuiOutlinedInput-root': { 
                          borderRadius: '8px',
                          '& fieldset': {
                            borderColor: '#8bc34a',
                          },
                          '&:hover fieldset': {
                            borderColor: '#8bc34a',
                          },
                        }
                      }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  type="email"
                  size="medium"
                  required
                  sx={{ 
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: '8px',
                      '& fieldset': {
                        borderColor: '#8bc34a',
                      },
                      '&:hover fieldset': {
                        borderColor: '#8bc34a',
                      },
                    }
                  }}
                />

                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  variant="outlined"
                  type="tel"
                  size="medium"
                  sx={{ 
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: '8px',
                      '& fieldset': {
                        borderColor: '#8bc34a',
                      },
                      '&:hover fieldset': {
                        borderColor: '#8bc34a',
                      },
                    }
                  }}
                />

                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  variant="outlined"
                  size="medium"
                  required
                  sx={{ 
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: '8px',
                      '& fieldset': {
                        borderColor: '#8bc34a',
                      },
                      '&:hover fieldset': {
                        borderColor: '#8bc34a',
                      },
                    }
                  }}
                />

                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={5}
                  size="medium"
                  required
                  sx={{ 
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: '8px',
                      '& fieldset': {
                        borderColor: '#8bc34a',
                      },
                      '&:hover fieldset': {
                        borderColor: '#8bc34a',
                      },
                    }
                  }}
                />

                <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    backgroundColor: '#8bc34a',
                    color: '#f8f9fa',
                    fontWeight: 700,
                    textTransform: 'none',
                    px: 4,
                    py: 1.5,
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    '&:hover': {
                      backgroundColor: '#7cb342',
                      boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
                      transform: 'translateY(-2px)'
                    },
                    fontSize: '1rem',
                    mt: 1,
                    transition: 'all 0.3s ease',
                    '&:active': {
                      transform: 'translateY(0)'
                    },
                    '&:disabled': {
                      backgroundColor: '#cccccc',
                      transform: 'none',
                      boxShadow: 'none'
                    }
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <VisitOurOffice />
    </Box>
  );
};

export default Home;
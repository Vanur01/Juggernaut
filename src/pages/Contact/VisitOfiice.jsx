import {
    Box,
    Typography,
    Grid,
    Container,
    Card,
    useTheme,
    useMediaQuery,
    Button,
    Stack
  } from '@mui/material';
  import React from 'react';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import PhoneIcon from '@mui/icons-material/Phone';
  import EmailIcon from '@mui/icons-material/Email';
  import AccessTimeIcon from '@mui/icons-material/AccessTime';
  
  const VisitOurOffice = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const officeInfo = {
      address: (
        <>
          Plot No. 248, Unit - III, Kharvel Nagar,
          Bhubaneswar, <br /> Khordha, Odisha - 751001
        </>
      ),
      phone: "+91 63728 04590",
      email: "sales@juggernautequip.com",
      coordinates: "20.274384,85.8374603"
    };    
  
    const contactDetails = [
      {
        icon: <LocationOnIcon sx={{ color: '#8bc34a' }} />,
        title: 'Our Location',
        content: officeInfo.address,
        action: (
          <Button
            variant="outlined"
            sx={{
              mt: 1.5,
              color: '#000',
              borderColor: '#000',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.05)',
                borderColor: '#000'
              }
            }}
            href={`https://www.google.com/maps?q=${officeInfo.coordinates}`}
            target="_blank"
          >
            Get Directions
          </Button>
        )
      },
      {
        icon: <PhoneIcon sx={{ color: '#8bc34a' }} />,
        title: 'Contact Us',
        content: officeInfo.phone,
        action: (
          <Button
            variant="contained"
            sx={{
              mt: 1.5,
              backgroundColor: '#8bc34a',
              color: '#fff',
            }}
            href={`tel:${officeInfo.phone.replace(/\D/g, '')}`}
          >
            Call Now
          </Button>
        )
      },
      {
        icon: <EmailIcon sx={{ color: '#8bc34a' }} />,
        title: 'Email Us',
        content: officeInfo.email,
        action: (
          <Button
            variant="contained"
            sx={{
              mt: 1.5,
              backgroundColor: '#8bc34a',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#7cb342'
              }
            }}
            href={`mailto:${officeInfo.email}`}
          >
            Send Email
          </Button>
        )
      },
    ];
  
    return (
      <Box
        sx={{
          backgroundColor: '#f8f9fa',
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3 },
          fontFamily: 'Inter, sans-serif',
        }}
        id="visit-us"
      >
        <Container maxWidth="lg">
          {/* Section Heading with Subtitle */}
          <Box textAlign="center" mb={{ xs: 5, md: 7 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                color: '#000',
                fontSize: { 
                  xs: '1.75rem', 
                  sm: '2.25rem', 
                  md: '2.5rem'
                },
                mb: 2,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  backgroundColor: '#8bc34a',
                  borderRadius: '2px'
                }
              }}
            >
              Visit Our Office
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#555',
                maxWidth: '600px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Visit us at our conveniently located office in Patia, Bhubaneswar. 
              We're happy to assist you with all your needs.
            </Typography>
          </Box>
  
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* Left Column: Contact Cards */}
            <Grid item xs={12} md={5}>
              <Stack spacing={3}>
                {contactDetails.map((item, index) => (
                  <Card
                    key={index}
                    sx={{
                      p: 3,
                      borderRadius: '12px',
                      bgcolor:"#f8f9fa",
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
                      }
                    }}
                  >
                    <Box display="flex" alignItems="flex-start" gap={2.5}>
                      <Box
                        sx={{
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '12px',
                          backgroundColor: 'rgba(139, 195, 74, 0.15)'
                        }}
                      >
                        {React.cloneElement(item.icon, { sx: { fontSize: 28 } })}
                      </Box>
                      <Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 700, 
                            mb: 1, 
                            color: '#000',
                            fontSize: '1.1rem'
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            lineHeight: 1.6, 
                            color: '#555',
                            mb: item.action ? 2 : 0
                          }}
                        >
                          {item.content}
                        </Typography>
                        {item.action}
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Stack>
            </Grid>
  
            {/* Right Column: Google Maps Integration */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  height: { 
                    xs: 350, 
                    sm: 400, 
                    md: '100%' 
                  },
                  width: '550px',
                  position: 'relative',
                }}
              >
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.715096375412!2d85.82232531543144!3d20.29610848658439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5171aa5%3A0xfc580e2b68b33fa8!2sPatia%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Patia, Bhubaneswar
                  </Typography>
                  <Button 
                    variant="contained" 
                    size="small"
                    href={`https://www.google.com/maps?q=${officeInfo.coordinates}`}
                    target="_blank"
                    sx={{
                      backgroundColor: '#8bc34a',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#7cb342'
                      }
                    }}
                  >
                    Open in Maps
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default VisitOurOffice;
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Button,
  Container,
  Divider,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  alpha,
  Slide,
  Fade
} from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Twitter,
  Instagram,
  YouTube,
  Email,
  Phone,
  LocationOn,
  ArrowRight
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";



const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const navigate = useNavigate();
  const handleRedirect = () => {
      navigate('/contact')
  }

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/JEPL" },
    { icon: LinkedIn, url: "https://www.linkedin.com/company/JEPL" },
    { icon: Twitter, url: "https://twitter.com/JEPL" },
    { icon: Instagram, url: "https://www.instagram.com/JEPL" },
    { icon: YouTube, url: "https://www.youtube.com/JEPL" },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" },
        { text: "Sustainability", link: "/sustainability" },
        { text: "Contact", link: "/contact" },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000000",
        color: "#ffffff",
        pt: isMobile ? 4 : 6,
        pb: isMobile ? 3 : 4,
        borderTop: `1px solid ${alpha("#8bc34a", 0.2)}`,
      }}
    >
      <Container maxWidth="lg">
        {/* Top Section */}
        <Grid 
          container 
          spacing={isMobile ? 3 : 4} 
          sx={{ 
            mb: isMobile ? 2 : 4,
          }}
        >
          {/* Branding & Social - Left aligned */}
          <Grid item xs={12} sm={8} md={4} sx={{ textAlign: isMobile ? 'center' : 'left' }}>
            <Slide in direction="right" timeout={500}>
              <Box>
                <Typography 
                  variant={isMobile ? "h5" : "h4"}
                  fontWeight="bold" 
                  gutterBottom
                  sx={{
                    color: "#8bc34a",
                    letterSpacing: "-0.5px",
                    mb: 1,
                    textAlign: isMobile ? 'center' : 'left'
                  }}
                >
                  JUGGERNAUT
                </Typography>
                <Typography 
                  variant="body1" 
                  color="rgba(255,255,255,0.7)" 
                  sx={{ 
                    mb: 3,
                    textAlign: isMobile ? 'center' : 'left',
                    lineHeight: 1.6,
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}
                >
                  Engineering excellence with sustainable solutions for a better future
                </Typography>
                
                <Box 
                  sx={{ 
                    display: "flex", 
                    gap: 1, 
                    mb: 4,
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    '& .MuiIconButton-root': {
                      transition: 'all 0.3s ease',
                      backgroundColor: alpha("#8bc34a", 0.1),
                      color: "#8bc34a",
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        backgroundColor: alpha("#8bc34a", 0.2),
                      }
                    }
                  }}
                >
                  {socialLinks.map(({ icon: Icon, url }, index) => (
                    <IconButton
                      key={index}
                      size={isMobile ? "small" : "medium"}
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon fontSize={isMobile ? "small" : "medium"} />
                    </IconButton>
                  ))}
                </Box>

                <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                  <Button 
                    onClick={handleRedirect}
                    variant="contained"
                    size={isMobile ? "medium" : "large"}
                    endIcon={<ArrowRight />}
                    sx={{
                      borderRadius: "8px",
                      textTransform: "none",
                      fontWeight: 600,
                      px: isMobile ? 3 : 4,
                      py: isMobile ? 1 : 1.5,
                      backgroundColor: "#8bc34a",
                      color: "#000",
                      '&:hover': {
                        backgroundColor: alpha("#8bc34a", 0.9),
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(139, 195, 74, 0.3)'
                      },
                      transition: 'all 0.3s ease',
                      fontSize: isMobile ? '0.875rem' : '0.9375rem'
                    }}
                  >
                    Get a Quote
                  </Button>
                </Box>
              </Box>
            </Slide>
          </Grid>

          {/* Footer Links - Left aligned */}
          {footerLinks.map((section, index) => (
            <Grid 
              item 
              xs={6} 
              sm={4} 
              md={2} 
              key={index}
              sx={{ 
                mt: isMobile ? 1 : 0,
                width:"120px"
              }}
            >
              <Fade in timeout={800 + (index * 200)}>
                <Box>
                  <Typography 
                    variant={isMobile ? "body1" : "subtitle1"}
                    fontWeight={600} 
                    gutterBottom
                    sx={{
                      color: "#fff",
                      position: 'relative',
                      fontSize: isMobile ? '1rem' : '1.0625rem',
                      textAlign: 'left',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: '40px',
                        height: '2px',
                        background: "#8bc34a",
                        borderRadius: 3
                      }
                    }}
                  >
                    {section.title}
                  </Typography>
                  <List dense sx={{ mt: 1 }}>
                    {section.links.map((item, idx) => (
                      <ListItem 
                        key={idx} 
                        disableGutters
                        sx={{
                          py: 0.5,
                          justifyContent: 'flex-start',
                        }}
                      >
                        <Link
                          href={item.link}
                          underline="none"
                          color="rgba(255,255,255,0.7)"
                          sx={{
                            transition: "all 0.3s ease",
                            fontWeight: 500,
                            textAlign: 'left',
                            display: 'block',
                            width: '100%',
                            fontSize: isMobile ? '0.925rem' : '1rem',
                            "&:hover": {
                              color: "#8bc34a",
                            },
                          }}
                        >
                          {item.text}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Fade>
            </Grid>
          ))}

          {/* Contact Info - Left aligned */}
          <Grid item xs={12} sm={6} md={3}>
            <Fade in timeout={1000}>
              <Box sx={{ textAlign: 'left' }}>
                <Typography 
                  variant={isMobile ? "body1" : "subtitle1"}
                  fontWeight={600} 
                  gutterBottom
                  sx={{
                    color: "#fff",
                    position: 'relative',
                    fontSize: isMobile ? '1rem' : '1.0625rem',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: '40px',
                      height: '2px',
                      background: "#8bc34a",
                      borderRadius: 3
                    }
                  }}
                >
                  Contact Us
                </Typography>
                <List dense sx={{ mt: 1 }}>
                  <ListItem disableGutters sx={{ py: 0.5, justifyContent: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 32, color: "#8bc34a" }}>
                      <Email fontSize={isMobile ? "small" : "medium"} />
                    </ListItemIcon>
                    <Link
                      href="mailto:sales@juggernautequip.com"
                      underline="none"
                      color="rgba(255,255,255,0.7)"
                      sx={{
                        transition: "all 0.3s ease",
                        fontWeight: 500,
                        fontSize: isMobile ? '0.8rem' : '0.875rem',
                        "&:hover": {
                          color: "#8bc34a",
                        },
                      }}
                    >
                       sales@juggernautequip.com
                    </Link>
                  </ListItem>
                  <ListItem disableGutters sx={{ py: 0.5, justifyContent: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 32, color: "#8bc34a" }}>
                      <Phone fontSize={isMobile ? "small" : "medium"} />
                    </ListItemIcon>
                    <Link
                      href="tel:63728 04590"
                      underline="none"
                      color="rgba(255,255,255,0.7)"
                      sx={{
                        transition: "all 0.3s ease",
                        fontWeight: 500,
                        fontSize: isMobile ? '0.8rem' : '0.875rem',
                        "&:hover": {
                          color: "#8bc34a",
                        },
                      }}
                    >
                      63728 04590
                    </Link>
                  </ListItem>
                  <ListItem disableGutters sx={{ py: 0.5, justifyContent: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 32, color: "#8bc34a" }}>
                      <LocationOn fontSize={isMobile ? "small" : "medium"} />
                    </ListItemIcon>
                    <Typography
                      variant="body2"
                      color="rgba(255,255,255,0.7)"
                      sx={{ 
                        fontWeight: 500,
                        fontSize: isMobile ? '0.8rem' : '0.875rem'
                      }}
                    >
                              NH-16 Near BPCL Fuel Pump Kanjiama, Pitapalli, <br></br> Khordha, Odisha - 752057
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Fade>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Divider sx={{ 
          my: isMobile ? 2 : 3,
          borderColor: alpha("#8bc34a", 0.2)
        }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: isMobile ? 1.5 : 2,
          }}
        >
          <Typography 
            variant="body2" 
            color="rgba(255,255,255,0.7)"
            sx={{
              fontSize: isMobile ? "0.75rem" : "0.8125rem",
              order: isMobile ? 2 : 1,
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            © {new Date().getFullYear()} Juggernaut. All rights reserved.
          </Typography>
          <Box sx={{ 
            display: "flex", 
            gap: isMobile ? 1.5 : 2,
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-end',
            order: isMobile ? 1 : 2,
            mb: isMobile ? 1.5 : 0
          }}>
            <Link
              href="/privacy"
              variant="body2"
              color="rgba(255,255,255,0.7)"
              underline="hover"
              sx={{
                fontSize: isMobile ? "0.75rem" : "0.8125rem",
                '&:hover': {
                  color: "#8bc34a",
                }
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              variant="body2"
              color="rgba(255,255,255,0.7)"
              underline="hover"
              sx={{
                fontSize: isMobile ? "0.75rem" : "0.8125rem",
                '&:hover': {
                  color: "#8bc34a"
                }
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              variant="body2"
              color="rgba(255,255,255,0.7)"
              underline="hover"
              sx={{
                fontSize: isMobile ? "0.75rem" : "0.8125rem",
                '&:hover': {
                  color: "#8bc34a"
                }
              }}
            >
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  Tabs,
  Tab,
  useTheme,
  Paper,
} from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PublicIcon from '@mui/icons-material/Public';
import MapIcon from '@mui/icons-material/Map';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ScienceIcon from '@mui/icons-material/Science';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BuildIcon from '@mui/icons-material/Build';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { motion } from 'framer-motion';

const tabContent = {
  'Heritage & Expertise': [
    // {
    //   icon: <MilitaryTechIcon />,
    //   title: '30 Years Experience',
    //   description: 'Three decades of heavy-machinery excellence',
    // },
    {
      icon: <PublicIcon />,
      title: 'Global Partnerships',
      description: 'Worldwide network of trusted partners',
    },
    {
      icon: <MapIcon />,
      title: 'PAN-India Network',
      description: 'Comprehensive service coverage across India',
    },
  ],
  'Innovation & Technology': [
    {
      icon: <LightbulbIcon />,
      title: 'Cutting-Edge R&D',
      description: 'Investing in future-proof electric solutions',
    },
    {
      icon: <ScienceIcon />,
      title: 'Advanced Battery Tech',
      description: 'LiFePO₄ batteries for superior performance',
    },
    {
      icon: <PrecisionManufacturingIcon />,
      title: 'Smart Manufacturing',
      description: 'Automated processes for precision and quality',
    },
  ],
  'Service & Support': [
    {
      icon: <SupportAgentIcon />,
      title: '24/7 Customer Support',
      description: 'Dedicated assistance whenever you need it',
    },
    {
      icon: <BuildIcon />,
      title: 'Rapid After-Sales Service',
      description: 'Minimizing downtime with quick repairs',
    },
    {
      icon: <HandshakeIcon />,
      title: 'Comprehensive Training',
      description: 'Empowering your team with expert knowledge',
    },
  ],
};

const Juggernaut = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('Heritage & Expertise');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
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
      <Container maxWidth="lg">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              fontWeight: 800,
              mb: { xs: 4, md: 6 },
              color: '#000',
              fontSize: { xs: '1.7rem', sm: '2rem', md: '2.2rem' },
              '& span': {
                color: '#8bc34a'
              }
            }}
          >
            We Are The <span>Juggernaut</span>
          </Typography>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box sx={{ 
            borderBottom: 1, 
            borderColor: 'rgba(0,0,0,0.1)', 
            mb: { xs: 4, md: 6 },
            display: 'flex',
            justifyContent: 'left'
          }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  color: 'rgba(0,0,0,0.7)',
                  '&.Mui-selected': {
                    color: '#8bc34a',
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#8bc34a',
                },
              }}
            >
              {Object.keys(tabContent).map((tabName) => (
                <Tab key={tabName} label={tabName} value={tabName} />
              ))}
            </Tabs>
          </Box>
        </motion.div>

        {/* Dynamic Content Cards - 3 per row */}
        <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="left">
          {tabContent[activeTab].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Paper
                  sx={{
                    borderRadius: '12px',
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: '#f1f8e9',
                  }}
                >
                  <Box sx={{ 
                    mb: { xs: 2, md: 3 },
                    color: '#8bc34a',
                    fontSize: { xs: 50, md: 60 }
                  }}>
                    {React.cloneElement(item.icon, { 
                      sx: { fontSize: 'inherit' } 
                    })}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: '#000',
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.7,
                      fontSize: { xs: '0.875rem', sm: '0.95rem' },
                      color: 'rgba(0,0,0,0.7)',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Juggernaut;
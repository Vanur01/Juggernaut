import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

const SpecificationTable = ({ label, value }) => (
  <Grid container spacing={2} sx={{ py: 1.5 }}>
    <Grid item xs={12} sm={6}>
      <Typography variant="subtitle1" color="text.secondary">{label}</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="body1" fontWeight="bold">{value}</Typography>
    </Grid>
    <Grid item xs={12}><Divider sx={{ my: 1 }} /></Grid>
  </Grid>
);

const ProductSpecifications = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const specifications = [
    { label: "Bucket Capacity", value: "3.2 m³" },
    { label: "Rated Payload", value: "5500 kg" },
    { label: "Rated Power", value: "110 kW" },
    { label: "Battery Capacity", value: "300 kWh" },
  ];

  const highlights = "Zero pollution, low cost, high quality, high efficiency.";
  
  const productIntroduction = `The JEL876H-E is the new generation 100% EV wheel loader newly developed by Juggernaut. The whole machine adopts the 4th generation and the third-generation electric technology. The whole machine is advanced and efficient, intelligent and comfortable, strong adaptability to working conditions, stable operation and high efficiency.`;

    const featuresList = [
      "More energy efficient and longer working:",
      "The high power traction motor is matched with the fixed shaft transmission, and the energy consumption of the whole machine is lower than other under comprehensive conditions.",
      "The high pressure system, coaxial with technology, and the shift is smooth without equal gear, and the operation is coherent and high efficiency.",
      "High performance battery charging time is short, exchange speed is fast, to meet the requirements of continuous operation.",
      "More intelligent and much safer:",
      "Hidden charging port, convenient charging and more thoughtful protection.",
      "The whole machine with intelligent charge management system, no manual charge management.",
      "Intelligent monitoring system of the cloud platform monitors the running status of the cloud platform.",
      "Intelligent ATS heat dissipation system intelligent operation according to heat dissipation requirements, energy saving and high efficiency.",
      "Precise and light driving is easy and comfortable:",
      "Full hydraulic steering and working device pilot control, accurate operation, light, international trend of the new appearance, high-grade cab, spacious space, wide field of vision, new sensory cockpit design, driving comfort.",
      "Equipped with liquid display multi-function digital instrument, rich information display to better control the working state.",
      "Throttle operating adjustment, motor speed, with the help of Ricardo PMX quick reversing function key, to achieve the whole machine's traction power, loading force, and efficient operation.",
      "Strong power, flexible and efficient operation:",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box 
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      sx={{ 
        maxWidth: 1200, 
        mx: 'auto', 
        my: { xs: 4, md: 8 },
        px: { xs: 2, sm: 4 }
      }}
    >
      {/* Title Section */}
      <Box 
        component={motion.div}
        variants={itemVariants}
        sx={{ 
          textAlign: 'center', 
          mb: { xs: 3, md: 5 } 
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          sx={{ 
            color: "#000",
            mb: 1
          }}
        >
          TECHNICAL SPECIFICATIONS
        </Typography>
        <Box sx={{ 
          width: 80, 
          height: 4, 
          backgroundColor: "#8bc34a", 
          mx: 'auto' 
        }} />
      </Box>

      {/* Highlights Chip */}
      <Box 
        component={motion.div}
        variants={itemVariants}
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mb: 4 
        }}
      >
        <Chip
          label={highlights}
          variant="outlined"
          sx={{ 
            px: 2,
            py: 1.5,
            color:"#8bc34a",
            fontSize: '1rem',
            fontWeight: 500,
            borderWidth: 2,
            '& .MuiChip-label': {
              px: 1
            }
          }}
        />
      </Box>

      {/* Product Introduction */}
      <Box 
        component={motion.div}
        variants={itemVariants}
        sx={{ 
          backgroundColor: '#f8f9fa',
          p: 3,
          borderRadius: 2,
          mb: 4,
          borderLeft: `4px solid #8bc34a`
        }}
      >
        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
          {productIntroduction}
        </Typography>
      </Box>

      {/* Main Specifications Accordion */}
      <Accordion 
        defaultExpanded
        component={motion.div}
        variants={itemVariants}
        sx={{ 
          mb: 2,
          borderRadius: '8px !important',
          overflow: 'hidden',
          boxShadow: theme.shadows[1]
        }}
      >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{ 
            background: theme.palette.grey[100],
            minHeight: '64px !important',
            '& .MuiAccordionSummary-content': {
              my: 1
            }
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{color:"#000"}}>
            JEL856H-E Specifications
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Box sx={{ p: { xs: 2, sm: 3 } }}>
            {specifications.map((spec, index) => (
              <SpecificationTable 
                key={index} 
                label={spec.label} 
                value={spec.value} 
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Key Features Accordion */}
      <Accordion
        component={motion.div}
        variants={itemVariants}
        sx={{ 
          mb: 2,
          borderRadius: '8px !important',
          overflow: 'hidden',
          boxShadow: theme.shadows[1]
        }}
      >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{ 
            background: theme.palette.grey[100],
            minHeight: '64px !important',
            '& .MuiAccordionSummary-content': {
              my: 1
            }
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{color:"#000"}}>
            Key Features & Advantages
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense sx={{ py: 0 }}>
            {featuresList.map((feature, index) => (
              <ListItem key={index} sx={{ px: 0, py: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon color="secondary" fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">
                  {feature}
                </Typography>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Performance Accordion */}
      <Accordion
        component={motion.div}
        variants={itemVariants}
        sx={{ 
          borderRadius: '8px !important',
          overflow: 'hidden',
          boxShadow: theme.shadows[1]
        }}
      >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          sx={{ 
            background: theme.palette.grey[100],
            minHeight: '64px !important',
            '& .MuiAccordionSummary-content': {
              my: 1
            }
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{color:"#000"}}>
            Performance & Dimensions
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Grid container spacing={2} sx={{ p: 3 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Performance
              </Typography>
              <SpecificationTable label="Top Speed" value="30 km/h" />
              <SpecificationTable label="Gradeability" value="35°" />
              <SpecificationTable label="Battery Life" value="5-8 hours" />
              <SpecificationTable label="Charge Time" value="3.5 hours (fast charge)" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Dimensions
              </Typography>
              <SpecificationTable label="Length with bucket" value="8,600 mm" />
              <SpecificationTable label="Overall Height" value="4,900 mm" />
              <SpecificationTable label="Wheelbase" value="3,100 mm" />
              <SpecificationTable label="Ground Clearance" value="350 mm" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ProductSpecifications;
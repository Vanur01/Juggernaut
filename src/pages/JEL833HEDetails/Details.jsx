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
    { label: "Rated Payload", value: "3000kg" },
    { label: "Bucket Capacity", value: "1.8m³" },
    { label: "Operating Weight", value: "8300kg" },
    { label: "Rated Power", value: "60kW" },
  ];

  const highlights = "New 3T series electric wheel loader with flexible, efficient, reliable, and durable design";
  
  const productIntroduction = `The JEL833H-E is a new 3T series electric wheel loader independently made by Juggernaut. The product is flexible, efficient, reliable, durable, intelligent and comfortable, suitable for various working conditions such as animal husbandry, municipal sanitation, transportation and urban construction, and transportation of sand and stone materials.`;

  const featuresList = [
    "Independently programming and developing vehicle electronic control programs to balance overall performance, improve operational efficiency and enhance endurance.",
    "The heat dissipation system operates automatically according to the heat dissipation needs, with good heat dissipation effect and more energy saving.",
    "Adopting industry-leading cutting-edge technology.",
    "Energy conservation and high efficiency.",
    "Permanent magnet synchronous drive motor, low loss, high efficiency, and high torque to meet heavy load.",
    "The motor adopts a new heat cooling mode, with stable power output and longer service life.",
    "Equipped with brand new high-quality lithium batteries, safe and reliable, with stable energy storage and shorter charging time.",
    "Battery capacity 105kwh and 181kwh is optional.",
    "The loader can be fully charged within around 60 minutes from low battery warning (recommend to use 120kw fast charging pile for loader with 181kwh battery, 180kw charging pile for loader with 105kwh battery).",
    "The battery adopts single gun dc fast charging technology, and the energy-saving management system is adopted.",
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
              <SpecificationTable label="Top Speed" value="20 km/h" />
              <SpecificationTable label="Gradeability" value="35°" />
              <SpecificationTable label="Battery Life" value="6-8 hours" />
              <SpecificationTable label="Charge Time" value="3.5 hours (fast charge)" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Dimensions
              </Typography>
              <SpecificationTable label="Length with bucket" value="6,600 mm" />
              <SpecificationTable label="Overall Height" value="5,115 mm" />
              <SpecificationTable label="Wheelbase" value="2,600 mm" />
              <SpecificationTable label="Ground Clearance" value="300 mm" />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ProductSpecifications;
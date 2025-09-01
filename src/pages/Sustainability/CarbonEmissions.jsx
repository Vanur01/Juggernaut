import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import CloudIcon from '@mui/icons-material/CloudQueue';
import LinkIcon from '@mui/icons-material/Link';

const CarbonEmissions = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 8, px: 2, backgroundColor: '#f9fafb' }}>
      {/* Icon */}
      <CloudIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 2 }} />

      {/* Heading */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Why Carbon Emissions Matter
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        color="text.secondary"
        maxWidth="700px"
        mx="auto"
        mb={3}
      >
        Carbon emissions not only accelerate climate change but also increase costs and
        regulatory pressure for businesses. Reducing emissions improves your company’s
        environmental footprint and long-term sustainability.
      </Typography>

      {/* Read Article Link */}
      <Link href="#" underline="hover" color="text.primary" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
        <LinkIcon fontSize="small" />
        Read Article
      </Link>
    </Box>
  );
};

export default CarbonEmissions;

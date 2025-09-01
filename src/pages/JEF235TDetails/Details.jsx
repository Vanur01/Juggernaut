import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Divider,
  IconButton,
  useTheme,
  Container,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";


// --- Details Component (for Product Introduction, Highlights, Features) ---
const Details = () => {
  const theme = useTheme();

 // Content extracted from image_71f3a0.png (adapted to fit existing structure)
 const highlights = "High-performance, reliable, and versatile forklifts for various industrial applications.";
 const productIntroduction = `The JEF PRO 80V SERIES offers a range of electric forklifts designed for high efficiency and robust performance in various material handling environments. These models are built for durability and operator comfort.`;

 const featuresList = [
   "STANDARD EQUIPMENT:",
   "• OPS/OSS dual electrical control",
   "• Standard seat",
   "• Braked",
   "• Reversing light",
   "• Reversing buzzer",
   "• Reversing mirror",
   "• Light switch",
   "• Speed control",
   "• Two multi-way valve",
   "• Direction switch",
   "• Headlight",
   "• Rear cover",
   "• Pattern durable tire",
   "• Chronograph",
   "• Three-section Mast",
   "• Cable parking brake",
   "• Lift tip control lever",
   "• Horn button",
   "• Front lamp",
   "• Key switch",
   "• Adjustable tilt steering wheel",
   "• Self-locking device of tilt oil rod",
   "• Full hydraulic power steering",
   "• Hydraulic oil back filter element",
   "• Hydraulic oil absorption filter",
   "• Manual oil gate",
   "• Lifting oil circuit speed limit valve",
   "• Lithium battery pack",
   "• Charger",
   "• Instrument",
   "• Handle",
   "• Hand brake switch",
   "• Overhead tools",
   "• Rubber pedal pad",
   "", // Separator
   "OPTIONS EQUIPMENT:",
   "• Windshield",
   "• Two and three stages full free mast",
   "• High hinge seat",
   "• Extended fork",
   "• Cab",
   "• Heater",
   "• Environmental solid tire",
   "• Fire extinguishing",
   "• All types of attachments",
   "• Solid tire",
   "• Rear illuminated lamp",
   "• Charging warning lamp",
   "• Specified color",
   "• Rear blue illumination lamp",
   "• Small fan",
 ];

  return (
    <Box sx={{ py: 4 }}>
      {/* Social Media Icons - Centered at Top */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mb: 4,
          pt: 1,
        }}
      >
        <IconButton
          color="primary"
          aria-label="facebook"
          sx={{
            backgroundColor: "#3b5998",
            color: "white",
            "&:hover": { backgroundColor: "#2d4373" },
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="twitter"
          sx={{
            backgroundColor: "#1DA1F2",
            color: "white",
            "&:hover": { backgroundColor: "#0d8ecf" },
          }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="linkedin"
          sx={{
            backgroundColor: "#0077B5",
            color: "white",
            "&:hover": { backgroundColor: "#005582" },
          }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="instagram"
          sx={{
            backgroundColor: "#E1306C",
            color: "white",
            "&:hover": { backgroundColor: "#c13584" },
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="youtube"
          sx={{
            backgroundColor: "#FF0000",
            color: "white",
            "&:hover": { backgroundColor: "#cc0000" },
          }}
        >
          <YouTube />
        </IconButton>
      </Box>

      {/* Highlights */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
          Highlights:
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {highlights}
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Product Introduction */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
          Product Introduction:
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}>
          {productIntroduction}
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Features of the complete machine product */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
          Features of the complete machine product:
        </Typography>
        <Box component="ul" sx={{ pl: 3, "& li": { mb: 1.5 } }}>
          {featuresList.map((feature, index) => (
            <Typography key={index} component="li" variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
              {feature}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import JEL856HE from "../assets/Service/JEL-856H-E.png";
import JEL876HE from "../assets/Service/JEL-876H-E.png";
import JEL820EN from "../assets/Service/JEL-820EN.png";
import JEF235T from "../assets/Service/J2.png";
import JEL866HE from "../assets/Service/JEL-866H-E.png";
import JEL833HE from "../assets/Service/JEL-833H-E.png";

const products = [
  {
    id: 1,
    image: JEL876HE,
    title: "JEL 876 Electric Wheel Loader",
    specs: ["Bucket Capacity : 2.8 - 7 m³ ", "Rated Payload: 7500 kg", "Operating Weight : 23500 ± 300 kg"],
    features: ["Maneuverable", "Indoor use", "Ergonomic controls"],
    exploreLink: "/contact",
  },
  {
    id: 2,
    image: JEL866HE,
    title: "JEL 866 Electric Wheel Loader",
    specs: ["Bucket Capacity : 2.4 - 6 m³ ", "Rated Payload: 6500 kg", "Operating Weight : 22000 ± 300 kg "],
    features: ["Port operations", "High stability", "Precision controls"],
    exploreLink: "/contact",
  },
  {
    id: 3,
    image: JEL856HE,
    title: "JEL 856 Electric Wheel Loader",
    specs: ["Bucket Capacity : 1.8 - 5 m³ ", "Rated Payload: 5500 kg", "Operating Weight : 17700 ± 300 kg "],
    features: ["Eco-friendly", "Low noise", "Fast charging"],
    exploreLink: "/contact",
  },
  {
    id: 4,
    image: JEL820EN,
    title: "JEL 835 Electric Wheel Loader",
    specs: ["Bucket Capacity : 1.4 - 3 m³ ",  "Rated Payload: 3000 kg", "Operating Weight : 10200 ± 300 kg "],
    features: ["Port operations", "Space-saving", "Eco-friendly"],
    exploreLink: "/contact",
  },
  {
    id: 4,
    image: JEL820EN,
    title: "JEL 833 Electric Wheel Loader",
    specs: ["Bucket Capacity : 1.2 - 2.5 m³ ",  "Rated Payload: 3000 kg", "Operating Weight : 10200 ± 300 kg "],
    features: ["Agile", "Space-saving", "Low maintenance"],
    exploreLink: "/contact",
  },
  {
    id: 5,
    image: JEL820EN,
    title: "JEL 820 Electric Wheel Loader",
    specs: ["Bucket Capacity : 1.2 m³ ", "Rated Payload: 2000 kg", "Operating Weight : 6600 kg "],
    features: ["Zero emissions", "High torque", "Smart display"],
    exploreLink: "/contact",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
    },
  },
};

const PremiumEquipment = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#1a2639",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 0 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{ textAlign: "center", mb: { xs: 6, md: 8 }, color: "white" }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: "#fff",
                fontSize: { xs: "2rem", md: "2.8rem" },
                lineHeight: 1.2,
                letterSpacing: "-1px",
              }}
            >
              Industrial Strength{" "}
              <span style={{ color: "#8bc34a" }}>Solutions</span>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.6,
                color: "#fff",
                fontSize: { xs: "1rem", md: "1.1rem" },
                opacity: 0.9,
              }}
            >
              Cutting-edge equipment engineered for maximum
              performance and reliability with best in class lithium from phosphate better for unmatched results
            </Typography>
          </Box>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={isMobile ? 3 : 4} justifyContent="center">
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <motion.div variants={itemVariants} whileHover="hover">
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      width: "350px",
                      borderRadius: "16px",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backgroundColor: "#f1f8e9",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        position: "relative",
                        height: 150,
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#f1f8e9",
                        p: 3,
                        borderBottom: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <Box
                        component={motion.img}
                        src={product.image}
                        alt={product.title}
                        sx={{
                          maxHeight: "80%",
                          maxWidth: "90%",
                          objectFit: "contain",
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.4 },
                        }}
                      />
                    </CardMedia>

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: 3,
                        "&:last-child": {
                          pb: 3,
                        },
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: theme.palette.text.primary,
                          fontSize: "1.2rem",
                          minHeight: "3rem",
                        }}
                      >
                        {product.title}
                      </Typography>

                      {/* Specifications */}
                      <Box sx={{ mb: 2 }}>
                        {product.specs.map((spec, index) => (
                          <Box
                            key={index}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 1,
                              "&:last-child": { mb: 0 },
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                backgroundColor: "#8bc34a",
                                borderRadius: "50%",
                                mr: 1.5,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: theme.palette.text.secondary,
                                fontSize: "0.85rem",
                              }}
                            >
                              {spec}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* Features */}
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 3,
                        }}
                      >
                        {product.features.map((feature, index) => (
                          <Chip
                            key={index}
                            label={feature}
                            size="small"
                            sx={{
                              backgroundColor: "rgba(139, 195, 74, 0.1)",
                              color: "#5a9216",
                              fontWeight: 500,
                              fontSize: "0.7rem",
                              height: 24,
                            }}
                          />
                        ))}
                      </Box>

                      <Button
                        fullWidth
                        variant="contained"
                        size={isMobile ? "medium" : "medium"}
                        sx={{
                          mt: "auto",
                          fontWeight: 700,
                          borderRadius: "8px",
                          py: 1,
                          backgroundColor: "#8bc34a",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "#7cb342",
                            boxShadow: "0 4px 12px rgba(139, 195, 74, 0.3)",
                          },
                        }}
                        href={product.exploreLink}
                      >
                        Get a Quote
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PremiumEquipment;

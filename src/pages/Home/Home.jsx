import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import Feature from "./Feature";
import WhyGoElectric from "./WhyGoElectric";
import Sustainability from "./Sustainability";
import Juggernaut from "./Juggernaut";
import TestimonialSlider from "./Testominals";
import AboutCompany from "./aboutCompany";
import banner from "../../assets/Home/banner.png";
import banner2 from "../../assets/Home/Frame2.png";
import banner3 from "../../assets/Home/Frame3.png";
import banner4 from "../../assets/Home/Frame4.png";
import banner5 from "../../assets/Home/Frame5.png";
import banner6 from "../../assets/Home/Frame6.jpg";
// import banner1 from "../../assets/Home/banner1.jpeg";
// import banner2 from "../../assets/Home/banner2.jpeg";
// import banner4 from "../../assets/Home/dumpTruck.png";
import { useNavigate } from "react-router-dom";



const backgrounds = [
  {
    id: 1,
    bgImage: `url(${banner})`,
    title: "JUGGERNAUT | ECO-FRIENDLY POWER MEETS PERFORMANCE ",
    subtitle: "Powerful 6-ton electric excavator with zero emissions",
  },
  {
    id: 2,
    bgImage: `url(${banner2})`,
    title: "JUGGERNAUT | ELECTRIC WHEEL LOADER – 2T TO 7.5T",
    subtitle: "High-performance 5-ton electric wheel loader",
  },
  {
    id: 3,
    bgImage: `url(${banner3})`,
    title: "JUGGERNAUT | ELECTRIC FORKLIFT - 2T TO 50T",
    subtitle: "Versatile 3-ton electric excavator for urban projects",
  },
  {
    id: 4,
    bgImage: `url(${banner4})`,
    title: "JUGGERNAUT | ELECTRIC EXCAVATOR – 13T TO 50T", 
    subtitle: "Versatile 3-ton electric excavator for urban projects",
  },
  {
    id: 5,
    bgImage: `url(${banner5})`,
    title: "JUGGERNAUT | ELECTRIC REACH STACKER – 45T",
    subtitle: "Versatile 3-ton electric excavator for urban projects",
  },
  // {
  //   id: 6,
  //   bgImage: `url(${banner6})`,
  //   title: "JUGGERNAUT | ELECTRIC DUMP TRUCK – 60T /70T/240T",
  //   subtitle: "Versatile 3-ton electric excavator for urban projects",
  // },
];

const HeroSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentBg, setCurrentBg] = useState(0);
  const [direction, setDirection] = useState(0);

  const exploreProduct = () => {
    navigate("/products/wheel-loaders");
  };

  const contact = () => {
    navigate("/contact");
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentBg((prev) => (prev === backgrounds.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentBg((prev) => (prev === 0 ? backgrounds.length - 1 : prev - 1));
  };

  const goToBg = (index) => {
    setDirection(index > currentBg ? 1 : -1);
    setCurrentBg(index);
  };

  const bgVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.5,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0.5,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          minHeight: "90vh",
          overflow: "hidden",
          color: "#fff",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        {/* Background Images with sliding animation */}
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={backgrounds[currentBg].id}
            custom={direction}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: backgrounds[currentBg].bgImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1,
            }}
          />
        </AnimatePresence>

        {/* Dark overlay with gradient */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
            zIndex: 2,
          }}
        />


        {/* Navigation Arrows */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: { xs: "10px", sm: "20px", md: "40px" },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 4,
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)",
              color: "#8bc34a",
            },
            width: { xs: "40px", md: "60px" },
            height: { xs: "40px", md: "60px" },
            backdropFilter: "blur(4px)",
            transition: "all 0.3s ease",
          }}
        >
          <ArrowLeft fontSize={isMobile ? "medium" : "large"} />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: { xs: "10px", sm: "20px", md: "40px" },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 4,
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)",
              color: "#8bc34a",
            },
            width: { xs: "40px", md: "60px" },
            height: { xs: "40px", md: "60px" },
            backdropFilter: "blur(4px)",
            transition: "all 0.3s ease",
          }}
        >
          <ArrowRight fontSize={isMobile ? "medium" : "large"} />
        </IconButton>

        {/* Dot Indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 4,
            alignItems: "center",
          }}
        >
          {backgrounds.map((bg, index) => (
            <Box
              key={bg.id}
              onClick={() => goToBg(index)}
              sx={{
                width: isMobile ? "12px" : "16px",
                height: isMobile ? "12px" : "16px",
                borderRadius: "50%",
                backgroundColor:
                  currentBg === index ? "#8bc34a" : "rgba(255,255,255,0.3)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                  backgroundColor:
                    currentBg === index ? "#8bc34a" : "rgba(255,255,255,0.5)",
                },
                ...(currentBg === index && {
                  width: isMobile ? "16px" : "20px",
                  height: isMobile ? "16px" : "20px",
                }),
              }}
            />
          ))}
        </Box>
      </Box>

      <Feature />
      <WhyGoElectric />
      <AboutCompany />
      {/* <TestimonialSlider /> */}
      <Sustainability />
      <Juggernaut />
    </Box>
  );
};

export default HeroSection;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "react-router-dom";
import logoImage from "../assets/Home/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Products", 
      path: "/products",
      dropdown: [
        { name: "Wheel Loaders", path: "/products/wheel-loaders" },
        { name: "Forklifts", path: "/products/forklifts" },
        { name: "Excavators", path: "/products/excavators" },
        { name: "Port Equipment", path: "/products/portEquipment" },
        { name: "Mining Tippers", path: "/products/MiningTippers" },
      ]
    },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    if (mobileOpen) {
      setMobileProductsOpen(false);
    }
  };

  const handleContactRedirect = () => {
    if (mobileOpen) {
      setMobileOpen(false);
      setMobileProductsOpen(false);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileProductsToggle = () => {
    setMobileProductsOpen(!mobileProductsOpen);
  };

  const renderDesktopMenu = () => {
    return (
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiPaper-root': {
            mt: 1,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            minWidth: '200px',
          },
        }}
      >
        {navItems.find(item => item.name === "Products").dropdown.map((item) => (
          <MenuItem 
            key={item.name} 
            component={Link} 
            to={item.path} 
            onClick={handleMenuClose}
            sx={{
              px: 2,
              py: 1,
              '&:hover': {
                backgroundColor: 'rgba(139, 195, 74, 0.1)',
              },
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{
                fontWeight: 500,
                color: 'text.primary',
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    );
  };

  const drawer = (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f1f8e9",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        }}
      >
        <Box
          component={Link}
          to="/"
          onClick={handleDrawerToggle}
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img 
            src={logoImage} 
            alt="JEPL Logo" 
            style={{ 
              height: "60px",
              width: "auto",
              objectFit: "contain"
            }}
          />
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon sx={{ color: "text.primary" }} />
        </IconButton>
      </Box>

      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <React.Fragment key={item.name}>
            {item.dropdown ? (
              <>
                <ListItem
                  button
                  onClick={handleMobileProductsToggle}
                  sx={{
                    px: 3,
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "rgba(139, 195, 74, 0.1)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      color: "text.primary",
                      textAlign: "left",
                      fontSize: "1.1rem",
                    }}
                  />
                  {mobileProductsOpen ? (
                    <ExpandLessIcon sx={{ color: "text.primary" }} />
                  ) : (
                    <ExpandMoreIcon sx={{ color: "text.primary" }} />
                  )}
                </ListItem>
                <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.dropdown.map((subItem) => (
                      <ListItem
                        key={subItem.name}
                        component={Link}
                        to={subItem.path}
                        onClick={handleDrawerToggle}
                        sx={{
                          pl: 6,
                          pr: 3,
                          py: 1.2,
                          backgroundColor: "rgba(139, 195, 74, 0.05)",
                          "&:hover": {
                            backgroundColor: "rgba(139, 195, 74, 0.15)",
                          },
                        }}
                      >
                        <ListItemText
                          primary={subItem.name}
                          primaryTypographyProps={{
                            fontWeight: 400,
                            color: "text.primary",
                            textAlign: "left",
                            fontSize: "1rem",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  px: 3,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "rgba(139, 195, 74, 0.1)",
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color: "text.primary",
                    textAlign: "left",
                    fontSize: "1.1rem",
                  }}
                />
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>

      <Box sx={{ p: 3, textAlign: "center" }}>
        <Button
          fullWidth
          component={Link}
          to="/contact"
          variant="contained"
          onClick={handleContactRedirect}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
            py: 1.5,
            borderRadius: "8px",
            boxShadow: "none",
            backgroundColor: "#8bc34a",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#7cb342",
            },
            maxWidth: "280px",
          }}
        >
          Get a Quote
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#f1f8e9",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        py: 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            height: 64,
            px: { xs: 0, sm: 0 },
          }}
        >
          {/* Logo Section with Image */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img 
              src={logoImage} 
              alt="JEPL Logo" 
              style={{ 
                height: isMobile ? "75px" : "90px",
                width: "auto",
                objectFit: "contain"
              }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {navItems.map((item) => (
              <Box key={item.name}>
                {item.dropdown ? (
                  <>
                    <Button
                      onClick={handleMenuOpen}
                      endIcon={<ExpandMoreIcon />}
                      sx={{
                        color: "text.primary",
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: "0.99rem",
                        px: 2,
                        borderRadius: "8px",
                        minWidth: "auto",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                          color: "#aed581",
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                    {renderDesktopMenu()}
                  </>
                ) : (
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{
                      color: "text.primary",
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: "0.99rem",
                      px: 2,
                      borderRadius: "8px",
                      minWidth: "auto",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                        color: "#aed581",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                )}
              </Box>
            ))}
          </Box>

          {/* Right Section - Menu button on mobile, CTA on desktop */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {/* Get a Quote Button - Desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                onClick={handleContactRedirect}
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  px: 2,
                  py: 0.8,
                  borderRadius: "8px",
                  boxShadow: "none",
                  backgroundColor: "#8bc34a",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#7cb342",
                  },
                }}
              >
                Get a Quote
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                sx={{
                  color: "text.primary",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            bgcolor: "#f1f8e9",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
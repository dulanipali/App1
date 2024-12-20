import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Layout from "./layout";

export const HomeScreen = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showButtons, setShowButtons] = useState(false); // State to control button visibility

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const popularServices = [
    {
      name: "Writing Center",
      description: "Get help with your essays and academic papers.",
      image: "/placeholder.svg?height=130&width=130",
    },
    {
      name: "Food Pantry",
      description: "Access to free food and essentials for students in need.",
      image: "/placeholder.svg?height=130&width=130",
    },
  ];

  const campusPlaces = [
    "Library",
    "Student Union Building",
    "Dining Hall",
    "Gym",
    "Student Center",
    "Computer Lab",
    "Campus Bookstore",
    "Health Center",
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = campusPlaces.filter((place) =>
        place.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
    setShowButtons(true); // Show buttons when a suggestion is clicked
  };

  const handleOverlayClick = () => {
    setSearchFocus(false);
    setSuggestions([]);
    setShowButtons(false); // Hide buttons when overlay is clicked
  };

  return (
    <Layout>
      {searchFocus && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          bgcolor="rgba(0, 0, 0, 0.5)"
          zIndex={1}
          onClick={handleOverlayClick}
        />
      )}

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingX={2}
        boxSizing="border-box"
        width="100vw"
        overflowX="hidden"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          height={"50vh"}
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/static/img//Basemap_image.svg)`,
            backgroundSize: "contain",
            backgroundPosition: "50% 50%",
          }}
          mb={3}
          width="100%"
          minWidth="100vw"
        >
          <Box
            width="60%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={2}
            borderRadius={2}
            mb={3}
            position="relative"
            zIndex={2}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter Location...."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setSearchFocus(true)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: { borderRadius: 50, backgroundColor: "white" },
              }}
            />
            {suggestions.length > 0 && (
              <Paper
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  zIndex: 3,
                  maxHeight: "150px",
                  overflowY: "auto",
                }}
              >
                <List>
                  {suggestions.map((suggestion, index) => (
                    <ListItem
                      button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <ListItemText primary={suggestion} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}
          </Box>
        </Box>

        {showButtons && (
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            mb={3}
            px={2}
            maxWidth="600px"
            gap={2}
            zIndex={100}
          >
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                handleNavigation("/buildings");
                setShowButtons(false); // Optionally hide buttons after navigation
              }}
              sx={{
                backgroundColor: "#660708",
                borderRadius: 50,
                height: 45,
                "&:hover": {
                  backgroundColor: "#490506",
                },
              }}
            >
              <Typography variant="button" style={{ color: "white" }}>
                View Buildings
              </Typography>
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                handleNavigation("/directions");
                setShowButtons(false); // Optionally hide buttons after navigation
              }}
              sx={{
                backgroundColor: "#a4161a",
                borderRadius: 50,
                height: 45,
                "&:hover": {
                  backgroundColor: "#490506",
                },
              }}
            >
              <Typography variant="button" style={{ color: "white" }}>
                Get Directions
              </Typography>
            </Button>
          </Box>
        )}

        <Box
          width="100%"
          height={392}
          bgcolor="#f5f3f4"
          padding={2}
          maxWidth="100vw"
          display="flex"
          flexDirection="column"
          alignItems="center"
          onClick={() => handleNavigation("/services")}
        >
          <Typography
            variant="h6"
            fontFamily="Roboto, Helvetica"
            fontWeight="normal"
            color="black"
            mb={2}
          >
            Popular Campus Services
          </Typography>
          <Box width="90%" marginBottom={2}>
            {popularServices.map((service) => (
              <Paper
                key={service.name}
                elevation={3}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                  padding: 16,
                  backgroundColor: "white",
                }}
                sx={{
                  "&:hover": {
                    elevation: 6,
                    transform: "scale(1.01)",
                  },
                }}
              >
                <Box flex={1}>
                  <Typography variant="h6" color="#660708">
                    {service.name}
                  </Typography>
                  <Typography variant="body1" color="black">
                    {service.description}
                  </Typography>
                </Box>
                <Box
                  width={130}
                  height={130}
                  bgcolor="#242323"
                  border="1px solid white"
                >
                  <img
                    src={service.image}
                    alt={`${service.name} Image`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, BottomNavigation, BottomNavigationAction, Drawer, List, ListItem, ListItemText, Box, CardMedia } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MapIcon from "@mui/icons-material/Map";
import logo from './logo.svg'

const Layout = ({ children }) => {
    // State for bottom navigation
    const [navValue, setNavValue] = useState(0);

    // State for menu drawer
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    // Handle menu toggle
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden', maxWidth: '100vw' }}>
            {/* Drawer for the Menu */}
            <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
                <List>
                    <ListItem button onClick={() => navigate("/")}>
                        <ListItemText primary="Map" />
                    </ListItem>
                    {/*<ListItemText primary="Profile" />
                    </ListItem>*/}
                    {/*<ListItem button onClick={() => navigate("/map")}>
                        <ListItemText primary="Map" />
                    </ListItem>*/}
                    <ListItem button onClick={() => navigate("/buildings")}>
                        <ListItemText primary="Buildings" />
                    </ListItem>
                    <ListItem button onClick={() => navigate("/BusSchedule")}>
                        <ListItemText primary="Bus Schedule" />
                    </ListItem>
                    <ListItem button onClick={() => navigate("/dining")}>
                        <ListItemText primary="Dining Options" />
                    </ListItem>
                    <ListItem button onClick={() => navigate("/faq")}>
                        <ListItemText primary="FAQ" />
                    </ListItem>
                    {/*<ListItem button onClick={() => navigate("/settings")}>
                        <ListItemText primary="Settings" />
                    </ListItem>*/}
                </List>
            </Drawer>

            <AppBar flexDirection={'row'} display={'flex'} position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
                <Toolbar sx={{ width: '100%', justifyContent: 'space-between', paddingX: 2 }}>
                    <IconButton onClick={toggleMenu}>
                        <MenuIcon />
                    </IconButton>

                    <Box display="flex" alignItems="center" sx={{ flexGrow: 1, justifyContent: 'center' }}>
                        <Typography variant="h6" sx={{ color: 'black', textAlign: 'center' }}>
                            RaiderNav
                        </Typography>
                        <img
                            src={logo}
                            style={{
                                width: 40,
                                height: 40,
                                marginLeft: 8 // adds a small space between the text and the logo
                            }}
                            alt="logo"
                        />
                    </Box>

                    <IconButton onClick={() => navigate("/")} sx={{ marginRight: 6 }}>
                        <MapIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>


            {/* Main Content */}
            <Box sx={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', width: '100vw' }}>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;

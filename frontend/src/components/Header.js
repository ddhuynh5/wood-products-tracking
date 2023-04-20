import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListSubheader,
    IconButton,
    ButtonBase,
    Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <AppBar position="fixed" color="success">
            <Toolbar sx={{
                display: 'flex',
                justifyContent: { xs: 'space-between', sm: 'center' }
            }}>
                <ButtonBase
                    sx={{
                        whiteSpace: 'nowrap',
                        '&:hover, &:focus': {
                            color: 'white',
                        },
                    }}
                    component={Link}
                    to="/"
                >
                    <Typography variant="h6" component="div">
                        CarbonTrack
                    </Typography>
                </ButtonBase>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={open}
                    onClose={handleDrawerToggle}
                >
                    <List sx={{ width: 250 }}>
                        <ListSubheader sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <IconButton onClick={handleDrawerToggle}>
                                <CloseIcon />
                            </IconButton>
                        </ListSubheader>
                        <ListItemButton>
                            <ListItemText primary="Features" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Resources" />
                        </ListItemButton>
                        <ListItemButton component={Link} to="/contact">
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                        <Divider />
                        <ListItem sx={{ mt: 2 }}>
                            <Button variant="outlined" sx={{ width: '100%' }} component={Link} to="/signin">
                                Login
                            </Button>
                        </ListItem>
                    </List>
                </Drawer>
                <ButtonBase
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        ml: 75,
                        mr: 3
                    }}>
                    <Typography variant="body1">Features</Typography>
                </ButtonBase>
                <ButtonBase
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        mr: 3
                    }}>
                    <Typography variant="body1">Resources</Typography>
                </ButtonBase>
                <ButtonBase
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '&:hover, &:focus': {
                            color: 'white',
                        },
                    }}
                    component={Link}
                    to="/contact"
                >
                    <Typography variant="body1">Contact</Typography>
                </ButtonBase>
                <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                        ml: 5,
                        mt: 0,
                        display: { xs: 'none', sm: 'block' },
                        whiteSpace: 'nowrap'
                    }}
                    component={Link}
                    to="/signin"
                >
                    Login
                </Button>

            </Toolbar>
        </AppBar>
    );
}
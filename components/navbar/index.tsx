"use client"
import * as React from 'react';
import Container from '@mui/material/Container';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const links = [
    {
        label: "Home",
        uri: "/"
    },
    {
        label: "Treatments",
        uri: "/treatments/"
    },
    {
        label: "Skin & FAQ",
        uri: "/skin-and-faq/"
    },
    {
        label: "Medical Clinic",
        uri: "/medical-clinic/"
    },
    {
        label: "Photo Gallery",
        uri: "/photo-gallery/"
    },
    {
        label: "Media",
        uri: "/media/"
    },
    {
        label: "About Us",
        uri: "/about-us/"
    },
    {
        label: "Contact",
        uri: "/contact/"
    },
]

const Navbar = () => {
    const path = usePathname();

    return (
        <AppBar position='sticky' sx={{ bgcolor: "transparent" }}>
            <Container maxWidth="lg" sx={{ p: 0 }}>
                <Toolbar sx={{ display: "flex", flexFlow: "row", py: 1, gap: 4 }}>
                    <Box sx={{ width: 295, height: 75, position: "relative" }}>
                        <Image src="/assets/logos/skin_and_you.png" alt="logo" fill style={{ objectFit: "contain" }} />
                    </Box>
                    <Box component="ul" sx={{ display: "flex", flexFlow: "row wrap", alignItems: "center", gap: 2, listStyle: "none" }}>
                        {
                            links.map((link, index) => (
                                <Typography key={index} component="li" variant='body1' fontWeight={700} color={path.endsWith(link.uri) ? "#F80" : "ButtonText"}>
                                    <Link href={link.uri} title={link.label} style={{ textDecoration: "none", color: "inherit" }}>{link.label}</Link>
                                </Typography>
                            ))
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

// export default Navbar;



export default function DrawerAppBar() {
    const path = usePathname();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Link href="/" title='Skin and You'>
                <Box sx={{ width: 175, height: 75, position: "relative", mx: "auto" }}>
                    <Image src="/assets/logos/skin_and_you.png" alt="logo" fill style={{ objectFit: "contain" }} />
                </Box>
            </Link>
            <Divider />
            <List>
                {links.map((link, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link href={link.uri} title={link.label} style={{ textDecoration: "none", color: "inherit" }}>
                                <ListItemText primary={link.label} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = typeof window !== 'undefined' ? () => window.document.body : undefined;

    return (
        <Box component="header" sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" position='sticky' sx={{ bgcolor: "transparent" }}>
                <Toolbar sx={{ py: 1, maxWidth: "lg", mx: "auto", width: "100%", gap: 4 }}>
                    <IconButton
                        color="default"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link href="/" title='Skin and You'>
                        <Box sx={{ maxWidth: 295, minWidth: 100, width: { xs: "50%", md: 295 }, height: { height: "100%", md: 75 }, position: "relative", mx: { xs: "auto", md: "unset" } }}>
                            <Image src="/assets/logos/skin_and_you.png" alt="logo" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fill style={{ objectFit: "contain" }} />
                        </Box>
                    </Link>
                    <Box component="ul" sx={{ display: { xs: "none", md: "flex" }, flexFlow: "row wrap", alignItems: "center", gap: 2, listStyle: "none" }}>
                        {
                            links.map((link, index) => (
                                <Typography key={index} component="li" variant='body1' fontWeight={700} color={path.endsWith(link.uri) ? "#F80" : "ButtonText"}>
                                    <Link href={link.uri} title={link.label} style={{ textDecoration: "none", color: "inherit" }}>{link.label}</Link>
                                </Typography>
                            ))
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

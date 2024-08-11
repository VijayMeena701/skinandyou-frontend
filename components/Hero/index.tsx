"use client"
import * as React from 'react';
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Form from "@/components/Form";


// mui components here

import Box from "@mui/material/Box";
import { IconButton, Typography } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
// import FacebookIcon from '@mui/icons-material/Facebook';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Hero = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [emblaRef, emblaAPI] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: true, inViewThreshold: 0.7 }, [Autoplay({ delay: 3000 })]);

    const scrollPrev = React.useCallback(() => {
        if (emblaAPI) emblaAPI.scrollPrev();
    }, [emblaAPI]);
    const scrollNext = React.useCallback(() => {
        if (emblaAPI) emblaAPI.scrollNext();
    }, [emblaAPI]);

    const handleFormOpen = () => setOpen(true);

    const handleFormClose = () => setOpen(false);


    return (
        <Box component="section" id="home-hero" sx={{ width: "100vw", position: "relative", height: "calc(100dvh - 96px)" }}>
            <Box sx={{ display: { xs: "none", md: "block", position: "absolute", top: "50%", transform: "translateY(-50%)", left: 8, zIndex: 1 } }}>
                <IconButton onClick={scrollPrev} aria-label='previous-slide'>
                    <ArrowBackIosNewIcon sx={{ color: "#F80", fontWeight: 700 }} />
                </IconButton>
            </Box>
            <Box ref={emblaRef} sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
                <Box sx={{ display: "flex", height: "100%" }}>
                    {
                        [1, 2, 3, 4].map((item, index) => (
                            <Box key={index} sx={{ position: "relative", display: "flex", flex: "none", flexWrap: "wrap", width: "100%", height: "100%" }}>
                                <Image alt={`hero-image-${index}`} priority src="https://www.skinandyou.in/wp-content/themes/skinandyou%203.0/images/botox.jpg" fill style={{ objectFit: "cover", objectPosition: "100%" }} />
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block", position: "absolute", top: "50%", transform: "translateY(-50%)", right: 8, zIndex: 1 } }}>
                <IconButton onClick={scrollNext} aria-label='next-slide'>
                    <ArrowForwardIosIcon sx={{ color: "#F80", fontWeight: 700 }} />
                </IconButton>
            </Box>
            <Box sx={{ position: "absolute", bottom: 0, left: 0, px: 4, py: 3 }}>
                <Box sx={{ display: "flex", flexFlow: "column", gap: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                        <FmdGoodIcon sx={{ fontSize: "2.5rem" }} />
                        <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>115 B Mittal Court,<br />Nariman Point, Mumbai 400 021</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                        <CallIcon sx={{ fontSize: "2.5rem" }} />
                        <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>+91 22 2284 3000 | +91 22 2282 5555</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box sx={{ bgcolor: "transparent", borderRadius: "50%", width: 32, height: 32, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                            <FacebookIcon sx={{ fontSize: "2.5rem", color: "black" }} />
                        </Box>
                        <Box sx={{ bgcolor: "#000", borderRadius: "50%", width: 32, height: 32, display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <InstagramIcon sx={{ color: "white" }} />
                        </Box>
                        <Box sx={{ bgcolor: "#000", borderRadius: "50%", width: 32, height: 32, display: "flex", justifyContent: "center", alignItems: "center", p: 0.5 }}>
                            <XIcon sx={{ color: "white" }} />
                        </Box>
                        <Box sx={{ bgcolor: "#000", borderRadius: "50%", width: 32, height: 32, display: "flex", justifyContent: "center", alignItems: "center", p: 0.5 }}>
                            <LinkedInIcon sx={{ color: "white" }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ position: "absolute", right: 150, bottom: 100 }}>
                <Box onClick={handleFormOpen} sx={{ bgcolor: "#FFF", border: "2px solid #F80", borderRadius: 100, px: 3, py: 0.5, cursor: "pointer" }}>
                    <Typography variant='h5' sx={{ fontWeight: 700, color: "#F80" }}>Book Appointment</Typography>
                </Box>
            </Box>
            <Form open={open} handleClose={handleFormClose} />
        </Box>
    )
}

export default Hero
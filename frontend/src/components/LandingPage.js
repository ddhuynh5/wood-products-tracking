import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Grid, Container } from '@mui/material';
import Header from "./Header";
import backgroundImage from '../assets/hero-background.jpg';
import easy from '../assets/easy.png';
import realtime from '../assets/realtime.png';
import sustain from '../assets/sustain.png';

export default function LandingPage() {
    return (
        <>
            <Header />
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    px: 2,
                }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                backgroundImage: `url(${backgroundImage})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                height: { xs: 200, sm: 300, md: 400 },
                                borderRadius: 2,
                                overflow: 'hidden',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ maxWidth: 600, ml: 10 }}>
                            <Typography variant="h2" component="h1" gutterBottom>
                                Welcome to CarbonTrack
                            </Typography>
                            <Typography variant="h5" component="p" gutterBottom>
                                The best way to keep track of your carbon credits and wood products
                            </Typography>
                            <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }} component={Link} to="/signup">
                                Get Started
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ py: 8, backgroundColor: 'grey.100' }}>
                <Typography variant="h3" component="h2" align="center" gutterBottom>
                    Why Choose CarbonTrack?
                </Typography>
                <Container sx={{ mt: 8 }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                                <img
                                    src={easy}
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        marginBottom: '1rem'
                                    }}
                                />
                                <Typography variant="h5" component="h3" gutterBottom>
                                    Simple to Use
                                </Typography>
                                <Typography variant="body1" component="p">
                                    Our platform is easy to navigate and designed to make tracking your carbon credits a breeze.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                                <img
                                    src={realtime}
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        marginBottom: '1rem'
                                    }}
                                />
                                <Typography variant="h5" component="h3" gutterBottom>
                                    Real-Time Updates
                                </Typography>
                                <Typography variant="body1" component="p">
                                    Our system updates in real-time so you can keep an eye on your carbon credit balance as you go.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                                <img
                                    src={sustain}
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        marginBottom: '1rem'
                                    }}
                                />
                                <Typography variant="h5" component="h3" gutterBottom>
                                    Sustainable Future
                                </Typography>
                                <Typography variant="body1" component="p">
                                    By using CarbonTrack, you're actively contributing to a more sustainable future.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ py: 8 }}>
                <Container>
                    <Typography variant="h3" component="h2" align="center" gutterBottom>
                        About Us
                    </Typography>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    Our Mission
                                </Typography>
                                <Typography variant="body1" component="p">
                                    Our mission is to help companies track their carbon credits and contribute to a sustainable future.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    Our Team
                                </Typography>
                                <Typography variant="body1" component="p">
                                    Our team is made up of experts in carbon credit tracking and sustainability, dedicated to making a positive impact.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ py: 8, backgroundColor: 'grey.100' }}>
                <Typography variant="h3" component="h2" align="center" gutterBottom>
                    Testimonials
                </Typography>
                <Container sx={{ mt: 8 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" component="p" gutterBottom>
                                    "CarbonTrack helped me streamline my carbon credit tracking process and save a lot of time. Highly recommended!"
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    - John Doe, CEO of TreeFarm
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" component="p" gutterBottom>
                                    "As a sustainability consultant, I have found CarbonTrack to be an invaluable tool for my clients. It makes tracking carbon credits a breeze!"
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    - Jane Smith, Sustainability Consultant
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" component="p" gutterBottom>
                                    "I love using CarbonTrack to track my carbon credits. The interface is user-friendly and the customer support team is always quick to respond to any questions I have."
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    - David Lee, Environmental Activist
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
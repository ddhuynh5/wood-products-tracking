import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';

import Header from './Header';
import SideDrawer from './SideDrawer';
import Map from './Map';
import { Title } from './reports/Title';

export default function Dashboard() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <SideDrawer />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: 'auto',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                                <React.Fragment>
                                    <Title>Tile</Title>
                                    {/* <Typography component="p" variant="h4">
                                        Placeholder
                                    </Typography> */}
                                </React.Fragment>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                                <React.Fragment>
                                    <Title>Tile</Title>
                                    {/* <Typography component="p" variant="h4">
                                        Placeholder
                                    </Typography> */}
                                </React.Fragment>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                                <React.Fragment>
                                    <Title>Tile</Title>
                                    {/* <Typography component="p" variant="h4">
                                        Placeholder
                                    </Typography> */}
                                </React.Fragment>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                                <React.Fragment>
                                    <Title>Tile</Title>
                                    {/* <Typography component="p" variant="h4">
                                        Placeholder
                                    </Typography> */}
                                </React.Fragment>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Map />
                </Container>
            </Box>
        </Box>
    );
}

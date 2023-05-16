import React, { useState } from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';

import Header from '../Header';
import SideDrawer from '../SideDrawer';
import Chart from './Chart';
import Balance from './Balance';
import Trucks from './Trucks';
import TreeTonsForm from './TreeTonsForm';

export default function Reports() {
    const [tons, setTons] = useState(false);

    function isTonsSet(data) {
        if (data) setTons(true);
    }

    return (
        <Box sx={{ display: 'flex' }}>
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
                }}
            >
                <Container maxWidth="lg" sx={{ mt: 10, mb: 5 }}>
                    <Grid container spacing={3}>
                        {/* Total tons input form */}
                        <Grid item xs={12}>
                            <h1>Total Green Tons</h1>
                            <TreeTonsForm isTonsSet={isTonsSet} />
                        </Grid>
                        {/* Chart */}
                        {tons &&
                            <>
                                <Grid item xs={12} md={8} lg={9}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: 240,
                                        }}
                                    >
                                        <Chart />
                                    </Paper>
                                </Grid>
                                {/* Balance */}
                                <Grid item xs={12} md={4} lg={3}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: 240,
                                        }}
                                    >
                                        <Balance />
                                    </Paper>
                                </Grid>
                                {/* Trucks */}
                                <Grid item xs={12}>
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                        <Trucks />
                                    </Paper>
                                </Grid>
                            </>
                        }
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
import { useState } from 'react';
import QRCode from 'react-qr-code';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


import Header from './Header';
import SideDrawer from './SideDrawer';

export default function QRCodeGen() {
    const [value, setValue] = useState();

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
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <div className="App">
                    <center>
                        <br />
                        <br />
                        <input
                            type="text"
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Value of Qr-code"
                        />
                        <br />
                        <br />
                        <br />
                        {value && (
                            <QRCode
                                title="QRCode"
                                value={value}
                            />
                        )}
                    </center>
                </div>
            </Box>
        </Box>
    );
}

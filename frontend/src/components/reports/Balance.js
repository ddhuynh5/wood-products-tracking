import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Title } from './Title';

function preventDefault(event) {
    event.preventDefault();
}

export default function Balance() {
    return (
        <React.Fragment>
            <Title>Current Carbon Credit Market Value</Title>
            <Typography component="p" variant="h4">
                $55
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                per metric ton
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View Carbon Credit Balance
                </Link>
            </div>
        </React.Fragment>
    );
}
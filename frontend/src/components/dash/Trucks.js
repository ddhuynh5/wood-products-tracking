import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Title, Subtitle } from './Title';

function createData(id, year, pine_pulp, chip_saw, sawtimber, hard_pulp, total_wp) {
    return { id, year, pine_pulp, chip_saw, sawtimber, hard_pulp, total_wp };
}

const rows = [
    createData(
        0,
        2017,
        5130.09,
        4537.53,
        6758.61,
        0,
        16426.23
    ),
    createData(
        1,
        2018,
        14373.39,
        3174.68,
        9974.54,
        1897.88,
        29420.49
    ),
    createData(
        2,
        2019,
        3855.83,
        1998,
        2373.74,
        0,
        8227.72
    ),
    createData(
        3,
        2020,
        14675.73,
        3531.16,
        10700.02,
        324.49,
        29231.40
    ),
    createData(
        4,
        2021,
        7596.018,
        428.97,
        8736.524,
        185.35,
        16946.862
    ),
    createData(
        5,
        2022,
        6049.78,
        1124.87,
        15158.48,
        136.04,
        22469.17
    ),
];

function preventDefault(event) {
    event.preventDefault();
}

export default function Trucks() {
    return (
        <React.Fragment>
            <Title>Total Tons Harvested by Year and by Product</Title>
            {/*  <Subtitle>
                Trucks
            </Subtitle> */}
            <caption>Green: Pine | Orange: Hardwood</caption>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Year</TableCell>
                        <TableCell style={{ color: "green" }}>Pulpwood</TableCell>
                        <TableCell style={{ color: "green" }}>Chip & Saw</TableCell>
                        <TableCell style={{ color: "green" }}>Sawtimber</TableCell>
                        <TableCell style={{ color: "orange" }}>Pulpwood</TableCell>
                        <TableCell align="right">Total Wood Products</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.year}</TableCell>
                            <TableCell style={{ color: "green" }}>{row.pine_pulp}</TableCell>
                            <TableCell style={{ color: "green" }}>{row.chip_saw}</TableCell>
                            <TableCell style={{ color: "green" }}>{row.sawtimber}</TableCell>
                            <TableCell style={{ color: "orange" }}>{row.hard_pulp}</TableCell>
                            <TableCell align="right">{row.total_wp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table >
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more Trucks
            </Link>
        </React.Fragment >
    );
}
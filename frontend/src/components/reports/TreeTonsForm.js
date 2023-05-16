import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function TreeTonsForm(props) {
    const [tonsValue, setTonsValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.isTonsSet(tonsValue); // pass back to parent (Reports.js)
    };

    const handleChange = (event) => {
        setTonsValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box mb={2}>
                <TextField
                    label="Enter tons Amount Here"
                    variant="outlined"
                    value={tonsValue}
                    onChange={handleChange}
                    fullWidth
                    type="number"
                    inputProps={{ min: 0 }} // Optionally set a minimum value
                    required
                />
            </Box>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

import React from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
} from '@mui/material';
import Header from './Header';

const ContactUs = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // Handle form submission here
    };

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
                <Box sx={{ maxWidth: 600 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={6}
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ContactUs;

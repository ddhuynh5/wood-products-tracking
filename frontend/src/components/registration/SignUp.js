import React, { useState } from 'react';
import { Link as RLink } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
/* import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; */
import { Box, Button, Grid, Link, Select, MenuItem, InputLabel } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { signup } from './Authentication';

const theme = createTheme();

export default function SignUp() {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: '',
        zip: '',
        role: '',
        carbonProjectId: '',
        woodQuality: '',
        species: '',
        year: '',
        harvest: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    const handleDate = (date) => {
        const dateObject = new Date(date.$d);
        const year = dateObject.getFullYear().toString();
        const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
        const day = dateObject.getDate().toString().padStart(2, "0");

        const formatted = `${year}-${month}-${day}`;
        console.log(formatted)

        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            year: formatted
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);

        try {
            const response = await signup(formValues);

            if (response) {
                toast.success("Welcome to WPT!");
                window.location = "/dash";
            }
        }
        catch (error) {
            const { "Duplicate Error": msg } = error;
            toast.error(msg);
        }
    };

    const isFieldEmpty = (fieldName) => {
        if (fieldName === "carbonProjectId" && formValues.role === "Landowner") {
            return isSubmitted && formValues[fieldName] === "";
        }
        return false;
    };

    const isFormValid = () => {
        if (formValues.role === "") {
            return false;
        }
        if (formValues.role === "Landowner") {
            return Object.values(formValues).every((value) => value !== "");
        }
        return true;
    };

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={formValues.firstName}
                                    onChange={handleChange}
                                    error={isFieldEmpty('firstName')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={formValues.lastName}
                                    onChange={handleChange}
                                    error={isFieldEmpty('lastName')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    error={isFieldEmpty('email')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    error={isFieldEmpty('password')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="city"
                                    label="City"
                                    type="city"
                                    id="city"
                                    autoComplete="city"
                                    value={formValues.city}
                                    onChange={handleChange}
                                    error={isFieldEmpty('city')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="zip"
                                    label="Zip"
                                    type="zip"
                                    id="zip"
                                    autoComplete="zip-code"
                                    value={formValues.zip}
                                    onChange={handleChange}
                                    error={isFieldEmpty('zip')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="role">Select a Role</InputLabel>
                                <Select
                                    fullWidth
                                    name="role"
                                    labelId="role"
                                    value={formValues.role}
                                    onChange={handleChange}
                                    error={isFieldEmpty('role')}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Landowner">Landowner</MenuItem>
                                    <MenuItem value="Mill">Mill</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                            </Grid>
                            {formValues["role"] == 'Landowner' && (
                                <>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="carbonProjectId"
                                            label="Carbon Project Id Number"
                                            type="text"
                                            id="carbonProjectId"
                                            autoComplete="carbonProjectId"
                                            value={formValues.carbonProjectId}
                                            onChange={handleChange}
                                            error={isFieldEmpty('carbonProjectId')}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="woodQuality"
                                            label="Wood Quality"
                                            type="text"
                                            id="woodQuality"
                                            autoComplete="woodQuality"
                                            value={formValues.woodQuality}
                                            onChange={handleChange}
                                            error={isFieldEmpty('woodQuality')}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="species"
                                            label="Species of Wood"
                                            type="text"
                                            id="species"
                                            autoComplete="species"
                                            value={formValues.species}
                                            onChange={handleChange}
                                            error={isFieldEmpty('species')}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                name="year"
                                                label="Year of Harvest"
                                                id="year"
                                                autoComplete="year"
                                                value={formValues.year}
                                                onChange={handleDate}
                                                dateFormat="dd/MM/yyyy"
                                                error={isFieldEmpty('year')}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="harvest"
                                            label="Harvest Location"
                                            type="text"
                                            id="harvest"
                                            autoComplete="harvest"
                                            value={formValues.harvest}
                                            onChange={handleChange}
                                            error={isFieldEmpty('harvest')}
                                        />
                                    </Grid>
                                </>
                            )}

                            {/* <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive updates via email."
                                />
                            </Grid> */}

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={!isFormValid()}
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" component={RLink} to="/signin">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

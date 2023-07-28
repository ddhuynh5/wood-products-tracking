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
        forestType: '',
        productType: '',
        location: '',
        size: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
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
        if (formValues.role === "Landowner") {
            return isSubmitted && formValues[fieldName] === "";
        }
        return false;
    };

    const isFormValid = () => {
        if (formValues.role === "") {
            return false;
        }

        if (formValues.role === "Landowner") {
            const valuesToValidate = Object.keys(formValues)
                .filter((key) => key !== "productType" && key !== "carbonProjectId")
                .map((key) => formValues[key]);

            return valuesToValidate.every((value) => value !== "");
        } else if (formValues.role === "Mill") {
            const valuesToValidate = Object.keys(formValues)
                .filter((key) => key !== "forestType" && key !== "size" && key !== "carbonProjectId")
                .map((key) => formValues[key]);

            return valuesToValidate.every((value) => value !== "");
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
                                    <MenuItem value="Landowner">Landowner</MenuItem>
                                    <MenuItem value="Mill">Mill</MenuItem>
                                </Select>
                            </Grid>
                            {formValues["role"] === "Landowner" && (
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
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="forestType"
                                            label="Forest Type"
                                            type="text"
                                            id="forestType"
                                            autoComplete="forestType"
                                            value={formValues.forestType}
                                            onChange={handleChange}
                                            error={isFieldEmpty('forestType')}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="location"
                                            label="Location"
                                            type="text"
                                            id="location"
                                            autoComplete="location"
                                            value={formValues.location}
                                            onChange={handleChange}
                                            error={isFieldEmpty('location')}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="size"
                                            label="Land Size"
                                            type="text"
                                            id="size"
                                            autoComplete="size"
                                            value={formValues.size}
                                            onChange={handleChange}
                                            error={isFieldEmpty('size')}
                                        />
                                    </Grid>
                                </>
                            )}

                            {formValues["role"] === "Mill" && (
                                <>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="location"
                                            label="Location"
                                            type="text"
                                            id="location"
                                            autoComplete="location"
                                            value={formValues.location}
                                            onChange={handleChange}
                                            error={isFieldEmpty('location')}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="productType"
                                            label="Product Type"
                                            type="text"
                                            id="productType"
                                            autoComplete="productType"
                                            value={formValues.productType}
                                            onChange={handleChange}
                                            error={isFieldEmpty('productType')}
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

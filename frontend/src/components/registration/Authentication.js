import axios from 'axios';

export const signup = async ({
    firstName,
    lastName,
    role,
    email,
    password,
    city,
    zip,
    carbonProjectId
}) => {
    try {
        const response = await axios.post('http://localhost:8000/signup', {
            firstName,
            lastName,
            role,
            email,
            password,
            city,
            zip,
            carbonProjectId
        })
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            throw error.response.data;
        } else {
            throw new Error("An error occurred during registration.");
        }
    }
};


export const login = async ({ email, password }) => {
    try {
        const response = await axios.post('http://localhost:8000/login', {
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        if (error.response && (error.response.status === 400 || error.response.status === 401)) {
            throw error.response.data;
        } else {
            throw new Error("An error occurred while logging in.");
        }
    }
};

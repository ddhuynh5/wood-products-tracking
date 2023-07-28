import axios from 'axios';

export const signup = async ({
    firstName,
    lastName,
    role,
    email,
    password,
    city,
    zip,
    carbonProjectId,
    forestType,
    productType,
    size,
    location
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
            carbonProjectId: carbonProjectId ? carbonProjectId : 0,
            forestType,
            productType,
            size,
            location
        });

        sessionStorage.setItem("email", email);
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("lastName", lastName);
        sessionStorage.setItem("roleId", role);

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

        sessionStorage.setItem("email", email);
        sessionStorage.setItem("firstName", response.data[0].fields.first_name);
        sessionStorage.setItem("lastName", response.data[0].fields.last_name);
        sessionStorage.setItem("roleId", response.data[0].fields.role_id);

        return response.data;
    } catch (error) {
        if (error.response && (error.response.status === 400 || error.response.status === 401)) {
            throw error.response.data;
        } else {
            throw new Error("An error occurred while logging in.");
        }
    }
};

export const logout = () => {
    // Since we currently aren't at a place to store login session states, etc., just remove session stores for now

    sessionStorage.clear();
};

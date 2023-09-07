export const signUpUserService = async ({
    firstName,
    lastName,
    email,
    password,
}) => {
    const response = await fetch(`http://localhost:8000/users/register`, {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
};

export const logInUserService = async ({ email, password }) => {
    const response = await fetch(`http://localhost:8000/users/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
    return json.data;
};

export const getMyDataService = async (token) => {
    const response = await fetch(`http://localhost:8000/users`, {
        headers: {
            Authorization: token,
        },
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
    return json.data;
};

export const getAllCompaniesService = async () => {
    const response = await fetch(`http://localhost:8000/companies`);

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const getSingleCompanyService = async (companyId) => {
    const response = await fetch(
        `http://localhost:8000/companies/${companyId}`
    );

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
    return json.data;
};

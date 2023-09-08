const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const signUpUserService = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  const response = await fetch(`${backendUrl}/users/register`, {
    method: "POST",
    body: JSON.stringify({ firstName, lastName, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${backendUrl}/users/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getMyDataService = async (token) => {
  const response = await fetch(`${backendUrl}/users`, {
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
  const response = await fetch(`${backendUrl}/companies`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getSingleCompanyService = async (companyId) => {
  const response = await fetch(`${backendUrl}/companies/${companyId}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

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

export const getAllCompaniesService = async (keyword) => {
  let url = `${backendUrl}/companies`;

  if (keyword) {
    url += `/?keyword=${keyword}`;
  }

  const response = await fetch(url);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

/*export const getAllCompaniesFilteredService = async (keyword) => {
  const response = await fetch(`${backendUrl}/companies/?keyword=${keyword}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};*/

export const getSingleCompanyService = async (companyId) => {
  const response = await fetch(`${backendUrl}/companies/${companyId}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getCompanyRatingsService = async (companyId) => {
  const response = await fetch(`${backendUrl}/ratings/companies/${companyId}`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const createCompanyService = async (data, token) => {
  const response = await fetch(`${backendUrl}/companies`, {
    method: "POST",
    body: data,
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

export const editMyDataService = async (data, token) => {
  const response = await fetch(`${backendUrl}/users/profile`, {
    method: "PUT",
    body: data,
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

export const editMyCompanyDataService = async (data, token, id) => {
  const response = await fetch(`${backendUrl}/companies/profile/${id}`, {
    method: "PUT",
    body: data,
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

export const getUserRatingsService = async (userId) => {
  const response = await fetch(`${backendUrl}/ratings/employees/${userId}`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const editEmailService = async (data, token) => {
  const response = await fetch(`${backendUrl}/users/email`, {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const editPasswordService = async (data, token) => {
  const response = await fetch(`${backendUrl}/users/password`, {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

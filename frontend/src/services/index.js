export const signUpUserService = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  const response = await fetch(`http://localhost:8000/users/register`, {
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

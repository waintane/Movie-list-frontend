import { API } from "../../core/config";

export default async function FetchAuthSignup(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  try {
    const response = await fetch(`${API}/auth/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    return false;
  }
}

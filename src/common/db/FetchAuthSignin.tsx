import { API } from "../../core/config";

export default async function FetchAuthSignin(email: string, password: string) {
  try {
    const response = await fetch(`${API}/auth/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    return false;
  }
}

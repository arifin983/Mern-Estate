export const userSignUp = async (credential) => {
  const { userName, email, password } = credential;
  const res = await fetch("/api/auth/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, email, password }),
  });
  const result = await res.json();
  if(!res.ok){
    throw({
      statusCode:result.statusCode,
      message:result.message
    })
  }
  return result;
};
export const userSignIn = async (credential) => {
  const { email, password } = credential;
  const res = await fetch("/api/auth/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await res.json();
  if(!res.ok){
    throw({
      statusCode:result.statusCode,
      message:result.message
    })
  }
  return result;
};

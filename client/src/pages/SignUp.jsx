import React from "react";
import {
  Link,
  Form,
  useNavigation,
  redirect,
  useActionData,
} from "react-router-dom";
import { userSignUp } from "../api";
import OAuth from "../components/OAuth";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const userName = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const signUpUser = await userSignUp({ userName, email, password });
    return redirect("/sign-in");
  } catch (error) {
    return error;
  }
};
const SignUp = () => {
  const navigation = useNavigation();
  const error = useActionData();
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold  my-7">Sign Up</h1>
      <Form replace method="post" className="flex flex-col gap-4">
        <input
          name="username"
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
        />
        <button
          disabled={navigation.state === "submitting"}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {navigation.state === "submitting" ? "Signing" : "Sign Up"}
        </button>
        <OAuth/>
      </Form>
      {error && (
        <div>
          <p className="text-red-500 mt-5">{error.message}</p>
          <p>status:{error.statusCode}</p>
        </div>
      )}
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

import React from 'react'
import {
  Link,
  Form,
  useNavigation,
  redirect,
  useActionData,
 
} from "react-router-dom";
import { userSignIn} from "../api";
import store from '../store';
import { userAction } from '../store/user/userSlice';
import OAuth from '../components/OAuth';
export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const signInUser = await userSignIn({email, password });
    store.dispatch(userAction.getUser(signInUser))
    return redirect("/");
  } catch (error) {
    return error;
  }
};
const SignIn = () => {
  const navigation = useNavigation();
  const error = useActionData();
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold  my-7">Sign In</h1>
      <Form method="post" className="flex flex-col gap-4">
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
          {navigation.state === "submitting" ? "Signing" : "Sign In"}
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
        <p>Dont account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
    </div>
  );
}

export default SignIn
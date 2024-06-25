import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import SignUp, { action as signUpAction } from "./pages/SignUp";
import SignIn, { action as signInAction } from "./pages/SignIn";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from "./components/Header";
import Layout from "./components/Layout";
import PrivateComponent from "./components/PrivateComponent";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="sign-up" element={<SignUp />} action={signUpAction} />
      <Route path="sign-in" element={<SignIn />} action={signInAction} />
      <Route path="search" element={<Search/>}/>
      <Route path="listing/:listingId" element={<Listing/>}/>
      <Route element={<PrivateComponent />}>
        <Route path="profile" element={<Profile />} />
        <Route path="create-listing" element={<CreateListing />} />
        <Route path="update-listing/:listingId" element={<UpdateListing />} />
      </Route>

      <Route path="about" element={<About />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

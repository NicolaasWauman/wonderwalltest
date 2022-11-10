import React from "react";
import Header from "./components/header";

import Footer from "./components/footer";
import LoginForm from "./components/login/loginForm";
import SignupForm from "./components/login/signupForm";
import Home from "./components/home";
import PapersOverview from "./components/papersOverview";
import PaperBig from "./components/paperBig";
import NewPaper from "./components/admin/newPaper";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Meteor, currentUser } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

export const App = (props) => {
  const user = useTracker(() => Meteor.user()); // this will track de current user logged in

  const logout = () => Meteor.logout();

  return (
    <div>
      <Router>
        <Header user={user} logout={logout} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="papers" element={<PapersOverview />} />
          <Route path="papers/:id" element={<PaperBig />} />

          <Route path="signin" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="paperspaper" element={<NewPaper />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};

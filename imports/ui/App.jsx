import React from "react";
import Header from "./components/header";
// import Header2 from "./components/header2";
import Footer from "./components/footer";
import Main from "./components/main";
import PapersOverview from "./components/papersOverview";
import Paper from "./components/paper";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const log = () => {
  console.log("hello");
};

export const App = (props) => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Main log={log} />} />
          <Route path="papers" element={<PapersOverview />} />
          <Route path="papers/:id" element={<Paper />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import LeftNavBar from "./Components/Navigation/SideNav/SideNav";
import TopNavBar from "./Components/Navigation/TopNav/TopNav";
import { SectionRight } from "./Styles/styles";

export default function Error() {
  return (
    <>
      <LeftNavBar />
      <SectionRight>
        <TopNavBar />
        <h1>
          404 Page not Found <Link to="/"> Go To Home</Link>{" "}
        </h1>
      </SectionRight>
    </>
  );
}

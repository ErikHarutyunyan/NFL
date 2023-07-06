import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import { HomeWrap } from "./Home.styles";
import homeLogo from "../../assets/img/logoBig.png";

const Home = () => {
  return (
    <HomeWrap>
      <img src={homeLogo} alt="logo" />
      <h1>NFL Mock Draft Simulator</h1>
      <p>
        Mock draft against fan picks for all 32 teams. See players move up and
        down team specific player boards. Try your mock drafts here, this is not
        your linear mock draft simulator
      </p>
      <Link to="/select-draft">
        <Button btnClassName="start-draft" btnText={"Start a mock draft"} />
      </Link>
    </HomeWrap>
  );
};

export default Home;

import React from 'react'
import { Link } from 'react-router-dom';
// images
import img404 from "../../assets/img/404.png"
// styles
import { Wrapper } from "./NotFoundPage.styles";
const NotFound = () => {
  return (
    <Wrapper>
      <div>
        <img src={img404} alt="404" />
        <p>SORRY! PAGE NOT FOUNT</p>
        <Link to={'/'} >Go to Homepage</Link>
      </div>
    </Wrapper>
  );
}

export default NotFound
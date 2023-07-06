import React from 'react'
// Styles
import { BannerContent, BannerWrap } from './Banner.styles';
// Image
import nflLogo from "../../assets/img/logo.png";

const Banner = () => {
  return (
    <BannerWrap>
      <BannerContent>
        <h2>NFL DRAFT 2023</h2>
        <img src={nflLogo} alt="Logo" />
      </BannerContent>
    </BannerWrap>
  );
}

export default Banner
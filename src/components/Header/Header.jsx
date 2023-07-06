import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Navbar from "./Navbar";
import Button from "../Buttons/Button";
// Styles
import { BtnWrap, HeaderBody, HeaderInner, HeaderWrap, ProfileInfo } from './Header.styles';
// Img
import mainLogo from '../../assets/img/logo.png';
import profileImg from "../../assets/img/profile.png"
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../app/features/user/userSlice';



function Header() {
    const {userInfo} = useSelector(selectUser)
    const dispatch = useDispatch()
   
    return (
      <HeaderWrap>
        <div className="main-container">
          <HeaderInner>
            <div>
              <Link to="/">
                <img src={mainLogo} alt="logo" />
              </Link>
            </div>
            <HeaderBody>
              <Navbar />
              <BtnWrap>
                {!userInfo ? (
                  <>
                    <Link to="/sign-in">
                      <Button btnClassName={"sign-in"} btnText="Sign In" />
                    </Link>
                    <Link to="/sign-up">
                      <Button btnText="Sign Up" />
                    </Link>
                  </>
                ) : (
                  <>
                    <ProfileInfo>
                      <Link to={"/profile"}>
                        <img
                          src={profileImg}
                          alt="profile"
                          width={22}
                          height={22}
                        />
                        {userInfo?.first_name && (
                          <p>Hi, {userInfo?.first_name}</p>
                        )}
                      </Link>
                      <Button
                        btnText="Logout"
                        onBtnClick={() => {
                          dispatch(logout());
                        }}
                      />
                    </ProfileInfo>
                  </>
                )}
              </BtnWrap>
            </HeaderBody>
          </HeaderInner>
        </div>
      </HeaderWrap>
    );
}

export default Header;
import React, { useEffect } from 'react'
// Styles
import { ChooseSubs, Container, SelectEvent, Wrapper } from "./DraftEvents.styles";
import { ProfileTitle } from '../Profile.styles';

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { PROFILE_DRAFT_EVENTS, PROFILE_SUBSCRIPTION,  } from '../../../router/route-path';
import TokenService from '../../../service/token.service';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../app/features/user/userSlice';
import { useDispatch } from 'react-redux';
import { getUserMe } from '../../../app/features/user/userActions';
import { useLayoutEffect } from 'react';
const DraftEvents = () => {
  // const [createDrafts, setCreateDrafts] = useState(true);
  const {pathname} = useLocation()
  const { userInfo } = useSelector(selectUser);

  const dispatch = useDispatch();
  useLayoutEffect(()=> {
    dispatch(getUserMe());
  },[])
 
  const navigation = useNavigate()
  

  const handleNavigation = (path) => {
    navigation(`${PROFILE_DRAFT_EVENTS}/${path}`);
  }
  return (
    <>
      {userInfo?.user_subscription ? (
        <Wrapper>
          <ProfileTitle>Badges</ProfileTitle>
          <SelectEvent>
            <button
              className={pathname.includes("create") ? "active" : null}
              onClick={() => handleNavigation("create")}
            >
              Create draft
            </button>

            <button
              className={pathname.includes("my-draft") ? "active" : null}
              onClick={() => handleNavigation("my-draft")}
            >
              My draft
            </button>
          </SelectEvent>
          <Container>
            <Outlet />
          </Container>
        </Wrapper>
      ) : (
        <>
          <ChooseSubs>
            <h2>Choose Subscription</h2>
            <button onClick={() => navigation(PROFILE_SUBSCRIPTION)}>
              Go to Subscription
            </button>
          </ChooseSubs>
        </>
      )}
    </>
  );
}

export default DraftEvents
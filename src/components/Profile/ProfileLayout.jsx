import React from 'react'
import { Link, Outlet, useLocation,} from 'react-router-dom'
import { links } from './dataProfileNav'
import { ProfileList, ProfileLists, ProfileNav, ProfileWrapper } from './Profile.styles';

const ProfileLayout = () => {
  let {pathname} = useLocation();

  return (
    <ProfileWrapper >
      <ProfileNav>
        <ProfileLists>
          {links.map((item) => {
            return (
              <ProfileList
                key={item.id}
                className={pathname === item.url ? "active" : ""}
              >
                <Link
                  to={item.url}
                  className={pathname === item.url ? "active" : ""}
                >
                  <>{item.icon}</>
                  <span>{item.text}</span>
                </Link>
              </ProfileList>
            );
          })}
        </ProfileLists>
      </ProfileNav>
      <article>
        <Outlet />
      </article>
    </ProfileWrapper>
  );
};

export default ProfileLayout;
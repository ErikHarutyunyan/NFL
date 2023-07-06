import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserMe } from "../../../app/features/user/userActions";
import { selectUser } from "../../../app/features/user/userSlice";
import BadgesIcon from "../../BadgesIcon/BadgesIcon";
import { ProfileDesc, ProfileTitle } from "../Profile.styles";
import { BadgesCont, BadgesItems, BadgesWrap } from "./Badges.styles";

const Badges = () => {
  const {
    userInfo: { bpa_badges=0, fanatic_mode=2, fanatic_badges=0,trade_up=0,trade_down=0 },
  } = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserMe());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ProfileTitle>Badges</ProfileTitle>
      <BadgesWrap>
        <BadgesCont>
          <ProfileDesc>Existing Badges</ProfileDesc>
          <BadgesItems>
            <BadgesIcon badge="bpa_badges" count={1} />
            <BadgesIcon badge="fanatic" count={1} />
            <BadgesIcon badge="fanatic_mode_3" count={1} />
            <BadgesIcon badge="fanatic_mode_2" count={1} />
            <BadgesIcon badge="fanatic_mode_1" count={1} />
            <BadgesIcon badge="trade_up" count={1} />
            <BadgesIcon badge="trade_down" count={1} />
          </BadgesItems>
        </BadgesCont>
        <BadgesCont>
          <ProfileDesc>My Badges</ProfileDesc>
          <BadgesItems>
            <BadgesIcon badge="bpa_badges" count={bpa_badges} />
            <BadgesIcon badge="fanatic" count={fanatic_badges} />
            {fanatic_mode > 0
              ? [...Array(fanatic_mode)].map((_, idx) => {
                  return (
                    <BadgesIcon
                      key={idx}
                      badge={`fanatic_mode_${idx + 1}`}
                      count={1}
                    />
                  );
                })
              : null}
            <BadgesIcon badge="trade_up" count={trade_up} />
            <BadgesIcon badge="trade_down" count={trade_down} />
          </BadgesItems>
        </BadgesCont>
      </BadgesWrap>
    </>
  );
};

export default Badges;

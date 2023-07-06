import React from "react";
import { BadgesWrap } from "./BadgesIcon.styles";
import { dataBadges } from "./dataBadges";
const BadgesIcon = ({badge= "",count = 0,width} ) => {

  return (
    <>
      {[...Array(count)].map((_,idx) => {
        return (
          <React.Fragment key={idx}>
            <BadgesWrap width={width}>
              <img src={dataBadges[`${badge}`]} alt={badge} />
            </BadgesWrap>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default BadgesIcon;

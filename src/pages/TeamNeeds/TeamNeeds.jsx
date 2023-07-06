import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import {
  AccordionWrapper,
  ImgWrap,
  PlayerList,
  TeamInfo,
  TeamPosition,
  TeamPositionItem,
  TeamSummary,
  Wrapper,
} from "./TeamNeeds.styles";
import { MdKeyboardArrowUp } from "react-icons/md";
import HalfCircleChart from "../../components/HalfCircleChart/HalfCircleChart";
import DraftPicks from "../../components/DraftPicks/DraftPicks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTeamNeeds,
  resTeamNeeds,
  selectTeamNeeds,
} from "../../app/features/teamNeeds/teamNeedsSlice";
import { searchInfo } from "../../utils/utils";
import { TEAM_NEEDS } from "../../utils/constants";
import Spinner from "../../components/Spinner/Spinner";
import { PlayerListIcon } from "../../components/Icons/Icons";
import { getTeams, getTradeValue } from "../../app/features/draftConfig/drafConfigAction";
import {
  selectDraftConfig,
} from "../../app/features/draftConfig/draftConfigSlice";
const TeamNeeds = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const { teamNeeds,loading } = useSelector(selectTeamNeeds);
  const { teams, tradeValue } = useSelector(selectDraftConfig);

  const initial = useRef(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      dispatch(getTeams());
      dispatch(getTeamNeeds());
      dispatch(getTradeValue(7));
    }
    // return () => dispatch(resTeamNeeds())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleNavigation = (query,team) => {
    navigate(query, { state: team });
  }

  if (!tradeValue.mouthing) {
    return <Spinner />;
  }
  return (
    <Wrapper className="main-container">
      <Title titleText="Team Needs" />
      {teams.length && tradeValue.mouthing
        ? teams.map((team, idx) => {
            const teamInfo = searchInfo(TEAM_NEEDS, team, (item) => item.name);
            const teamNeedsInfo = teamNeeds.find(
              (item) => item.round.index === team.index
            ).team_neads_info;

            const positions = teamNeedsInfo
              .map((item) => item.positions)
              .flat();

            const pickInfo = [];
            
            tradeValue.results.forEach((item) => {
              if (item.round.index === team.index) {
                if (pickInfo[`R${item.round_index_number}`]) {
                  pickInfo[`R${item.round_index_number}`].push(item.index);
                } else {
                  pickInfo[`R${item.round_index_number}`] = [item.index];
                }
              }
            });
        

            return (
              <AccordionWrapper key={idx}>
                <Accordion
                  expanded={expanded === `panel${idx}`}
                  onChange={handleChange(`panel${idx}`)}
                  sx={{ margin: 0 }}
                >
                  <AccordionSummary
                    expandIcon={
                      <MdKeyboardArrowUp
                        style={{
                          fontSize: "30px",
                          boxShadow: "none",
                          backgroundColor: "white",
                        }}
                      />
                    }
                    aria-controls={`panel${idx}bh-content`}
                    id={`panel${idx}bh-header`}
                    sx={{
                      padding: "0 20px 0 0",
                      margin: 0,
                      backgroundColor: "white",
                      marginTop: "2px",
                      "& .MuiAccordionSummary-content": {
                        margin: "0 !important",
                      },
                    }}
                  >
                    <TeamSummary>
                      <TeamInfo bgColor={teamInfo[0]?.color}>
                        <div className="tema-info-name">
                          <p className="tema-info-name-loc">
                            {teamInfo[0]?.loc}
                          </p>
                          <p className="tema-info-name-need">Needs</p>
                        </div>
                        <ImgWrap>
                          <img src={team?.logo} alt={team?.name} />
                          <p>{team?.name}</p>
                        </ImgWrap>
                      </TeamInfo>

                      <TeamPosition>
                        {positions.map((position, idx) => {
                          return (
                            <React.Fragment key={idx}>
                              {idx < 5 ? (
                                <TeamPositionItem primary key={position.id}>
                                  {position.name}
                                </TeamPositionItem>
                              ) : (
                                <TeamPositionItem key={position.id}>
                                  {position.name}
                                </TeamPositionItem>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </TeamPosition>
                    </TeamSummary>
                    <PlayerList
                      onClick={() =>
                        handleNavigation(`/team-list?list=${team?.name}`, {
                          name: team?.name,
                          logo: team?.logo,
                        })
                      }
                    >
                      <PlayerListIcon />
                      <p>Players list</p>
                    </PlayerList>
                  </AccordionSummary>
                  <AccordionDetails>
                    <DraftPicks
                      title={"2023 Pre-Draft Picks"}
                      dataRound={pickInfo}
                    />

                    <HalfCircleChart
                      infoTitle={
                        "With pick21in the 2023 NFL Draft, the most likely selection for the Arizona Cardinals will be..."
                      }
                    />
                  </AccordionDetails>
                </Accordion>
              </AccordionWrapper>
            );
          })
        : null}
    </Wrapper>
  );
};

export default TeamNeeds;

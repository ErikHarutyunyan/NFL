import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDraftResult } from "../../app/features/draftResult/draftResultSlice";
import * as htmlToImage from "html-to-image";
import { Link, useNavigate } from "react-router-dom";
// components
import Title from "../../components/Title/Title";
import Button from "../../components/Buttons/Button";
import MySelectImg from "../../components/MySelect/MySelectImg";

// img
import twitterBlue from "../../assets/img/twitter-blue.png";
import markaImg from "../../assets/img/marka.png";
import downlandImg from "../../assets/img/downlandImg.png";
import copyImg from "../../assets/img/copy.png";

// styles
import {
  ActionWrap,
  BadgesItems,
  DraftLogoTeam,
  DraftResultFooter,
  DraftResultFull,
  DraftResultHead,
  DraftResultPick,
  DraftResultPickFooter,
  DraftResultPickWrap,
  DraftResultPos,
  DraftResultRound,
  DraftResultRoundItem,
  DraftResultShare,
  DraftResultTeam,
  DraftResultTeamCol,
  DraftResultTeamItem,
  DraftResultWrap,
  DraftTeam,
  DraftTeamName,
  GradeBox,
  MockDraftWrap,
  MySelectWrap,
  TradesItem,
  TradesItems,
  TradesWrap,
  Wrapper,
} from "./DraftResult.styles";
import { dataURLtoBlob, loadImage } from "../../utils/utils";
import BadgesIcon from "../../components/BadgesIcon/BadgesIcon";
import { userUpdate } from "../../app/features/user/userActions";
import { selectUser } from "../../app/features/user/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "../../components/ErrorFallBack/ErrorFallBack";
import { selectTrades } from "../../app/features/trades/tradesSlice";
import { POSITIONS_COLOR, TEAM_NEEDS } from "../../utils/constants";
import Confetti from "react-confetti";

const DraftResult = () => {
  const [countGrade, setCountGrade] = useState(0)
  const domEl = useRef(null);
  const navigate = useNavigate();
  const [roundSelect, setRoundSelect] = useState(1);
  const [copyShow, setCopyShow] = useState(false);
  const {
    results,
    roundTeam,
    teamsName,
    teamsPlayer,
    bpa_badges,
    fanatic_mode,
  } = useSelector(selectDraftResult);

  const { historyTrades } = useSelector(selectTrades);

  const { userInfo } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [teamMain, setTeamMain] = useState(teamsName[0]);
  const [showConfetti, setShowConfetti] = useState(false);

  const teamSelect = useMemo(() => {
    return teamsPlayer[teamMain];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamMain]);

  function startConfetti() {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // 5000 milliseconds = 5 seconds
  }

  useEffect(() => {
    startConfetti();
  }, []);
  useEffect(() => {
    if (bpa_badges > 0 || fanatic_mode > 0) {
      const countBpa = userInfo?.bpa_badges + bpa_badges;
      const fanaticCount = fanatic_mode ? fanatic_mode : userInfo?.fanatic_mode;
      dispatch(
        userUpdate({ bpa_badges: countBpa, fanatic_mode: fanaticCount })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bpa_badges, fanatic_mode]);
  const teamTable = useMemo(() => {
    return results.filter(
      (res) => +res.round_index.split(" ")[1] === roundSelect
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roundSelect]);

  const onButtonClick = useCallback(() => {
    if (domEl.current === null) {
      return;
    }
    htmlToImage
      .toJpeg(domEl.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${teamSelect[0]?.round?.name}`;
        link.href = dataUrl;
        link.click();
        console.clear();
      })
      .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domEl]);

  const onCopyImage = useCallback(() => {
    if (domEl.current === null) {
      return;
    }
    setCopyShow(true);
    htmlToImage.toJpeg(domEl.current).then((dataUrl) => {
      loadImage(dataUrl)
        .then((png) => {
          const imgBlob = dataURLtoBlob(png);
          const { ClipboardItem } = window;
          try {
            navigator.clipboard.write([
              new ClipboardItem({
                "image/png": imgBlob,
              }),
            ]);
            setCopyShow(false);
            console.clear();
          } catch (error) {
            setCopyShow(false);
            console.clear();
            console.error(error);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [domEl]);

  const gradingCalc = (count) => {
    if (count === 1) {
      return { grade: "A+", color: "#3ADF00" };
    } else if (count >= 2 && count <= 8) {
      return { grade: "A", color: "#00950F" };
    } else if (count >= 9 && count <= 16) {
      return { grade: "B", color: "#002D85" };
    } else if (count >= 17 && count <= 33) {
      return { grade: "C", color: "#FFB800" };
    } else if (count >= 34) {
      return { grade: "D", color: "#e43c3c" };
    }
    
  };
  const gradingMiddle = (count) => {
    const bpaCount = teamSelect.reduce((acc, item) => acc + item?.player?.bpa, 0);
    const grading = gradingCalc(bpaCount);
    return (
      <>
        <GradeBox color={grading?.color}></GradeBox>
        <p>{grading?.grade}</p>
      </>
    );
  }
  const teamInfo = TEAM_NEEDS.filter(
    (item) => item.name === teamSelect[0]?.round?.name
  );


  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <Wrapper className="main-container">
        <Title
          titleText="Your Mock Draft Result  "
          titleClassName="draftResultTitle"
        />
        <DraftResultShare>
          <div className="share-draft-wrap">
            <div className="share-draft">
              <p>Share Your Mock Draft Result</p>
              <div>
                <img
                  src={twitterBlue}
                  onClick={() => window.open("https://twitter.com/share")}
                  alt="twitter"
                />
              </div>
            </div>
          </div>
          <Button
            btnText="Enter Draft"
            btnClassName="enter-draft-btn"
            onBtnClick={() => navigate("/draft-configuration")}
          />
        </DraftResultShare>
        <ActionWrap>
          <div className="downland-btn" onClick={onButtonClick}>
            <img src={downlandImg} alt="download" />
            <p>Download results image</p>
          </div>
          <div className="downland-copy" onClick={onCopyImage}>
            <img src={copyImg} alt="download" />
            <p>{copyShow ? "COPIED!" : "Copy Image"}</p>
          </div>
        </ActionWrap>
        <DraftResultFull>
          <DraftResultPick>
            <div ref={domEl}>
              <DraftResultHead>
                <MockDraftWrap>
                  {teamSelect && (
                    <DraftTeam>
                      <DraftLogoTeam backColor={teamInfo[0]?.color}>
                        <img
                          src={teamSelect[0]?.round?.logo}
                          alt={teamSelect[0]?.round?.name}
                        />
                      </DraftLogoTeam>
                      <DraftTeamName>
                        <h3>{teamSelect[0]?.round?.name} Mock Draft</h3>
                        <p>nfldraftfanatics.com</p>
                      </DraftTeamName>
                    </DraftTeam>
                  )}

                  <MySelectWrap>
                    <MySelectImg
                      name={teamMain}
                      dataValue={teamsName}
                      handleChange={(item) => {
                        setTeamMain(item.value);
                        setCountGrade(0);
                      }}
                      backgroundColor={"transparent"}
                    />
                  </MySelectWrap>
                </MockDraftWrap>
              </DraftResultHead>

              <DraftResultPickWrap backImg={markaImg}>
                {teamSelect &&
                  teamSelect?.map((team, idx) => {
                    const round = +team?.round_index?.split(" ")[1];
                    const grading = gradingCalc(team?.player?.bpa);
                    
                    return (
                      <React.Fragment key={idx}>
                        <div className="draft-result-pick-item">
                          <div className="draft-result-pick-item-info">
                            <div className="draft-result-pick-round">
                              <p>
                                R{round}:<span>{team?.index}</span>
                              </p>
                            </div>
                            <div className="draft-result-pick-adp">
                              <p>ADP</p>
                            </div>
                            <div className="draft-result-pick-logo">
                              <img
                                src={teamSelect[0]?.round?.logo}
                                alt={teamSelect[0]?.round?.name}
                              />
                              {team?.player?.school_ref?.logo && (
                                <img
                                  src={team?.player?.school_ref?.logo}
                                  alt={team?.player?.player}
                                />
                              )}
                            </div>
                            <div className="draft-result-pick-name">
                              <p>{team?.player?.player}</p>
                              <p>{team?.player?.school}</p>
                            </div>
                            <DraftResultPos
                              posColor={POSITIONS_COLOR[team?.player?.position]}
                              className="draft-result-pick-pos"
                            >
                              <p>{team?.player?.position}</p>
                            </DraftResultPos>

                            <div className="draft-result-pick-rating">
                              <p>Grade</p>
                              <div className="draft-result-pick-rating-item">
                                <GradeBox color={grading?.color}></GradeBox>
                                <p>{grading.grade}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
              </DraftResultPickWrap>
              <DraftResultPickFooter>
                <div className="draft-now">
                  Draft now at{" "}
                  <Link to={"nfl.com/mock"} target="_blank">
                    nfl.com/mock
                  </Link>
                </div>
                <div className="draft-overall">
                  <p>OVERALL DRAFT GRADE</p>
                  <div className="draft-overall-grade">
                    {gradingMiddle(countGrade)}
                
                  </div>
                </div>
              </DraftResultPickFooter>
            </div>
            <div>
              <BadgesItems>
                {bpa_badges ? (
                  <BadgesIcon
                    badge="bpa_badges"
                    count={bpa_badges}
                    width={"50px"}
                  />
                ) : null}
                {fanatic_mode ? (
                  <BadgesIcon
                    badge={`fanatic_mode_${fanatic_mode}`}
                    count={fanatic_mode}
                    width={"50px"}
                  />
                ) : null}
              </BadgesItems>
              {historyTrades &&
                historyTrades?.map((team) => {
                  if (team.myTeam.name === teamSelect[0]?.round?.name) {
                    return (
                      <TradesWrap>
                        <TradesItems>
                          <TradesItem>
                            <div>
                              <img src={team.mainTeam.logo} alt="" />
                            </div>
                            <div className="trades-player">
                              <h6>Player</h6>
                              <p>
                                <span>{team.mainTeam.player.position} </span>
                                {team.mainTeam.player.player}
                              </p>
                            </div>
                            <div className="trades-pick">
                              <h6>Pick</h6>
                              {team.mainTeam.pick?.map((pi) => {
                                return <span>{pi.index} </span>;
                              })}
                            </div>
                            <div className="trades-years">
                              <h6>2024</h6>
                              {team.mainTeam.pickYear?.map((pick) => {
                                return <span>{pick.round} </span>;
                              })}
                            </div>
                          </TradesItem>
                          <div class="line"></div>
                          <TradesItem>
                            <div>
                              <img src={team.myTeam.logo} alt="" />
                            </div>
                            <div className="trades-player">
                              <h6>Player</h6>
                              <p>
                                <span>{team.myTeam.player.position} </span>
                                {team.myTeam.player.player}
                              </p>
                            </div>
                            <div className="trades-pick">
                              <h6>Pick</h6>
                              {team.myTeam.pick?.map((pi) => {
                                return <span>{pi.index} </span>;
                              })}
                            </div>
                            <div className="trades-years">
                              <h6>2024</h6>
                              {team.myTeam.pickYear?.map((pick) => {
                                return <span>{pick.round} </span>;
                              })}
                            </div>
                          </TradesItem>
                        </TradesItems>
                      </TradesWrap>
                    );
                  }
                  return null;
                })}
              <DraftResultPickFooter>
                <div className="draft-now">
                  Draft now at{" "}
                  <Link to={"nfl.com/mock"} target="_blank">
                    nfl.com/mock
                  </Link>
                </div>
                <div className="draft-overall"></div>
              </DraftResultPickFooter>
            </div>
          </DraftResultPick>
          <DraftResultWrap>
            <DraftResultRound>
              {roundTeam?.map((item, idx) => {
                const roundText = item.split(" ");
                if (+roundText[1] === roundSelect) {
                  return (
                    <DraftResultRoundItem
                      active
                      onClick={() => setRoundSelect(+roundText[1])}
                      key={idx}
                    >
                      {item}
                    </DraftResultRoundItem>
                  );
                }
                return (
                  <DraftResultRoundItem
                    key={idx}
                    onClick={() => setRoundSelect(+roundText[1])}
                  >
                    {item}
                  </DraftResultRoundItem>
                );
              })}
            </DraftResultRound>
            <DraftResultTeam backImg={markaImg}>
              {teamTable.length &&
                teamTable.map((team, idx) => {
                  const grading = gradingCalc(team?.playerDepth);
                  return (
                    <DraftResultTeamItem key={idx}>
                      <DraftResultTeamCol
                        posColor={POSITIONS_COLOR[team?.player?.position]}
                      >
                        <div className="draft-result-team-round">
                          <p>
                            R{roundSelect}:<span>{team?.index}</span>
                          </p>
                        </div>
                        <div className="draft-result-team-adp">
                          <p>ADP</p>
                        </div>

                        <div className="draft-result-team-pos">
                          <p>{team?.player?.position}</p>
                        </div>

                        <div className="draft-result-team-rating">
                          <GradeBox color={grading?.color}></GradeBox>
                          <p>{grading?.grade}</p>
                        </div>
                      </DraftResultTeamCol>
                      <DraftResultTeamCol>
                        <div className="draft-result-team-log">
                          <img
                            src={team?.round?.logo}
                            alt={team?.round?.name}
                            width={65}
                          />
                          <p>{team?.player?.player}</p>
                          {/* <p>{team?.playerDepth}</p> */}
                        </div>
                        <div className="draft-result-team-college">
                          <p>{team?.player?.school}</p>
                        </div>
                      </DraftResultTeamCol>
                    </DraftResultTeamItem>
                  );
                })}
            </DraftResultTeam>
            <DraftResultFooter>www.DraftSimulator.co</DraftResultFooter>
          </DraftResultWrap>
        </DraftResultFull>
        {showConfetti && (
          <Confetti
            numberOfPieces={800}
            width={window.innerWidth - 200}
            height={window.innerHeight}
            recycle={false}
          />
        )}
      </Wrapper>
    </ErrorBoundary>
  );
};

export default DraftResult;

import React, { useEffect, useMemo, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTradeValue } from "../../app/features/draftConfig/drafConfigAction";
import {
  selectDraftConfig,
  setResetRound,
  // setStatus,
} from "../../app/features/draftConfig/draftConfigSlice";
import {
  selectDraftResult,
  setDraftResultAction,
} from "../../app/features/draftResult/draftResultSlice";
// import { getPositions } from '../../app/features/group/groupSlice'
import {
  getPlayersDraft,
  resPlayersDraft,
  selectPlayersDraft,
} from "../../app/features/playersDraft/playersDraftSlice";
import { setHistoryBoard } from "../../app/features/teamNeeds/teamNeedsSlice";
import { ReactComponent as CircleSvg } from "../../assets/svg/circle.svg";
import DraftPlayerChoose from "../../components/DraftPlayerChoose/DraftPlayerChoose";
import DraftSimulator from "../../components/DraftSimulator/DraftSimulator";
import DraftViewAsign from "../../components/DraftViewAsign/DraftViewAsign";
import ErrorFallBack from "../../components/ErrorFallBack/ErrorFallBack";
import Spinner from "../../components/Spinner/Spinner";
import ModalTrades from "../../components/ModalTrades/ModalTrades";
import { PLAYER_MAX } from "../../config/config";

// Styes
import {
  Wrapper,
  Banner,
  DraftView,
  DraftViewSimulator,
  RenderCircle,
} from "./DraftPlayer.styles";
import {
  getTrades,
  selectTrades,
  
} from "../../app/features/trades/tradesSlice";
import PlayersSelected from "../../components/PlayersSelected/PlayersSelected";

const DraftPlayer = () => {
  const {
    countRender,
    status,
    tradeValue,
    round,
    draftPlayers,
    teamSelect,
    teamPickIndex,
    teamPickIndexControl,
    draftRandomnessTeam,
    fanaticChallenge,
    draftCardDepth,
    fanaticIndexPosition,
    fanaticMode,
    iterationSection,
  } = useSelector(selectDraftConfig);

  const { tradesTeams, changeTrades } = useSelector(selectTrades);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playersDraft = useSelector(selectPlayersDraft);
  const draftResults = useSelector(selectDraftResult);

  const [thisId, setThisId] = useState(0);
  const [changeId, setChangeId] = useState(0);

  const count = useMemo(() => {
    if (tradeValue.mouthing) {
      return countRender + 1;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countRender, tradeValue.mouthing]);

  useEffect(() => {
   
    if (
      (tradeValue.mouthing && countRender < teamPickIndex[0]) ||
      countRender < fanaticIndexPosition[0] ||
      (tradeValue.mouthing &&
        !teamPickIndex.length &&
        countRender !== tradeValue.results.length)
    ) {
      let modalFlag = ((fanaticChallenge.length && !changeTrades) || fanaticMode) ? 1 : changeTrades
      if (modalFlag) {
        const team = tradeValue.results[countRender];
        
        const teamName = team.round.name;
        const teamPosition = team["index_position"] ?? 0;
        let teamManual = teamSelect.some((item) => item.name === teamName);
        let playerCountGet;
        if (fanaticMode) {
          let count = draftCardDepth  + teamPosition;
          playerCountGet = !teamManual ? count : PLAYER_MAX;
        } else {
          const manualLength = playersDraft?.playerManualChoose?.length ?? 1
         
          playerCountGet = !teamManual
          ? draftCardDepth + team.index + manualLength
          : PLAYER_MAX;
        }
          

          dispatch(
            getPlayersDraft({
              playerCountGet: playerCountGet,
              teamName,
            })
          );
        // }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, tradeValue.mouthing, changeTrades]);

  //  Go To Result Page
  useEffect(() => {
    
    if (draftResults.results.length > 0) {
      navigate("/draft-result");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftResults.results]);

  useEffect(() => {
    dispatch(getTradeValue());
    dispatch(getTrades());
    return () => {
      dispatch(resPlayersDraft());
      dispatch(setResetRound());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Finished Set Data
  useEffect(() => {
    const iter = iterationSection.iterationSection ?? [];
    
    if (countRender === tradeValue?.results?.length && iter.length === 0) {
      const data = { items: [] };
      draftPlayers.forEach((item) => {
        const {
          round_index,
          count = null,
          tm,
          round,
          player,
          upPlayers,
        } = item;
        const dataItem = {
          round_index: +round_index.split(" ")[0],
          count,
          team: tm,
          draft: round.id,
          player: player.id,
          position: player.position,
          upPlayers,
        };
        data.items.push(dataItem);
      });
      dispatch(
        setDraftResultAction(
          draftPlayers,
          teamSelect,
          round,
          teamPickIndexControl,
          draftRandomnessTeam
        )
      );
      dispatch(setHistoryBoard(data));
    }
    
    if (iter?.length > 0 && iter?.includes(countRender)) {
      const data = { items: [] };
    
      const startSlice =
        tradeValue.results[countRender - 1].iteration - 2 >= 0
          ? iter[tradeValue.results[countRender - 1].iteration - 2]
          : 0;
      const iterationDraftPlayers = draftPlayers.slice(startSlice, countRender);
      
      iterationDraftPlayers.forEach((item) => {
        const {
          round_index,
          count = null,
          tm,
          round,
          player,
          upPlayers,
        } = item;
        const dataItem = {
          round_index: +round_index.split(" ")[0],
          count,
          team: tm,
          draft: round.id,
          player: player.id,
          position: player.position,
          upPlayers,
        };
        data.items.push(dataItem);
      });
      dispatch(setHistoryBoard(data));
      if (countRender === iter.at(-1)) {
        
        dispatch(
          setDraftResultAction(
            draftPlayers,
            teamSelect,
            round,
            teamPickIndexControl,
            draftRandomnessTeam
          )
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countRender]);


  if (!tradeValue.mouthing) {
    return <Spinner />;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <Wrapper className="main-container">
        <Banner>
          <h2>You’re on the Clock!</h2>
          <div className="banner-info">
            <p className="banner-info-border"></p>
            <RenderCircle status={status}>
              <CircleSvg />
            </RenderCircle>
          </div>
        </Banner>
        <PlayersSelected draftPlayers={draftPlayers} teamSelect={teamSelect} />

        <DraftView>
          {tradeValue.mouthing && (
            <>
              <DraftViewAsign
                thisId={countRender}
                setThisId={setThisId}
                setChangeId={setChangeId}
                changeId={changeId}
                players={playersDraft}
                tradeValue={tradeValue}
              />
              <DraftViewSimulator>
                {!teamPickIndex.includes(count) &&
                status !== "red" &&
                !fanaticIndexPosition.includes(count) ? (
                  <DraftSimulator />
                ) : playersDraft.results.length > 0 ? (
                  <DraftPlayerChoose
                    playersDraft={playersDraft}
                    draftStatus={status}
                    thisId={thisId}
                    setThisId={setThisId}
                    setChangeId={setChangeId}
                  />
                ) : null}
              </DraftViewSimulator>
            </>
          )}
        </DraftView>
        {fanaticChallenge.length === 0 && !fanaticMode
          ? tradesTeams &&
            tradesTeams.length > 0 &&
            !changeTrades && (
              <ModalTrades tradesTeams={tradesTeams} teamSelect={teamSelect} />
            )
          : null}

        <hr className="line" />
      </Wrapper>
    </ErrorBoundary>
  );
};

export default DraftPlayer;

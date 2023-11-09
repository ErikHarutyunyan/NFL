import { getRandom } from "../../utils/utils";
function draftAutoSettings(
  {draftCardDepth,
  draftRandomnessTeam,
  roundBPA,
  roundDepth,
  round,
  playersAll,
  teamDepth,
  tradeValueTeam,
  selectCardDepth,
  roundIndexBool,
  teamUniqPosition,
  roundIndex
  }
) {
  
  const playerPosition = Array.from(
    { length: draftCardDepth },
    (_, i) => i + 1
  );
  const playerRange = playersAll.slice(0, draftCardDepth);
  const tradeValueTeamId = tradeValueTeam.round.index;
  const positionPlayers = [];
  const playerChoose = {};
  
  // Round BPA Set
  if (roundBPA.length && !roundIndexBool) {
    const { player, playerChooseIndex } = draftDisableSettings({
      teamUniqPosition,
      playersAll,
      tradeValueTeam,
      roundIndex,
    });
    playerChoose["player"] = player;
    playerChoose["playerDepth"] = playerChooseIndex;
  }

  // Except  Round 1 Similar Depth
  else if (teamDepth.length) {
    playerChoose["player"] = playerRange[teamDepth[0].playerDepth - 1];
    playerChoose["playerDepth"] = teamDepth[0].playerDepth;
  } else if (roundIndex > roundDepth) {
    playerChoose["player"] = playerRange[0];
    playerChoose["playerDepth"] = 1;
  }
  // Except Top-1 Player Round 1
  else if (draftRandomnessTeam.includes(tradeValueTeamId)) {
    let randomFlag = true;
    let  randomPosition = null;
    while (randomFlag) { 
      randomPosition = getRandom(
        playerPosition.slice(1, draftCardDepth),
        1
        );
      
      if(4 >= roundIndex) {
         randomFlag = false;
        break;
      }
      if (!teamUniqPosition[tradeValueTeam.round.name]) {
        randomFlag = false;
      }
      if (
        teamUniqPosition[tradeValueTeam.round.name] &&
        !teamUniqPosition[tradeValueTeam.round.name].includes(
          playerRange[randomPosition[0] - 1]?.position
        )
      ) {
        randomFlag = false;
      }

    }
    const playerRandomIdExceptTop = playerRange[randomPosition[0] - 1];
    positionPlayers.push(randomPosition[0]);
    playerChoose["player"] = playerRandomIdExceptTop;
    playerChoose["playerDepth"] = randomPosition[0];
  }
  // Round 1
  else {
    // const [randomPosition] = getRandom(playerPosition.slice(0, draftCardDepth), 1)
    const { player, playerChooseIndex } = draftDisableSettings({
      teamUniqPosition,
      playersAll,
      tradeValueTeam,
      roundIndex,
    });
    const randomPosition = playerChooseIndex;
    const playerRandomId = player;
    positionPlayers.push(randomPosition);
    playerChoose["player"] = playerRandomId;
    playerChoose["playerDepth"] = randomPosition;

    // Pick Card Depth Minimal Last
    if (
      selectCardDepth.length > draftCardDepth &&
      !selectCardDepth.includes(draftCardDepth)
    ) {
      playerChoose["player"] = playerRange[draftCardDepth];
      playerChoose["playerDepth"] = draftCardDepth;
    }
  }
  if(playerChoose.player === undefined) {
    
    const playerAllIndexChoose = playersAll.findIndex(
      (player) =>
        !teamUniqPosition[tradeValueTeam.round.name].includes(player.position)
    );
     playerChoose["player"] = playersAll[playerAllIndexChoose];
     playerChoose["playerDepth"] = playerAllIndexChoose;
  }
  return playerChoose;
  // // RoundBPA
  // if(roundBPA.includes(round)) {

  // }
}
function draftDisableSettings({ teamUniqPosition, playersAll, tradeValueTeam ,roundIndex,round}) {
  let playerChoose = null;
  let playerChooseIndex = 1;
  if(4 >= roundIndex) {
    
    if (teamUniqPosition[tradeValueTeam.round.name]) {
      playerChooseIndex = playersAll.findIndex(
        (player) =>
          !teamUniqPosition[tradeValueTeam.round.name].includes(player.position)
      );
      playerChoose = playersAll[playerChooseIndex];
    } else {
      playerChoose =  playersAll[0];
    }
    return { player: playerChoose, playerChooseIndex: playerChooseIndex+1 };
  } else {
    return { player: playersAll[0], playerChooseIndex: playerChooseIndex + 1 };
  }

}

export { draftAutoSettings, draftDisableSettings };
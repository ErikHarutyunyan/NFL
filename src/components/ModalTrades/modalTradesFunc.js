export default function changeTeamPick({
  teamPick,
  myTeamPick,
  tradeValue,
  acceptFlag,
  teamMainData,
  myTeamData,
}) {
  const teamPickSort = teamPick.sort((a, b) => a - b);
  const myTeamPickSort = myTeamPick.sort((a, b) => a - b);
  const teamPickIndex = structuredClone(teamPick);
  const myTeamPickIndex = structuredClone(myTeamPick);
  const dataTradeValue = structuredClone(tradeValue);

  
  if (acceptFlag) {
    for (let i = 0; i < myTeamPickIndex.length; i++) {
      let myTeamPickClone = JSON.parse(
        JSON.stringify(tradeValue[myTeamPickSort[i] - 1])
      );
      dataTradeValue[myTeamPickSort[i] - 1] = {
        ...myTeamPickClone,
        ...teamMainData,
      };

    }
    for (let i = 0; i < teamPickSort.length; i++) {
      let teamPickClone = JSON.parse(
        JSON.stringify(tradeValue[teamPickSort[i] - 1])
      );
      dataTradeValue[teamPickSort[i] - 1] = {
        ...teamPickClone,
        ...myTeamData,
      };
       
    }

    return {
      tradeValue: dataTradeValue,
      teamPickIndex,
      myTeamPickIndex,
    };
  }
}

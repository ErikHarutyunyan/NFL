

function randomSelect({date,min=1,max=1}) {
  let numberOfObjectsToSelect = Math.floor(Math.random() * max) + min;
  let selectedObjects = [];

  while (selectedObjects.length < numberOfObjectsToSelect) {
    let randomIndex = Math.floor(Math.random() * date.length);
    let randomObject = date[randomIndex];

    if (!selectedObjects.includes(randomObject)) {
      selectedObjects.push(randomObject);
    }
  }
  return selectedObjects
}

export default function randomTrade({myTeam, mainTeam}) {
  const mainTeamPicksRandom = randomSelect({
    date: mainTeam.picks,
    max: mainTeam.picks.length,
  });
  const mainTeamPicksYearsRandom = randomSelect({
    date: mainTeam.picksYears,
    max: mainTeam.picksYears.length,
  });
  

  const mainTeamPlayersSplice = [...mainTeam.players].splice(1);
  const mainTeamPlayerRandom = randomSelect({
    date: mainTeamPlayersSplice,
    max: 1,
    min: 1,
  });

  // --------------------
  const myTeamPicksRandom = randomSelect({
    date: myTeam.picks,
    max: myTeam.picks.length,
  });
 
  const myTeamPicksYearsRandom = randomSelect({
    date: myTeam.picksYears,
    max: myTeam.picksYears.length,
  });

  const myTeamPlayersSplice = [...myTeam.players].splice(1);
  const myTeamPlayerRandom = randomSelect({
    date: myTeamPlayersSplice,
    max: 1,
    min: 1,
  });
  
  
  const mainValue = [
    ...mainTeamPicksRandom,
    ...mainTeamPicksYearsRandom,
    ...mainTeamPlayerRandom,
  ].reduce((acc,item) => acc + parseInt(item.value),0);
  const myValue = [
    ...myTeamPicksRandom,
    ...myTeamPicksYearsRandom,
    ...myTeamPlayerRandom,
  ].reduce((acc, item) => acc + parseInt(item.value), 0);
  
  if(mainValue < myValue) {
    const randomAccepted = [
      {
        mainTeam: {
          ...mainTeam,
          pick: mainTeamPicksRandom,
          pickYear: mainTeamPicksYearsRandom,
          player: mainTeamPlayerRandom[0],
        },
        myTeam: {
          ...myTeam,
          pick: myTeamPicksRandom,
          pickYear: myTeamPicksYearsRandom,
          player: myTeamPlayerRandom[0],
        },
        mainTeamValue: mainValue,
        myTeamValue: myValue
      },
    ];
    return randomAccepted;
  }
  return randomTrade({myTeam, mainTeam});



}

export const toggleArrObj = (arr, item, getValue = (item) => item) => {
  if (arr.some((i) => getValue(i) === getValue(item)))
    return arr.filter((i) => getValue(i) !== getValue(item));
  else return [...arr, item];
};

export const searchInfo = (arr, item, getValue = (item) => item) => {
  
  return arr.filter((i) => getValue(i) === getValue(item));
};

export const percentPick = (teamValue, playerValue, percent = 50) => {
  return +(((teamValue - playerValue) * percent) / 100).toFixed(2);
};

export const dataURLtoBlob = (dataurl) => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

let sumNumber = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

export const upUsersCals = (players, pricentValuePlayer, key) => {
  const point = sumNumber(players.length - 1);
  const midPoint = pricentValuePlayer / point;

  return players.map((player, idx) => {
    const pricentValue = +(midPoint * (players.length - idx - 1)).toFixed(2);
    if (idx === players.length - 1) {
      return {
        ...player,
        value: +(player[key] + pricentValuePlayer),
        pricentValue: pricentValuePlayer,
      };
    }
    return {
      ...player,
      value:  +(player[key] - pricentValue) <= 0 ? 0 : - pricentValue,
      pricentValue: +(player[key] - pricentValue) <= 0 ? 0 : - pricentValue,
    };
  });
};

// Round Calc Create New Data
export const roundTeam = (roundCount, teams) => {
  const newData = [];
  let indexCount = 1;
  for (let i = 1; i <= roundCount; ++i) {
    for (let j = 0; j < teams.length; ++j) {
      newData.push({
        id: Math.random(),
        index: indexCount,
        round_index: `${i} Round`,
        round: teams[j],
      });
      indexCount++;
    }
  }
  return newData;
};

export const getFilterTwoData = (
  arr,
  secondArr,
  key,
  deepKey = "",
  bitwiseOperator = "XOR"
) => {
  if (bitwiseOperator === "AND") {
    if (deepKey) {
      return arr.filter((item) => secondArr.includes(item[key][deepKey]));
    } else return arr.filter((item) => secondArr.includes(item[key]));
  } else if (bitwiseOperator === "XOR") {
    if (deepKey) {
      return arr.filter((item) => !secondArr.includes(item[key][deepKey]));
    } else return arr.filter((item) => !secondArr.includes(item[key]));
  }
};

export const objectSet = (arr, key) => {
  const mySet = [];
  const setObject = [];
  arr.forEach((item) => {
    if (!mySet.includes(item[key])) {
      mySet.push(item[key]);
      setObject.push(item);
    }
  });
  return setObject;
};

// Get Random Team
export const getRandom = (arr, n) => {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

export const makeRepeated = (arr, repeats) =>
  Array.from({ length: repeats }, (v, idx) => {
    const arrIteration = arr.map((item) => {
      return { ...item, iteration: idx + 1 };
    });
    return arrIteration;
  }).flat();

export const iterationRound = ({ fanaticChallenge, tradeValueData, round }) => {
  let newTradeValueIteration = [];
  let roundStart = [1];
  const iterationSection = [];
  let fanaticSlices = {
    1: [],
    2: [],
    3: [],
  };
  let fanaticSlicesRound = [
    {
      round: 1,
      start: null,
      end: null,
      challenge: false,
      iteration: 5,
      chose: true,
      roundRange: [],
    },
    {
      round: 2,
      start: null,
      end: null,
      challenge: false,
      iteration: 10,
      chose: false,
      roundRange: [],
    },
    {
      round: 3,
      start: null,
      end: null,
      challenge: false,
      iteration: 15,
      chose: false,
      roundRange: [],
    },
  ];
  const iterationRound = makeRepeated(
    tradeValueData,
    fanaticChallenge[0].iteration
  );
  newTradeValueIteration.push(...iterationRound);
  for (let i = 1; i <= fanaticChallenge[0].iteration; i++) {
    iterationSection.push(tradeValueData.length * i);
  }

  for (let i = 0; i < tradeValueData.length; i++) {
    if (
      +tradeValueData[i].round_index_number === 1 &&
      fanaticSlicesRound[0].start === null
    ) {
      fanaticSlicesRound[0].start = i;
      roundStart.push(i + 1);
    }
    if (
      +tradeValueData[i].round_index_number === 2 &&
      fanaticSlicesRound[1].start === null
    ) {
      fanaticSlicesRound[0].end = i;
      fanaticSlicesRound[1].start = i;
      roundStart.push(i + 1);
    }
    if (
      +tradeValueData[i].round_index_number === 3 &&
      fanaticSlicesRound[2].start === null
    ) {
      fanaticSlicesRound[2].start = i;
      fanaticSlicesRound[1].end = i;
      roundStart.push(i + 1);
    }
    if (tradeValueData.length - 1 === i) {
      fanaticSlicesRound[round - 1].end = i;
    }
  }

  for(let i = 0; i < fanaticSlicesRound.length; i++) {
    for (let j = 1; j <= fanaticChallenge[0].iteration; j++) {
      if (fanaticSlicesRound[i].roundRange.length === 0) {
        fanaticSlicesRound[i].roundRange.push({
          start: fanaticSlicesRound[i].start + 1 * j,
          end: fanaticSlicesRound[i].end * j,
        });

      } else {
        fanaticSlicesRound[i].roundRange.push({
          start: fanaticSlicesRound[i].roundRange[j - 2].end,
          end: fanaticSlicesRound[i].end * j,
        });
      }
    }
  }

  const cutTradeValue = [...newTradeValueIteration];
  const newTradeValue = cutTradeValue.map((item, idx) => {
    const newItem = structuredClone(item);
    fanaticSlices[`${item.round_index_number}`].push(idx + 1);
    newItem["index_position"] = idx + 1;
    return newItem;
  });
  const sliceRound = fanaticSlicesRound
  return {
    count: newTradeValue.length,
    newTradeValue,
    roundStart,
    iterationSection,
    fanaticSlicesRound: {sliceRound,iterationSection},
  };
};

export const iterationFanaticMode = ({fanaticModeValue, tradeValueData}) => {

  const iterationRound = makeRepeated(tradeValueData, fanaticModeValue);
  const iterationSection = [];
  for (let i = 1; i <= fanaticModeValue; i++) {
    iterationSection.push(tradeValueData.length * i);
  }
  const newTradeValue = iterationRound.map((item, idx) => {
    const newItem = structuredClone(item);
    newItem["index_position"] = idx + 1;
    return newItem;
  });
  return { newTradeValue, iterationSection };
}

export const objectDeleteValue = ({ objectData, deleteKey }) => {
  const objectDelete = Object.keys(objectData)
    .filter((key) => !deleteKey.includes(key))
    .reduce((obj, key) => {
      obj[key] = objectData[key];
      return obj;
    }, {});
  return objectDelete;
};

// sort array
export const sortArray = ({ arr, key }) => {
  return arr.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
};

export const filteredArray = ({ arr, arr2, key }) => {
  const filterArr = arr.filter(function (array_el) {
    return (
      arr2.filter(function (anotherOne_el) {
        return anotherOne_el[key] === array_el[key];
      }).length === 0
    );
  });
  return filterArr;
};

export const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");

      // Set the width and height of the canvas to be the same as the image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image onto the canvas
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      // Get the PNG data URL from the canvas
      const pngDataUrl = canvas.toDataURL("image/png");

      // Use the PNG data URL as needed
      resolve(pngDataUrl);
    };
    img.onerror = (e) => {
      reject(e);
    };
    img.src = src;
  });
};


export const generateID  = function (count=8) {
console.log('count :', count);

  return (Date.now().toString(36) + Math.random().toString(36).substr(2))
    .toUpperCase()
    .slice(count);
};


export const formatDate = (value) => {
    const date = new Date(value);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };
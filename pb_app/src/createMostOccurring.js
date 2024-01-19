const createMostOccurring = (combos) => {
  combos = combos.map((arr) => {
    let curr = arr[9].split(" ");
    curr.pop();
    return curr.map((num) => parseInt(num, 10));
  });

  let hash = {};

  for (let key in hash) {
    hash[key] = 0;
  }

  for (let i = 0; i < combos.length; i++) {
    for (let j = 0; j < combos[i].length; j++) {
      if (hash.hasOwnProperty(combos[i][j])) hash[combos[i][j]]++;
      else hash[combos[i][j]] = 1;
    }
  }

  let sortedArr = [];

  for (let key in hash) {
    sortedArr.push([key, hash[key]]);
  }

  sortedArr.sort((a, b) => b[1] - a[1]);

  return sortedArr;
};

const createMostOcurringPB = (combos) => {
  let hash = {};

  combos = combos.map((arr) => {
    let curr = arr[9].split(" ");
    return curr.map((num) => parseInt(num, 10));
  });

  combos.map((arr) => {
    let pb = arr.pop();

    if (hash[pb]) hash[pb]++;
    else hash[pb] = 1;
  });

  let sortedArr = [];

  for (let key in hash) {
    sortedArr.push([key, hash[key]]);
  }

  sortedArr.sort((a, b) => b[1] - a[1]);

  return sortedArr;
};

module.exports = {
  createMostOccurring,
  createMostOcurringPB,
};

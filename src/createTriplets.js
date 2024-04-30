const createTriplets = (combos) => {
  combos = combos.map(arr => {
      let curr = arr[9].split(' ');
      curr.pop();
      return curr.map(num => parseInt(num, 10));
  });

  // temporary
  // combos = combos.map((arr) => {
  //   let curr = arr.split(" ");
  //   curr.pop();
  //   return curr.map((num) => parseInt(num, 10));
  // });

  const counts = {};
  
  combos.forEach((subArray) => {
    for (let i = 0; i < subArray.length - 2; i++) {
      for (let j = i + 1; j < subArray.length - 1; j++) {
        for (let k = j + 1; k < subArray.length; k++) {
          const triplet = [subArray[i], subArray[j], subArray[k]];
          const tripletKey = triplet.sort().join(',');

          counts[tripletKey] = (counts[tripletKey] || 0) + 1;
        }
      }
    }
  });

  const sortedTriplets = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  // Take the top three most occurring triplets
  const topThreeTriplets = sortedTriplets.slice(0, 4);

  return topThreeTriplets.map((triplet) => triplet.split(',').sort((a, b) => a - b).map(Number));
}

module.exports = {
  createTriplets,
};

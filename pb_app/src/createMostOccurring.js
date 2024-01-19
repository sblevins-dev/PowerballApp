const createMostOccurring = (combos) => {
    combos = combos.map((arr) => {
        let curr = arr.split(" ");
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

    return hash;
}

module.exports = {
    createMostOccurring
}
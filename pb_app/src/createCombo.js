const createCombo = (pastCombos) => {
    const randomNum = () => {
        return Math.floor(Math.random() * 69) + 1;
    }

    const randomPowerball = () => {
        return Math.floor(Math.random() * 26) + 1;
    }

    let arr = [];
    let count = 0;

    while (count < 5) {
        let num = randomNum()

        if (arr.indexOf(num) === -1) {
            arr.push(num);
            count++;
        }
    }

    arr.sort((a, b) => a - b);
    arr.push(randomPowerball());

    return arr;
}

module.exports = {
    createCombo
}
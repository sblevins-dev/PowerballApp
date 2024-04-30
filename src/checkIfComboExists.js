const checkIfComboExists = (arr, createCombo) => {
    let newCombo = createCombo();
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currCombo = arr[i][9].split(' ');

        const parsedNumbers = currCombo.map(numStr => parseInt(numStr, 10)).sort((a, b) => a - b);

        parsedNumbers.push(parseInt(arr[i][10], 10));

        newArr.push(parsedNumbers);
    }

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].toString() === newCombo.toString()) {
            console.log('Match');
            newCombo = createCombo;
            i = 0;
        }
    }

    return newCombo;
}

module.exports = {
    checkIfComboExists
}
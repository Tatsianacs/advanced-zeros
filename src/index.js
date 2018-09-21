module.exports = function getZerosCount(number, base) {

   var baseCopy = base;



    var dividers = {}

    var i = 2;



    while (baseCopy > 1) {

        if (baseCopy % i == 0) {

            baseCopy /= i;

            dividers[i] = dividers[i] ? dividers[i] + 1 : 1;

            console.warn(i);

        } else {

            i++;

        }

    }

    //console.warn('all dividers are',  dividers);



    var allResults = []

    for (let divider of Object.keys(dividers)) {

        var numberCopy = number;

        let resultForDivider = 0;

        while (numberCopy > 0) {

            numberCopy /= (divider);

            resultForDivider += Math.floor(numberCopy);

        }

        allResults.push(Math.floor(resultForDivider / dividers[divider]));

    }

    var result = Math.min(...allResults);

    return result;

}
module.exports = function getZerosCount(number, base) {
  //good practise: don't change key parameters
   var baseCopy = base;
   //create an object for all dividers AND exponent of our base
    var dividers = {};
    var i = 2;
    //find all dividers for our base and their exponent (how many 'divider' is required for Base)
    while (baseCopy > 1) {
        if (baseCopy % i == 0) {
            baseCopy /= i;
            //assign key: if it exists, add to value +1; if not - add value 1
            dividers[i] = dividers[i] ? dividers[i] + 1 : 1;
        } else {
            //try next divider if not 0
            i++;
        }

    }
    //determine how many 'divider^exponent*divider^exponent etc = 0 are required for our Number
    var allResults = [];
    for (let divider of Object.keys(dividers)) {
        var numberCopy = number;
        let resultForDivider = 0;
        while (numberCopy > 0) {
            numberCopy /= divider;
            resultForDivider += Math.floor(numberCopy);
        }
        //add a result for divider to array; need to divide by divider value which is required to get '0' in Number
        allResults.push(Math.floor(resultForDivider / dividers[divider]));
    }
    //find min value because without it we cannot get '0': if 3*2^6 is required and only 5*3^1, we should return 3
    var result = Math.min(...allResults);
    return result;
}
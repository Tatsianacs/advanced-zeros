module.exports = function getZerosCount(number, base) {
  // your implementation
    //var end = base;
    for (var i = 2; i < base; i++) {
        if (base % i == 0) {
            base /= i;
            i--;
        }
    }
    var result = 0;
    while (number > 0) {
        number /= base;
        result += Math.floor(number);
    }
    return result;
}
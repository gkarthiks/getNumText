'use strict';

let isEmptyObj = require('@gkarthiks/isemptyobj');
var ToWord = require('./helper');

/**
 * Gets the data and data and calls helper class to convert the number to text data.
 * @param data
 * @param currency
 * @param domicile
 * @param limit
 * @returns {*}
 */
function getNumText(data, { isCurrency = false, domicile = 'USD', limit = 2 }) {
    if(!isEmptyObj(data) && data.includes('/')){
        var divisionSplits = data.split('/');
        let dividend = Number(divisionSplits[0]);
        let divisor = Number(divisionSplits[1]);
        let quotient = dividend/divisor;

        var converter = new ToWord(isCurrency, domicile);
        var quotientInWords = converter.convert(quotient.toFixed(limit));
        return quotientInWords;
    } else if(!this.valueOf().includes('/')){
        throw new Error('Not a valid expression');
    } else {
        throw new Error('No data found');
    }
}


module.exports = getNumText
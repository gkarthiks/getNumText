'use strict';

module.exports = class ToWords {
    constructor(isCurrency, domicile) {
        this.domicile = domicile;
        this.isCurrency = isCurrency;
        if(this.domicile.trim().toUpperCase() === 'USD'){
            this.numberWords = [
                {number: 1000000000000000, value: 'Quadrillion'},
                {number: 1000000000000, value: 'Trillion'},
                {number: 1000000000, value: 'Billion'},
                {number: 1000000, value: 'Million'},
                {number: 100000, value: 'Hundred Thousand'},
                {number: 1000, value: 'Thousand'},
                {number: 100, value: 'Hundred'},
                {number: 90, value: 'Ninety'},
                {number: 80, value: 'Eighty'},
                {number: 70, value: 'Seventy'},
                {number: 60, value: 'Sixty'},
                {number: 50, value: 'Fifty'},
                {number: 40, value: 'Forty'},
                {number: 30, value: 'Thirty'},
                {number: 20, value: 'Twenty'},
                {number: 19, value: 'Nineteen'},
                {number: 18, value: 'Eighteen'},
                {number: 17, value: 'Seventeen'},
                {number: 16, value: 'Sixteen'},
                {number: 15, value: 'Fifteen'},
                {number: 14, value: 'Fourteen'},
                {number: 13, value: 'Thirteen'},
                {number: 12, value: 'Twelve'},
                {number: 11, value: 'Eleven'},
                {number: 10, value: 'Ten'},
                {number: 9, value: 'Nine'},
                {number: 8, value: 'Eight'},
                {number: 7, value: 'Seven'},
                {number: 6, value: 'Six'},
                {number: 5, value: 'Five'},
                {number: 4, value: 'Four'},
                {number: 3, value: 'Three'},
                {number: 2, value: 'Two'},
                {number: 1, value: 'One'},
            ];
        } else if (this.domicile.trim().toUpperCase() === 'INR') {
            this.numberWords = [
                {number: 10000000, value: 'Crore'},
                {number: 100000, value: 'Lakh'},
                {number: 1000, value: 'Thousand'},
                {number: 100, value: 'Hundred'},
                {number: 90, value: 'Ninety'},
                {number: 80, value: 'Eighty'},
                {number: 70, value: 'Seventy'},
                {number: 60, value: 'Sixty'},
                {number: 50, value: 'Fifty'},
                {number: 40, value: 'Forty'},
                {number: 30, value: 'Thirty'},
                {number: 20, value: 'Twenty'},
                {number: 19, value: 'Nineteen'},
                {number: 18, value: 'Eighteen'},
                {number: 17, value: 'Seventeen'},
                {number: 16, value: 'Sixteen'},
                {number: 15, value: 'Fifteen'},
                {number: 14, value: 'Fourteen'},
                {number: 13, value: 'Thirteen'},
                {number: 12, value: 'Twelve'},
                {number: 11, value: 'Eleven'},
                {number: 10, value: 'Ten'},
                {number: 9, value: 'Nine'},
                {number: 8, value: 'Eight'},
                {number: 7, value: 'Seven'},
                {number: 6, value: 'Six'},
                {number: 5, value: 'Five'},
                {number: 4, value: 'Four'},
                {number: 3, value: 'Three'},
                {number: 2, value: 'Two'},
                {number: 1, value: 'One'},
            ];
        }
    }

    /**
     * Converts the given number to word and returns the String.
     * @param number
     * @returns {string}
     */
    convert(number) {
        let ns = number + '';
        if (ns.includes('.')) {
            let split = (number + '').split('.');
            if(this.domicile.trim().toUpperCase() === 'USD') {
                return this.convertInternal(split[0])
                    + (this.isCurrency ? ' US Dollars  And ' : ' Point ')
                    + this.convertInternal(split[1])
                    + (this.isCurrency ? ' Cents Only' : '');
            } else if(this.domicile.trim().toUpperCase() === 'INR'){
                return this.convertInternal(split[0])
                    + (this.isCurrency ? ' Rupee And ' : ' Point ')
                    + this.convertInternal(split[1])
                    + (this.isCurrency ? ' Paise Only' : '');
            }
        } else {
            if(this.domicile.trim().toUpperCase() === 'USD') {
                return this.convertInternal(number) + (this.isCurrency ? ' USD Only' : '');
            } else if(this.domicile.trim().toUpperCase() === 'INR'){
                return this.convertInternal(number) + (this.isCurrency ? ' Rupee Only' : '');
            }
        }
    }

    convertInternal(number) {
        let match = this.numberWords.find((elem) => {
            return number >= elem.number;
        });

        let words = '';
        if (number >= match.number) {
            if (number <= 100) {
                words += match.value;
                number -= match.number;
                if (number > 0) {
                    words += ' ' + this.convertInternal(number);
                }
            } else {
                let quotient = Math.floor(number / match.number);
                let remainder = number % match.number;
                if (remainder > 0) {
                    return this.convertInternal(quotient) + ' '
                        + match.value + ' ' + this.convertInternal(remainder);
                } else {
                    return this.convertInternal(quotient) + ' ' + match.value;
                }
            }
        }
        return words;
    }
}

module.exports.ToWords
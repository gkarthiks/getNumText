var index = require('tape')
var getNumText = require('../')
console.log(getNumText("123/5", {isCurrency:true, domicile:'USD', limit:3}))

let noCurrencyUSD = {isCurrency:false, domicile:'USD', limit:0};
let noCurrencyINR = {isCurrency:false, domicile:'INR', limit:0};
let noCurrencyUSD3 = {isCurrency:false, domicile:'USD', limit:3};
let noCurrencyUSDNoLimit = {isCurrency:false, domicile:'USD'};

let currencyUSD3 = {isCurrency:true, domicile:'USD', limit:3};
let currencyINR3 = {isCurrency:true, domicile:'INR', limit:3};
let currencyUSDNoLimit = {isCurrency:true, domicile:'INR'};

let noDomicile3 = {isCurrency:true, limit:3};
let noDomicileNoLimit = {isCurrency:true};
let noCurrencyNolimitNoDomicile = {};


index('getNumText Testing', function(assert) {
    assert.equal(getNumText('123/5', noCurrencyUSD), 'Twenty Five');
    assert.equal(getNumText('5678/47', noCurrencyINR), 'One Hundred Twenty One');
    assert.equal(getNumText('98765/6', noCurrencyUSD3), 'Sixteen Thousand Four Hundred Sixty Point Eight Hundred Thirty Three');
    assert.equal(getNumText('345678/9', noCurrencyUSDNoLimit), 'Thirty Eight Thousand Four Hundred Eight Point Sixty Seven');

    assert.equal(getNumText('345678.567/678', currencyUSD3), 'Five Hundred Nine US Dollars  And Eight Hundred Fifty Cents Only');
    assert.equal(getNumText('9876/8', currencyINR3), 'One Thousand Two Hundred Thirty Four Rupee And Five Hundred Paise Only');
    assert.equal(getNumText('234567890/83456', currencyUSDNoLimit), 'Two Thousand Eight Hundred Ten Rupee And Sixty Eight Paise Only');

    assert.equal(getNumText('3456.4567/456', noDomicile3), 'Seven US Dollars  And Five Hundred Eighty Cents Only');
    assert.equal(getNumText('1234567890/456.78', noDomicileNoLimit), 'Two Million Seven Hundred Thousand Two Thousand Seven Hundred Sixty Two US Dollars  And Fifty Eight Cents Only');
    assert.equal(getNumText('3456789.987654/45678.87', noCurrencyNolimitNoDomicile), 'Seventy Five Point Sixty Eight');
    assert.equal(getNumText('3456789.987654/45678.87', {}), 'Seventy Five Point Sixty Eight');

    assert.end()
})
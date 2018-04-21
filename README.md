# getNumText
Takes the division expression and returns the result in String
## Why you need this?
When ever there is a need to represent the result of the quotient data from a divisor dividing a dividend, the `getNumText()` function solves a step lesser.
- Pass in the number expressions as shown below.
  - '5678/789'
  - '876545.567/56789'
## Installation:
> npm i getnumtext

## Usage:
```
var getNumText = require('getnumtext');

getNumText('1234567890/456.78', {isCurrency:true})
//Two Million Seven Hundred Thousand Two Thousand Seven Hundred Sixty Two US Dollars  And Fifty Eight Cents Only

getNumText('3456789.987654/45678.87', {})
//Seventy Five Point Sixty Eight

getNumText('345678.567/678', {isCurrency:true, domicile:'USD', limit:3})
//Five Hundred Nine US Dollars  And Eight Hundred Fifty Cents Only
```
### Defaults:
|Field|	Default Value |	Description|
| --- | ------------- | -----------|
|isCurrency |	false	| defines whether the resultant is currency or normal numerals.|
|domicile	| 'USD'	| defines the currency country unit. asof now, USD and INR|
|limit	| 2	| defines the roundof limit for decimal numbers|

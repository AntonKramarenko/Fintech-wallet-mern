const calc = (e) => (e * 2 < 10) ? e * 2 : e * 2 - 9;
const parseDate = (date) => Date.parse(date);

module.exports = function isValidCardNumber(cardNumber) {
    const currentNum = cardNumber.split('').filter(char => char !== '_' && char !== ' ').join('');

    let isValid = currentNum.split('')
        .map((e, i) => (i % 2 === 0) ? calc(parseInt(e)) : parseInt(e))
        .reduce((prv, cur) => prv + cur) % 10 === 0;

    return isValid
};
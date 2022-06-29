module.exports = function toReadable (number) {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];

  let numberString = number.toString();
  let result = '';

  if(number === 0) {
    return 'zero';
  }

  else {
    let hundredCount = Math.floor(number / 100);
    let tenCount = Math.floor(number % 100 / 10);
    let oneCount = number % 10;

    if(hundredCount >= 1) {
      result += ones[hundredCount] + ' hundred';
      if (number % 100 !== 0) {
         result += ' ';
      }
    }

    if(tenCount > 1) {
      if (oneCount !== 0) {
        result += tens[tenCount] + ' ' + ones[oneCount];
      }
      else {
        result += tens[tenCount] + ones[oneCount];
      }
    }

    else {
      result += ones[number % 100];
    }

    return result;
  }
}

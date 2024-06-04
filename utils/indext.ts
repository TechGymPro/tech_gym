export function convertPhoneNumber(phoneNumber: string): string {
  const numericOnly = phoneNumber.replace(/\D/g, '');
  const formattedNumber = `+55 ${numericOnly.slice(0, 2)} ${numericOnly.slice(
    2,
    7,
  )}-${numericOnly.slice(7)}`;

  return formattedNumber;
}

export function creditCardType(cc: string): 'MASTERCARD' | 'VISA' | false {
  let firstFour = cc.substring(0, 4);

  let visa = new RegExp('^4[0-9]{3}');
  let mastercard = new RegExp('^5[1-5][0-9]{2}');
  let mastercard2 = new RegExp('^2[2-7][0-9]{2}');

  if (visa.test(firstFour)) {
    return 'VISA';
  }
  if (mastercard.test(firstFour) || mastercard2.test(firstFour)) {
    return 'MASTERCARD';
  }
  return false;
}

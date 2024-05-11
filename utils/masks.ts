const maskOnlyLetters = (value: string) => {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, '');
};

// Aceita apenas números
const maskOnlyNumbers = (value: string) => {
  return value.replace(/\D/g, '');
};
const unMaskNumbersToString = (numberMasked: number) => {
  const numberKG = numberMasked * 1000;
  const valueMask = Number(Number(numberKG) / 1000);
  console.log(valueMask.toFixed(3), 'valueMask');
  return String(valueMask ? `${valueMask.toFixed(3)}` : '');
};
export {maskOnlyLetters, maskOnlyNumbers, unMaskNumbersToString};

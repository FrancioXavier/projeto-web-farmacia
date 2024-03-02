export default function cpfValidation(cpf) {
  let sum = 0;
  let rest;

  let strCPF = String(cpf).replace(/[^\d]/g, '');

  if (strCPF.length !== 11) return false;

  if (
    [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ].indexOf(strCPF) !== -1
  )
    return false;

  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;

  if (rest != parseInt(strCPF.substring(9, 10))) return false;

  sum = 0;

  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);

  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;

  if (rest != parseInt(strCPF.substring(10, 11))) return false;

  return true;
}

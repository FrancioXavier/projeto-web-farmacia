export default function phoneValidation(phone) {
  // Expressão regular para validar números de telefone
  // Aceita formatos:
  // (XX) XXXX-XXXX, (XX) XXXXX-XXXX,
  // XXXX-XXXX, XXXXX-XXXX,
  // XXXXXXXXXX, XXXXXXXXXXX,
  // (XX)XXXXXXXX, (XX) XXXXXXXX,
  // (XX)XXXXXXXXX, (XX) XXXXXXXXX
  const telefoneRegex =
    /^(\(\d{2}\) \d{4,5}-\d{4}|\d{4,5}-\d{4}|\d{10,11}|\(\d{2}\)\d{8,9}|\(\d{2}\) \d{8,9})$/;

  return telefoneRegex.test(phone);
}

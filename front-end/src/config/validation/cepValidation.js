export default function cepValidation(cep) {
  const cepRegex = /^(\d{2}\.\d{3}-\d{3}|\d{2}\.\d{6})$/;

  return cepRegex.test(cep);
}

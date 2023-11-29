export default async function login(email, password) {
  const emailMock = "estefa@es.com";
  const passwordMock = "Estefa123.";
  const isCorrectEmail = emailMock === email;
  const isCorrectPassword = passwordMock === password;
  return isCorrectEmail && isCorrectPassword;
}

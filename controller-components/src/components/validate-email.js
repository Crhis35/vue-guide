export default function validateEmail(email) {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

export default function (str) {
  console.log(str, ' ======');
  if (str == '') return false;
  return str == str.split('').reverse().join('');
}

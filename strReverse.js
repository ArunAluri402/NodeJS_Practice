function revStr(str) {
  const splitting = str.split("");
  const reverse = splitting.reverse();
  const revStr = reverse.join("");
  return revStr;
}
console.log(revStr("Arun"));

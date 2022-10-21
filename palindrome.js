//palindrome --> string and reverse of string should be same
function palindrome(str) {
  const splitting = str.split("");
  const reverse = splitting.reverse();
  const revStr = reverse.join("");

  if (str == revStr) {
    return "It is a Palindrome";
  }

  return "Not a Palindrome";
}

console.log(palindrome("Arun"));

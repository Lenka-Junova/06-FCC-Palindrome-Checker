function palindrome(str) {
  let reversed = "";
  let regexMatch = /[^a-zA-Z0-9]+/g;
  let original = str.toLowerCase().replace(regexMatch, "");
  let newStr = () => {
    for (let i = original.length - 1; i >= 0; i--) {
      reversed += original[i];
    }
    return reversed;
  };
  let final = newStr(reversed);
  console.log(final);
  if (final === original) {
    return true;
  } else {
    return false;
  }
}
palindrome("eye");

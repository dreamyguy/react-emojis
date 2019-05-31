// Check if string contains a substring
function containsString (string, substring) {
  if (string.replace('-', ' ').indexOf(substring.replace('-', ' ')) !== -1) {
    return true;
  }
  return false;
}

export default containsString;

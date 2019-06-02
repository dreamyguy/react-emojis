// Check if string contains a substring
function containsString (string, substring) {
  if (string.toLowerCase().replace('-', ' ').indexOf(substring.toLowerCase().replace('-', ' ')) !== -1) {
    return true;
  }
  return false;
}

export default containsString;

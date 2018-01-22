export function isRotation(str1, str2) {
  if (str1.length !== str2.length) return false;
  return isSubstring(str1 + str1, str2);
}

function isSubstring(str1, str2) {
  return str1.includes(str2);
}
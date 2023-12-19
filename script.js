 function makeid(l) {
  let res = '';
  while(res.length < l) {
    res += Math.random().toString(36).slice(2);
  }
  return res.slice(0, l); // Corrected to use 'l' instead of 'length'
}

// Example usage
const inputLength = prompt("Enter a number:");
const length = Number(inputLength);
alert(makeid(length));

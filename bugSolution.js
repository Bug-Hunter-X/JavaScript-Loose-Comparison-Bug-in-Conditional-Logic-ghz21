function foo(x) {
  if (x === null) {
    return 0;
  } else if (x < 0) {
    return -1;
  } else {
    return x + 1;
  }
}

console.log(foo(null)); // 0
console.log(foo(-1));  // -1
console.log(foo(0));   // 1
console.log(foo(1));   // 2

//Corrected Version using strict equality
function fooCorrected(x) {
  if (x === null) {
    return 0; //Explicitly handle null
  } else if (x < 0) {
    return -1;
  } else {
    return x + 1;
  }
}
console.log(fooCorrected(null)); // 0
console.log(fooCorrected(-1));  // -1
console.log(fooCorrected(0));   // 1
console.log(fooCorrected(1));   // 2
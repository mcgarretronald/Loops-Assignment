function fibonacci(n) {
  let newArray = [];
  
  newArray.push(0);
  newArray.push(1);

  for (i = 1; i < n; i++) {
    newArray.push(newArray[i] + newArray[i]);
  }
  return newArray;
}
console.log(fibonacci(6));

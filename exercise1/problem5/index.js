function removeABC(str) {
  if(!/[abc]/i.test(str)) {
    return null;
  }
  // Your code
}

// export default removeABC;

console.log(removeABC("This might be a bit hard")) // "This might e  it hrd"

console.log(removeABC("hello world!")) // null

console.log(removeABC("")) // null
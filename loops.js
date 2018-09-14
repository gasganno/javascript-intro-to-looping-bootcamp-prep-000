function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

var i = 0;
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  do {
    array.pop();
    incrementVariable()
  } while (array.length > 0 && incrementVariable());
  return array
}

//  function maybeTrue() {
//    return Math.random() >= 0.5;
//  }





















/*function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array = [...array, "I am 1 strange loop."]
    } else {
      array = [...array, `I am ${i} strange loops.`]
    }
    }
    return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
}
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array
}
*/

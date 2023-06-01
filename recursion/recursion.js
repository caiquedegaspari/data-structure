function factorial(n) {
  if (n === 1) {
    return n
  } else {
    return n * factorial(n -1)
  }
}

document.body.innerHTML = `<h4>${factorial(2)}</h4>`
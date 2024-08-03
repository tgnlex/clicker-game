function getName() {
  let name = prompt("Please enter your name.")
  let display = document.getElementById('spacer');
  display.innerHTML = `${name}'s shop.`
}


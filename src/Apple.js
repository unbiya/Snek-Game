class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple.jpg');

    el.appendChild(this.node);

    //this.position();
    this.node.style.left = randomPosition();
    this.node.style.top = randomPosition();
  }
  
  position () {
    this.node.style.left = randomPosition();
    this.node.style.top = randomPosition();
  }
  
}
// input: none
// output: returns a string
function randomPosition() {
  // declare a const number, assign to output of invoking random method
  const number = 50 * Math.floor(Math.random() * (650/50 + 1));
  // return a string which is number concatenated with px
  return `${number}px`;
}
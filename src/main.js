document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  const head = new Head(board);
  const apple = new Apple(board);

  // console.log(`Apple Top: ${apple.node.style.top}, Apple Left: ${apple.node.style.left}`);
  // console.log(`Snake Top: ${head.node.style.top}, Snake Left: ${head.node.style.left}`);
  // setInterval(eat, speed);

  function eat() {

    // console.log(`Apple Top: ${apple.node.style.top}, Apple Left: ${apple.node.style.left}`);
    // console.log(`Snake Top: ${head.node.style.top}, Snake Left: ${head.node.style.left}`);
    //check if the position of head and apple are the same
    if (head.node.style.top === apple.node.style.top && head.node.style.left === apple.node.style.left) {
      console.log('Ate apple');
    }
    
  }

  // setInterval(eat, 250);

  // body.onclick = () => apple.position();

  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
      console.log('pressed left');
      head.currentDirection = 'left';
    }
    if (e.code === 'ArrowRight') {
      console.log('pressed right');
      head.currentDirection = 'right';
    }
    if (e.code === 'ArrowUp') {
      console.log('pressed up');
      head.currentDirection = 'up';
    }
    if (e.code === 'ArrowDown') {
      console.log('pressed down');
      head.currentDirection = 'down';
    }
  });
});

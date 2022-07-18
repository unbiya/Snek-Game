document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  const head = new Head(board);
  const apple = new Apple(board);

  // setInterval(eat, speed);

  // function eat() {
    // check if the position of head and apple are the same
    // if (head.node.style.top === apple.node.style.top && head.node.style.left === apple.node.style.left) {
    //   apple.position();
    // }
    
  // }

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

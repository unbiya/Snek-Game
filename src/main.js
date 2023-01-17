document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded')
  const body = document.querySelector('body');
  const board = document.querySelector('#board');
  const score = document.createElement('h1');
  let counter = 0;
  score.textContent = `Score: ${counter}`;
  document.body.appendChild(score);

  const head = new Head(board);
  const apple = new Apple(board);

  // console.log(`Apple Top: ${apple.node.style.top}, Apple Left: ${apple.node.style.left}`);
  // console.log(`Snake Top: ${head.node.style.top}, Snake Left: ${head.node.style.left}`);
  // setInterval(eat, speed);
  let tail = head;
  function eat() {
    //check if the position of head and apple are the same
    if (head.node.style.top === apple.node.style.top && head.node.style.left === apple.node.style.left) {
      // send apple to random new position 
      apple.position();
      // create new body passing in el and previous segment
      tail = new Body(board, tail);
      score.textContent = `Score: ${++counter}`;
      head.SPEED -= 10;
      console.log('speed', head.SPEED);
    }
  }

  setInterval(eat, head.SPEED);

  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft' && head.currentDirection !== 'right') {
      console.log('pressed left');
      head.currentDirection = 'left';
    }
    if (e.code === 'ArrowRight' && head.currentDirection !== 'left') {
      console.log('pressed right');
      head.currentDirection = 'right';
    }
    if (e.code === 'ArrowUp' && head.currentDirection !== 'down') {
      console.log('pressed up');
      head.currentDirection = 'up';
    }
    if (e.code === 'ArrowDown' && head.currentDirection !== 'up') {
      console.log('pressed down');
      head.currentDirection = 'down';
    }
  });
});

  // console.log(`Apple Top: ${apple.node.style.top}, Apple Left: ${apple.node.style.left}`);
    // console.log(`Snake Top: ${head.node.style.top}, Snake Left: ${head.node.style.left}`);
    

  // body.onclick = () => apple.position();
class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    // this.node.setAttribute('src', 'src/assets/snake.jpg');
    el.appendChild(this.node);

    this.currentDirection = null;
    this.SPEED = 250;

    this.node.style.top = '0px';
    this.node.style.left = '0px';

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;
    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));
    this.prevLeft = leftPosition;
    this.prevTop = topPosition;

    // position movements depending on direction
    if (direction === 'right') {
      head.style.left = `${(leftPosition += 50)}px`;
      if (leftPosition >= 700) {
        alert('game end');
        head.style.left = `${leftPosition -= 50}px`;
        return;
      }
    }
    if (direction === 'left') {
      head.style.left = `${(leftPosition -= 50)}px`;
      //checkApple(topPosition, leftPosition)
      if (leftPosition <= -50) {
        alert('game end');
        head.style.left = `${leftPosition += 50}px`;
        return;
      }
    }
    if (direction === 'up') {
      head.style.top = `${(topPosition -= 50)}px`;
      if (topPosition <= -50) {
        alert('game end');
        head.style.top = `${topPosition += 50}px`;
        return;
      }
    }
    if (direction === 'down') {
      head.style.top = `${(topPosition += 50)}px`;
      if (topPosition >= 700) {
        alert('game end');
        head.style.top = `${topPosition -= 50}px`;
        return;
      }
    }

    setTimeout(this.move.bind(this), this.SPEED);
  }
}

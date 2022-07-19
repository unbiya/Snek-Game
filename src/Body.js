class Body {
    constructor(el, segment) {
      this.node = document.createElement('div');
      this.node.setAttribute('class', 'body');
      el.appendChild(this.node);
      
      this.previous = segment;
      //this.currentDirection = this.previous.currentDirection;
      this.SPEED = this.previous.speed;
      this.node.style.top = this.previous.prevTop;
      this.node.style.left = this.previous.prevLeft;
      
  
      setTimeout(this.move.bind(this), this.SPEED);
    }
  
    move() {
      const body = this.node;
      //const direction = this.currentDirection = this.previous.currentDirection;
      
      let topPosition = this.previous.prevTop;
    //   Number(this.previous.node.style.top.replace('px', ''));
      let leftPosition = this.previous.prevLeft;
    //   Number(this.previous.node.style.left.replace('px', ''));
      this.prevTop = topPosition;
      this.prevLeft = leftPosition;  

      body.style.left = `${leftPosition}px`;
      body.style.top = `${topPosition}px`;
  
      // position movements depending on direction
    //   if (direction === 'right') {
    //     body.style.left = `${(leftPosition += 50)}px`;
    //     }
      
    //   if (direction === 'left') {
    //     body.style.left = `${(leftPosition -= 50)}px`;
    //     }
      
    //   if (direction === 'up') {
    //     body.style.top = `${(topPosition -= 50)}px`;
    //     }
      
    //   if (direction === 'down') {
    //     body.style.top = `${(topPosition += 50)}px`;
    //     }
      
  
      setTimeout(this.move.bind(this), this.SPEED);
    }
  }
  
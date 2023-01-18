class Body {
  constructor(el, arr, num) {
    this.node = document.createElement('div');
    this.node.setAttribute('class', 'body');
    el.appendChild(this.node);
    console.log('arr', arr);
    this.position = arr;
    this.num = num;

    // this.node.style.top = arr[0][0]
    // this.node.style.left = arr[0][1]

    setTimeout(this.move.bind(this), 250);
  }

  move() {
    console.log(this.position[this.position.length - 1])
    this.node.style.top = this.position[this.position.length - this.num][0];
    this.node.style.left = this.position[this.position.length - this.num][1];
    setTimeout(this.move.bind(this), 250);
  }
}


// class Body {
//     constructor(el, segment) {
//       this.node = document.createElement('div');
//       this.node.setAttribute('class', 'body');
//       el.appendChild(this.node);
      
//       this.previous = segment;
//       //this.currentDirection = this.previous.currentDirection;
//       this.SPEED = this.previous.speed;
//       this.node.style.top = this.previous.prevTop;
//       this.node.style.left = this.previous.prevLeft;
      
  
//       setTimeout(this.move.bind(this), this.SPEED);
//     }
  
//     move() {
//       const body = this.node;
//       //const direction = this.currentDirection = this.previous.currentDirection;
//       let topPosition = this.previous.prevTop;
//     //   Number(this.previous.node.style.top.replace('px', ''));
//       let leftPosition = this.previous.prevLeft;
//     //   Number(this.previous.node.style.left.replace('px', ''));
//       this.prevTop = topPosition;
//       this.prevLeft = leftPosition;  

//       body.style.left = `${leftPosition}px`;
//       body.style.top = `${topPosition}px`;
  
//       setTimeout(this.move.bind(this), this.SPEED);
//     }
//   }
  
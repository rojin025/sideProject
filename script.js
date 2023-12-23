'use strict';

let x = false;
let y = true;

if(y) x= true;
if(x) console.log("I an false");

const interface = 'audio';

  function printArea() {
    const area = this.length * this.width;
    const [name, color] = this.getNameAndColor();
    console.log(`The area of the ${name} ${color} is {area}`);
    return area;
  }
}

console.log(`Start`);
[1, 2, 3].forEach((i) => setTimeout((_) => console.log(i)), 0);
console.log(`Finish`);

class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends SwimmingBird {}

function makeFlyingBirdFly(bird) {
  bird.fly();
}
function makeSwimmingBirdswim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdswim(penguin);

//But this has a problem in inheritance. Do study more about composition and inheritance

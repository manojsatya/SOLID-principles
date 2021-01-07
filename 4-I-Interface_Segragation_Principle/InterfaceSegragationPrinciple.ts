interface swimmer {
  swim: () => void;
}

interface runner {
  run: () => void;
}

type athlete = swimmer & runner;

class SwimmerAthlete implements swimmer {
  swim() {
    console.log("Athlete can swim");
  }

  sleep() {
    console.log("Athlete should sleep");
  }
}

class RunnerAthlete implements runner {
  run() {
    console.log("Athlete can run");
  }
}

class Athlete implements athlete {
  swim() {
    console.log("Athlete can swim");
  }

  run() {
    console.log("Athlete can run");
  }
}

const john = new SwimmerAthlete();
const manoj = new RunnerAthlete();
const superman = new Athlete();
john.sleep();
manoj.run();
superman.run();
superman.swim();

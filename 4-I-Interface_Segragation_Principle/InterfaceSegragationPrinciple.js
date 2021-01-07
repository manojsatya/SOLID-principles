var SwimmerAthlete = /** @class */ (function () {
    function SwimmerAthlete() {
    }
    SwimmerAthlete.prototype.swim = function () {
        console.log("Athlete can swim");
    };
    SwimmerAthlete.prototype.sleep = function () {
        console.log("Athlete should sleep");
    };
    return SwimmerAthlete;
}());
var RunnerAthlete = /** @class */ (function () {
    function RunnerAthlete() {
    }
    RunnerAthlete.prototype.run = function () {
        console.log("Athlete can run");
    };
    return RunnerAthlete;
}());
var Athlete = /** @class */ (function () {
    function Athlete() {
    }
    Athlete.prototype.swim = function () {
        console.log("Athlete can swim");
    };
    Athlete.prototype.run = function () {
        console.log("Athlete can run");
    };
    return Athlete;
}());
var john = new SwimmerAthlete();
var manoj = new RunnerAthlete();
var superman = new Athlete();
john.sleep();
manoj.run();
superman.run();
superman.swim();

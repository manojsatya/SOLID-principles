// import logMessage from "./Logger.js";
import { Logger } from "./Logger.js";

const Log = new Logger();

class CalorieCalculator {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    Log.Message(this.currentCalories);
    if (this.currentCalories > this.maxCalories) {
      Log.surplusMessage("Test");
    }
  }
}

const calorieTracker = new CalorieCalculator(2000);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(600);

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(quantity * 200);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(quantity * 15);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }

  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of ${amountInCents / 100} with stripe`
    );
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of ${amountInDollars} with paypal`);
  }
}

const user1 = new StripePaymentProcessor("John");
const user2 = new PaypalPaymentProcessor("Manoj");

const store1 = new Store(user1);
store1.purchaseBike(2);
store1.purchaseHelmet(2);

const store2 = new Store(user2);
store2.purchaseHelmet(4);
store2.purchaseBike(3);

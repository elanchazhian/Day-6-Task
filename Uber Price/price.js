class UberPriceCalculator {
    constructor(baseFare, costPerKilometer) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
    }

    calculatePrice(distance) {
        const distanceCost = distance * this.costPerKilometer;
        
        const totalPrice = this.baseFare + distanceCost;
        return totalPrice;
    }
}

const uberCalculator = new UberPriceCalculator(3, 2); // Base fare, cost per kilometer

const distanceTraveled = 100; // in kilometers

const totalPrice = uberCalculator.calculatePrice(distanceTraveled);
console.log(`Uber Price: $${totalPrice}`);

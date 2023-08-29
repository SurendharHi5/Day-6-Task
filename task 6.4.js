//4.write a class to calculate the uber price

class uberPrice {
    constructor(baseFare, costPerMinute, costPerMile, rideDistance, bookingFee ) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
      this.rideDistance = rideDistance;
      this.bookingFee = bookingFee;
         
    }
  
    totalPrice() {
      return this.baseFare + this.costPerMinute + (this.costPerMile * this.rideDistance) + this.bookingFee ;
    }
  }
  
  let uber = new uberPrice(20, 4, 10, 10, 30);
  console.log(uber.totalPrice());
  
  //output :
  //----------
  //154
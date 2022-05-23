import { loadStripe } from "@stripe/stripe-js";

let stripePromise; //variable undefined for now

const getStripe = () => {
  if (!stripePromise) {
    //check to see if stripe promise exists
    stripePromise = loadStripe(
      "pk_test_51L1Ia4CNvwSgjAVRujBr1jQiGkKih6qkAQ5zlHBAUdDutpoufKTsJRmlaSYu6MCwZXayGJERsP93y77e58VSLhF800s0TRYGQR"
    );
  }
  return stripePromise;
};

export default getStripe;

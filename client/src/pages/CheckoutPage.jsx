import axios from "axios";
import React from "react";

export default function CheckoutPage() {
  axios.get("/checkout");
  return <div>CheckoutPage</div>;
}

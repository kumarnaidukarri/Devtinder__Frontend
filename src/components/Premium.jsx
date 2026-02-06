// Premium Component used to show Buy 'Membership Plans' using 'Payment Gateway'.

import axios from "axios";
import { BASE_URL } from "../utils/constants.js";

const Premium = () => {
  // Event handlers
  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      { membershipType: type },
      { withCredentials: true },
    ); // API call to create an 'Order'
    console.log(order);
    const { razorpayKeyId, amount, currency, notes, orderId } = order.data;

    // It should open the 'Razorpay Dialog Checkout Box'
    const options = {
      key: razorpayKeyId, // Replace with your Razorpay key_id
      amount: amount / 100, // Amount is in currency subunits.
      currency: currency,
      name: "Dev tinder",
      description: "Test Transactions",
      order_id: orderId, // This is the order_id created in the backend
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
        contact: "9999999999", // phone number to verify payment
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open(); // opens the razorpay dialog box
    /* when react app loads, the razorpay js script file in HTML file will attach its 'Razorpay Object' to the "window" object */
  };

  return (
    <div>
      <h1 className="my-4 mb-8"> Premium Page </h1>

      {/* DaisyUI component - Divider horizontal */}
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-auto grow place-items-center  px-4 py-12 gap-4 justify-center">
          <h1 className="font-bold text-xl"> Silver Membership </h1>
          <ul>
            <li> - Chat with other people</li>
            <li> - 100 Connection requests per day </li>
            <li> - No Blue tick mark </li>
            <li> - 1 Month </li>
          </ul>
          <button
            className="btn btn-secondary"
            onClick={() => handleBuyClick("silver")}
          >
            Buy Silver
          </button>
        </div>

        <div className="divider divider-horizontal">OR</div>

        <div className="card bg-base-300 rounded-box grid h-auto grow place-items-center px-4 py-12 justify-center">
          <h1 className="font-bold text-xl"> Gold Membership </h1>
          <ul>
            <li> - Chat with other people</li>
            <li> - Infinite Connection requests per day </li>
            <li> - Blue tick mark </li>
            <li> - 3 Months </li>
          </ul>
          <button
            className="btn btn-primary"
            onClick={() => handleBuyClick("gold")}
          >
            Buy Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;

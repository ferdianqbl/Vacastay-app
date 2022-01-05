import React, { useState } from "react";
import Meta from "../components/Stepper/Meta/Meta";
import BookingInformation from "../parts/Checkout/BookingInformation";
import itemDetails from "../json/itemDetails.json";

const Test = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    proofPayment: "",
    bankName: "",
    bankHolder: "",
  });

  const onChange = (e) => {
    setData({
      data: {
        ...data,
        [e.target.name]: e.target.value,
      },
    });
  };

  const checkout = {
    duration: 3,
  };
  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill up the blank fields below",
      content: (
        <BookingInformation
          data={data}
          checkout={checkout}
          itemDetails={itemDetails}
          onChange={onChange}
        />
      ),
    },
  };

  return <Meta data={steps} current={steps.bookingInformation} />;
};

export default Test;

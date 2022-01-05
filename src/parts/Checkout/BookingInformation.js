import React from "react";
import { InputText } from "components/Form/Form";
import "./Checkout.scss";
// import { Fade } from "react-awesome-reveal";

const BookingInformation = (props) => {
  const { data, itemDetails, checkout } = props;

  return (
    <div
      className="booking-information container"
      id="booking-information"
      style={{ marginBottom: "1.875rem" }}
    >
      <div className="row justify-content-center align-items-center">
        <div
          className="col-md-5 border-end py-5"
          style={{ paddingRight: "5rem" }}
        >
          <div className="card">
            <figure className="img-wrapper">
              <img
                src={itemDetails.imageUrls[0].url}
                alt={itemDetails.name}
                className="img-cover img-fluid"
              />
            </figure>

            <div className="row align-items-center">
              <div className="col">
                <div className="meta-wrapper">
                  <h5 style={{ fontSize: "1.5rem", lineHeight: "2.25rem" }}>
                    {itemDetails.name}
                  </h5>
                  <span className="text-gray" style={{ fontSize: "1.125rem" }}>
                    {itemDetails.city}, {itemDetails.country}
                  </span>
                </div>
              </div>

              <div className="col-auto">
                <span className="checkout-item-price-text">
                  ${+checkout.duration * itemDetails.price} USD
                  <span className="text-gray"> per </span>
                  {checkout.duration} {itemDetails.unit}
                  {+checkout.duration > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5 py-5" style={{ paddingLeft: "5rem" }}>
          <label htmlFor="firstName" className="checkout-label">
            First Name
          </label>
          <InputText
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={props.onChange}
          />

          <label htmlFor="lastName" className="checkout-label">
            Last Name
          </label>
          <InputText
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={props.onChange}
          />

          <label htmlFor="email" className="checkout-label">
            Email Address
          </label>
          <InputText
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={props.onChange}
          />

          <label htmlFor="phone" className="checkout-label">
            Phone Number
          </label>
          <InputText
            id="phone"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingInformation;

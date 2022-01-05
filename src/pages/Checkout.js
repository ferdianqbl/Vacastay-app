import Button from "components/Button/Button";
import Navbar from "parts/Navbar";
import React, { Component } from "react";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "../components/Stepper/Stepper";

import BookingInformation from "../parts/Checkout/BookingInformation";
import Payment from "../parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";

import itemDetails from "../json/itemDetails.json";
// import { Fade } from "react-awesome-reveal";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (e) => {
    console.log(e.target.name);
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Vacastay | Checkout";
  }

  render() {
    const { data } = this.state;

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
            onChange={this.onChange}
          />
        ),
      },

      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            checkout={checkout}
            itemDetails={itemDetails}
            onChange={this.onChange}
          />
        ),
      },

      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };

    return (
      <div style={{ marginTop: "8rem", marginBottom: "3.125rem" }}>
        <Navbar isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => {
            return (
              <>
                <Numbering
                  data={steps}
                  current={CurrentStep}
                  style={{ marginBottom: "3.125rem" }}
                />

                <Meta data={steps} current={CurrentStep} />

                <MainContent data={steps} current={CurrentStep} />

                {CurrentStep === "bookingInformation" && (
                  <Controller>
                    {data.firstName !== "" &&
                      data.lastName !== "" &&
                      data.email !== "" &&
                      data.phone !== "" && (
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      )}
                    <Button
                      className="btn"
                      type="link"
                      isBlock
                      isLight
                      href={`/properties/${checkout._id}`}
                    >
                      Cancel
                    </Button>
                  </Controller>
                )}

                {CurrentStep === "payment" && (
                  <Controller>
                    {data.proofPayment !== "" &&
                      data.bankName !== "" &&
                      data.bankHolder !== "" && (
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      )}
                    <Button
                      className="btn"
                      type="button"
                      isBlock
                      isLight
                      onClick={prevStep}
                    >
                      Cancel
                    </Button>
                  </Controller>
                )}

                {CurrentStep === "completed" && (
                  <Controller>
                    <Button
                      className="btn"
                      type="link"
                      isBlock
                      isPrimary
                      hasShadow
                      href="/"
                    >
                      Back to Home
                    </Button>
                  </Controller>
                )}
              </>
            );
          }}
        </Stepper>
      </div>
    );
  }
}

export default Checkout;

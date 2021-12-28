import React, { Component } from "react";
import propTypes from "prop-types";
import Button from "components/Button/Button";
import InputDate from "components/Form/InputDate/InputDate";
import InputNumber from "components/Form/InputNumber/InputNumber";
import { Zoom } from "@stahl.luke/react-reveal";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate(); // fungsi getDate akan mengembalikan tanggal saja

      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );

      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;

    return (
      <Zoom cascade>
        <div className="card bordered" style={{ padding: `3.75rem 5rem` }}>
          <h4 className="feature-heading mb-3">Start Booking</h4>
          <p className="booking-big-text">
            ${itemDetails.price} <span>per {itemDetails.unit}</span>
          </p>

          <label htmlFor="duration" style={{ marginBottom: `.625rem` }}>
            How long will you stay?
          </label>
          <InputNumber
            max={31}
            suffix={` night`}
            isSuffixPlural
            onChange={this.updateData}
            name="duration"
            value={data.duration}
          />

          <label htmlFor="date" style={{ marginBottom: `.625rem` }}>
            Pick a Date
          </label>
          <InputDate onChange={this.updateData} name="date" value={data.date} />

          <p
            className="booking-text"
            style={{ marginTop: ".9375rem", marginBottom: "2.5rem" }}
          >
            You will pay
            <span> ${itemDetails.price * data.duration} USD</span> per{" "}
            <span>
              {itemDetails.duration} {itemDetails.unit}
            </span>
          </p>

          <Button
            className="btn"
            hasShadow
            isPrimary
            isBlock
            onClick={startBooking}
          >
            Continue Book
          </Button>
        </div>
      </Zoom>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default BookingForm;

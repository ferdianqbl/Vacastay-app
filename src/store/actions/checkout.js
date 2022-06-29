import { CHECKOUT_BOOKING } from "store/types";

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({ type: CHECKOUT_BOOKING, payload });
};

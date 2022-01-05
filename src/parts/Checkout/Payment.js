import React from "react";
import { InputText, InputFile } from "components/Form/Form";
import "./Checkout.scss";

import BCALogo from "../../assets/images/bca-logo.png";
import MandiriLogo from "../../assets/images/mandiri-logo.png";
// import { Fade } from "react-awesome-reveal";

const Payment = (props) => {
  const { data, itemDetails, checkout } = props;

  const tax = 10;
  const subTotal = itemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <div className="payment" id="payment">
      <div className="container" style={{ marginBottom: "1.875rem" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-end py-5" style={{ paddingRight: 80 }}>
            <p className="mb-4">Transfer Pembayaran:</p>
            <p>Tax: {tax}%</p>
            <p>Sub total: ${subTotal} USD</p>
            <p>Total: ${grandTotal} USD</p>
            <div className="row mt-4">
              <div className="col-3 text-right">
                <img src={BCALogo} alt="bank central asia" width="60" />
              </div>
              <div className="col-auto">
                <dl>
                  <dd>Bank Central Asia</dd>
                  <dd>2208 1996</dd>
                  <dd>Vacastay</dd>
                </dl>
              </div>
            </div>

            <div className="row">
              <div className="col-3 text-right">
                <img src={MandiriLogo} alt="mandiri" width="60" />
              </div>
              <div className="col-auto">
                <dl>
                  <dd>Bank Mandiri</dd>
                  <dd>2208 1996</dd>
                  <dd>Vacastay</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <label htmlFor="proofPayment">Upload Bukti Transfer</label>
            <InputFile
              accept="image/*" // menerima image dg extension apapun
              id="proofPayment"
              name="proofPayment"
              value={data.proofPayment}
              onChange={props.onChange}
            />

            <label htmlFor="bankName">Asal Bank</label>
            <InputText
              id="bankName"
              name="bankName"
              type="text"
              value={data.bankName}
              onChange={props.onChange}
            />

            <label htmlFor="bankHolder">Nama Pengirim</label>
            <InputText
              id="bankHolder"
              name="bankHolder"
              type="text"
              value={data.bankHolder}
              onChange={props.onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

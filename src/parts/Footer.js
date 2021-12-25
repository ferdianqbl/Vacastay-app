import Button from "components/Button/Button";
import React from "react";
import IconText from "./IconText";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-3">
            <IconText link="/" />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable
            </p>
          </div>

          <div className="ps-3 col-md-3">
            <p className="footer-tag">For Beginners</p>
            <ul className="ps-0">
              <li className="ps-0">
                <Button className="p-0" type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="ps-0">
                <Button className="p-0" type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="ps-0">
                <Button className="p-0" type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>

          <div className="ps-3 col-md-3">
            <p className="footer-tag">Explore Us</p>
            <ul className="ps-0">
              <li className="ps-0">
                <Button className="p-0" type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="ps-0">
                <Button className="p-0" type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="ps-0">
                <Button className="p-0" type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>

          <div className="ps-3 col-md-3">
            <p className="footer-tag">For Beginners</p>
            <ul className="ps-0">
              <li className="ps-0">
                <Button
                  className="p-0"
                  type="link"
                  href="mailto:support@vacastay.id"
                  isExternal
                >
                  support@vacastay.id
                </Button>
              </li>
              <li className="ps-0">
                <Button
                  className="p-0"
                  type="link"
                  isExternal
                  href="tel:+622122021887"
                >
                  021 - 2202 - 1887
                </Button>
              </li>
              <li className="ps-0">
                <span>Vacastay, Karang Turi, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-12 text-center brand-tagline mt-5">
            Copyright 2021 • All rights reserved • Vacastay
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

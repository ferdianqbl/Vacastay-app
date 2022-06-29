import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "parts/Navbar";
import PageDetailsTitle from "parts/PageDetailsTitle";
import pageDetails from "../json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailsDescription from "parts/PageDetailsDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import { checkoutBooking } from "../store/actions/checkout";

const PageDetails = (props) => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Vacastay | Details Page";
  }, []);

  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  return (
    <>
      <Navbar location={location.pathname} />
      <section className="page-details" id="page-details">
        <div className="container mb-5">
          <PageDetailsTitle data={pageDetails} breadcrumb={breadcrumbList} />
          <FeaturedImage data={pageDetails.imageUrls} />
          <div className="row" style={{ marginTop: `3.125rem` }}>
            <div className="col-md-7 pe-3">
              <PageDetailsDescription data={pageDetails} />
            </div>
            <div className="col-md-5">
              <BookingForm
                itemDetails={pageDetails}
                startBooking={props.checkoutBooking}
              />
            </div>
          </div>
        </div>

        <Categories data={pageDetails.categories} />
        <Testimony data={pageDetails.testimonial} />
      </section>
      <Footer />
    </>
  );
};

export default connect(null, { checkoutBooking })(PageDetails);

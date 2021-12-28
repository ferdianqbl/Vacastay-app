import React from "react";
import { Fade } from "@stahl.luke/react-reveal";
import Button from "../components/Button/Button";

const MostPicked = (props) => {
  return (
    <section className="most-picked" id="most-picked" ref={props.refMostPicked}>
      <div className="container">
        <Fade left cascade big>
          <h3 className="section-heading">Most Picked</h3>
        </Fade>
        <Fade top cascade big>
          <div className="container-grid">
            {props.data.map((item, index) => {
              return (
                <div
                  className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
                  key={`most-picked${index + 1}`}
                >
                  <Fade bottom cascade big>
                    <div className="card card-featured">
                      <div className="tag">
                        ${item.price}
                        <span className="tag-text"> per {item.unit}</span>
                      </div>
                      <figure className="img-wrapper">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          className="stretched-link d-block text-white"
                          href={`/properties/${item._id}`}
                        >
                          <h5>{item.name}</h5>
                        </Button>
                        <span>
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default MostPicked;

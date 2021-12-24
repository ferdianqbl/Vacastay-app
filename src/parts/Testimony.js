import Button from 'components/Button/Button';
import Star from 'components/Star/Star';
import React from 'react';


const Testimony = ({ data }) => {
  return (
    <section className="testimonial" id="testimonial">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="testimonial-hero">
              <img src={data.imageUrl} alt={data.name} className="img-fluid" />
            </div>
          </div>

          <div className="col-md-7">
            <div className="testimonial-content">
              <h4 className="testimonial-heading">
                {data.name}
              </h4>
              <Star value={data.rate} width={36} height={36} spacing={0} />
              <p className="testimonial-text">
                {data.content}
              </p>
              <p className="testimonial-name">
                {data.familyName}, {data.familyOccupation}
              </p>
            </div>
            <Button className="btn px-4 py-2" hasShadow isPrimary type="link" href={`/testimonial/${data._id}`}>Read Their Story</Button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimony

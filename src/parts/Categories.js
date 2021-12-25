import Button from 'components/Button/Button'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'


function Categories({ data }) {
  return (
    data.map((category, index1) => {
      return (
        <section className={`categories category-${index1}`} id={`categories category-${index1}`} key={`category-${index1}`}>
          <div className="container">
            <Slide delay={500 * index1} triggerOnce>
              <h3 className="section-heading">
                {category.name}
              </h3>
            </Slide>
            <div className="row align-items-center">

              {
                category.items.length === 0 ?
                  (<div className="col-12 my-primary-text">
                    There is no property at this category.
                  </div>) : (
                    category.items.map((item, index2) => {
                      return (
                        <div className="col-lg-3" key={`category-${index1}-item-${index2}`}>
                          <Fade direction="up" delay={500 * index2} triggerOnce>
                            <div className="card">
                              {
                                item.isPopular && (
                                  <div className="tag">
                                    Popular <span className="tag-text">choice</span>
                                  </div>
                                )
                              }

                              <figure className="img-wrapper">
                                <img
                                  src={item.imageUrl}
                                  alt={item.name}
                                  className="img-cover"
                                />
                              </figure>

                              <div className="meta-wrapper">
                                <Button type="link" href={`/properties/${item._id}`} className="stretched-link d-block text-secondary pe-2">
                                  <h5>{item.name}</h5>
                                </Button>

                                <span className="my-primary-text pe-2">{item.city}, {item.country}</span>
                              </div>
                            </div>
                          </Fade>
                        </div>
                      )
                    })
                  )
              }

            </div>
          </div>
        </section>
      )
    })
  )
}

export default Categories

import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure this path is correct
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import './SliderComponent.css';

const SliderComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="slider-container">
      <Carousel 
        indicators={true} 
        interval={null}
        prevIcon={<i className="bi bi-caret-left-fill carousel-control-prev-icon-custom" />}
        nextIcon={<i className="bi bi-caret-right-fill carousel-control-next-icon-custom" />}
      >
        <Carousel.Item>
          <div className="quote-box" data-aos="fade-up">
            <div className="quote-content">
              <i className="bi bi-quote quote-icon-left"></i>
              <h3 className="quote-title">Lorem Ipsum</h3>
              <p className="quote-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nulla, porro corporis, perferendis pariatur quisquam eveniet unde praesentium hic aperiam officiis dolores facere modi. Fuga, sunt! Dolorem autem quia dignissimos nostrum magnam illo consectetur fugit, exercitationem dolorum sapiente, culpa sit doloribus ipsum non optio, sint qui omnis voluptas animi modi?
              </p>
              <i className="bi bi-quote quote-icon-right"></i>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="quote-box" data-aos="fade-up" data-aos-delay="300">
            <div className="quote-content">
              <i className="bi bi-quote quote-icon-left"></i>
              <h3 className="quote-title">Dolor Sit Amet</h3>
              <p className="quote-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, excepturi? Blanditiis cupiditate saepe dignissimos illum, non velit ipsum harum inventore, eius voluptate voluptates. Minus doloremque cupiditate, quaerat quidem exercitationem odio earum dignissimos? Doloribus deserunt magni minus dolore saepe sint, suscipit nisi tempore culpa tenetur explicabo pariatur atque deleniti nesciunt odio.
              </p>
              <i className="bi bi-quote quote-icon-right"></i>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="quote-box" data-aos="fade-up" data-aos-delay="600">
            <div className="quote-content">
              <i className="bi bi-quote quote-icon-left"></i>
              <h3 className="quote-title">Consectetur Adipiscing</h3>
              <p className="quote-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt officia aut amet, odit aspernatur animi, dolores consequatur, at consequuntur excepturi doloribus! Totam tenetur labore modi. Dolor, cum aliquid? Expedita, et. Iusto libero iste nihil quisquam similique. Voluptas deserunt assumenda laudantium possimus sapiente, tenetur accusamus blanditiis minima officia, eum, beatae officiis?
              </p>
              <i className="bi bi-quote quote-icon-right"></i>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="d-flex justify-content-center mt-3">
        <button className="slider-button">Slider Button</button>
      </div>
    </div>
  );
};

export default SliderComponent;

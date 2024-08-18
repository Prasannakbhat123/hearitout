import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Section1.css";

const Section1 = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>
      <div className="section1-container">
        <div>
          <h2 className="sec1_head">Lorem ipsum dolor sit amet consectetur.</h2>

          {/* Radio Buttons */}
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Lorem ipsum dolor sit amet.
            </label>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Lorem ipsum dolor sit amet.
            </label>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Lorem ipsum dolor sit amet.
            </label>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault4">
              Lorem ipsum dolor sit amet.
            </label>
          </div>

          {/* Dropdown */}
          <select
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="custom-dropdown"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          {/* Checkboxes */}
          <h2 className="sec1_head" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="checkbox1">
              Lorem ipsum dolor sit amet.
            </label>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox2"
            />
            <label className="form-check-label" htmlFor="checkbox2">
              Lorem ipsum dolor sit amet.
            </label>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox3"
            />
            <label className="form-check-label" htmlFor="checkbox3">
              Lorem ipsum dolor sit amet.
            </label>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900" className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox4"
            />
            <label className="form-check-label" htmlFor="checkbox4">
              Lorem ipsum dolor sit amet.
            </label>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center sec_but_con">
        <button className="sec1-button">Submit</button>
      </div>
    </>
  );
};

export default Section1;

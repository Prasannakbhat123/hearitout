import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TVShowsAccordion.css';

const categories = ['cars', 'space', 'mystery', 'adventure'];

const TvShowsAccordion = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${selectedCategory}`);
        setShows(response.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, [selectedCategory]);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const cardColorClass = (index) => {
    switch (index) {
      case 0:
        return 'card-blue';
      case 1:
        return 'card-red';
      case 2:
        return 'card-yellow';
      default:
        return '';
    }
  };

  const truncateText = (text, maxWords) => {
    const wordsArray = text.split(' ');
    if (wordsArray.length > maxWords) {
      return wordsArray.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  // Define delays for each card
  const animationDelays = [0, 200, 400]; // Delay in milliseconds

  return (
    <div className="p-4">
      <div className="dropdown-container">
        <select
          className="dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="cards-container">
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : shows.length > 0 ? (
          shows.map((show, index) => {
            let oldPrice, newPrice;
            if (index === 0) {
              oldPrice = '4999';
              newPrice = '4499';
            } else if (index === 1) {
              oldPrice = '9999';
              newPrice = '8999';
            } else {
              oldPrice = '14999';
              newPrice = '12499';
            }

            return (
              <div
                key={index}
                className={`card ${cardColorClass(index)}`}
                data-aos="fade-up" // Add AOS attribute for animation
                data-aos-duration="1000" // Set duration
                data-aos-delay={animationDelays[index]} // Set delay
              >
                <div className="type">
                  {show.show.type}
                </div>
                <h3 className="text-lg font-bold">{show.show.name}</h3>
                <p className="text-sm text-gray-600">
                  {truncateText(show.show.summary.replace(/<[^>]+>/g, ''), 70)}
                </p>
                <div className="price">
                  <span className="price-old">₹{oldPrice}</span>
                  <span className="price-new">₹{newPrice}/-</span>
                </div>
                <button className="card-button" onClick={() => window.open(show.show.url, '_blank')}>
                  Click
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600">No shows found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default TvShowsAccordion;

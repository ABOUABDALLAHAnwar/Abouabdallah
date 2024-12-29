import React from 'react';

import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faInstagram, faKaggle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-widget">
        <ul className="social-media">
          <li className="icons">
            <a
              href="https://www.linkedin.com/in/anwarabouabdallah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" color="white" />
            </a>
          </li>
          <li className="icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
            </a>
          </li>
          <li className="icons">
            <a
              href="https://www.kaggle.com/mawro73"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faKaggle} size="lg" color="white" />
            </a>
          </li>
        </ul>
      </div>
      <div className="buy-me-a-coffee">
        <a
          href="https://buymeacoffee.com/maabouabdak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me a Coffee"
            style={{ height: '50px', width: 'auto' }}
          />
        </a>
      </div>
      <div className="footer">
        <small>&#9400; Mohamed Anwar ABOUABDALLAH</small>
      </div>
    </footer>
  );
};

export default Footer;

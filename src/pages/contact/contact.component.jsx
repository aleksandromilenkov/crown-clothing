import React from "react";
import { SocialIcon } from "react-social-icons";
import "./contact.styles.scss";
const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>CONTACT</h1>
      <h4>We'd ❤ to help!</h4>
      <div className="contact-info">
        <div className="contact-location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div>
            Crown Clothing Ltd.
            <br />
            <span>Sveti Nikole, Macedonia</span>
          </div>
        </div>
        <div className="contact-mobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>
            <a href="tel:+389704524234">(+389) 70 452 4234</a>
          </span>
        </div>
        <div className="contact-email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>
            <a href="mailto:crownClothing@svNikole.com">
              crownClothing@svNikole.com
            </a>
          </span>
        </div>
        <div className="contact-breakline"></div>
        <div className="contact-social">
          <h6>Follow us on social media</h6>
          <div className="contact-social-container">
            <SocialIcon network="facebook" />
            <SocialIcon network="instagram" />
            <SocialIcon network="linkedin" />
            <SocialIcon network="github" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

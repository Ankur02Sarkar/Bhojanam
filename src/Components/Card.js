import React, { useState } from "react";

const Card = ({ name, pack }) => {
  const [activeSection, setActiveSection] = useState("#about");
  const [activeCard, setActiveCard] = useState(1);
  const handleButtonClick = (targetSection, cardIndex) => {
    setActiveSection(targetSection);
    setActiveCard(cardIndex);
    console.log("From Card.js Name :: ", name);
    console.log("From Card.js Pack :: ", pack);
  };
  return (
    <div className="">
      <div
        className={`card ${activeSection !== "#about" ? "is-active" : ""}`}
        data-state={activeSection}
      >
        <div className="card-header">
          <div className="card-cover"></div>
          <img
            className="card-avatar"
            src="https://www.pngfind.com/pngs/b/118-1185076_silver-png-hd-png-hd-image-all-type.png"
            alt="avatar"
          />
          <h1 className="card-fullname">{pack} Package</h1>
          <h2 className="card-jobtitle">399</h2>
        </div>
        <div className="card-main">
          <div
            className={`card-section ${activeCard === 1 ? "is-active" : ""}`}
            id="about"
          >
            <div className="card-content">
              <div className="card-subtitle">{name}</div>
              <p className="card-desc">
                {name} Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit laboriosam vitae praesentium magnam voluptas saepe
                quibusdam
              </p>
            </div>
          </div>

          <div
            className={`card-section ${activeCard === 2 ? "is-active" : ""}`}
            id="experience"
          >
            <div className="card-content">
              <div className="card-subtitle">ABC</div>
              <div className="card-timeline">
                <div className="card-item" /*data-year="2014"*/>
                  <div className="card-item-title">
                    Lorem Ipsum <span>Lorem</span>
                  </div>
                  <div className="card-item-desc">
                    Lorem IpsumLorem IpsumLorem Ipsum
                  </div>
                </div>
                <div className="card-item" /*data-year="2016"*/>
                  <div className="card-item-title">
                    Lorem Ipsum <span>Lorem</span>
                  </div>
                  <div className="card-item-desc">
                    Lorem IpsumLorem IpsumLorem Ipsum
                  </div>
                </div>
                <div className="card-item" /*data-year="2018"*/>
                  <div className="card-item-title">
                    Lorem Ipsum <span>Lorem</span>
                  </div>
                  <div className="card-item-desc">
                    Lorem IpsumLorem IpsumLorem Ipsum
                  </div>
                </div>
                <div className="card-item" /*data-year="2020"*/>
                  <div className="card-item-title">
                    Lorem Ipsum <span>Lorem</span>
                  </div>
                  <div className="card-item-desc">
                    Lorem IpsumLorem IpsumLorem Ipsum
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`card-section ${activeCard === 3 ? "is-active" : ""}`}
            id="contact"
          >
            <div className="card-content">
              <div className="card-subtitle">Lorem</div>
              <div className="card-contact-wrapper">
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Lorem Ipsum dolor init
                </div>
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  6969696969
                </div>
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  ankur@sarkar.com
                </div>
                <button className="contact-me">Contact</button>
              </div>
            </div>
          </div>

          <div className="card-buttons">
            <button
              className={`card-nav-item ${
                activeSection === "#about" ? "is-active" : ""
              }`}
              onClick={() => handleButtonClick("#about", 1)}
            >
              About
            </button>
            <button
              className={`card-nav-item ${
                activeSection === "#experience" ? "is-active" : ""
              }`}
              onClick={() => handleButtonClick("#experience", 2)}
            >
              Experience
            </button>
            <button
              className={`card-nav-item ${
                activeSection === "#contact" ? "is-active" : ""
              }`}
              onClick={() => handleButtonClick("#contact", 3)}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

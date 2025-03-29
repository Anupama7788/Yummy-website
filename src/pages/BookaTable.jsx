import React from "react";
import "../styles/BookaTable.css";
import tableImg from "../assets/images/reservation.jpg"; 

const BookaTable = () => {
  return (
    <section id="book-a-table" className="book-a-table section">
      <div className="container4">
        {/* Title */}
        <div className="section4-title" >
          <h2>BOOK A TABLE</h2>
          <p>
            <span>BOOK YOUR</span> <span className="description-title">STAY WITH US</span>
          </p>
        </div>

        {/* Content */}
        <div className="book-container">
          {/* Left Side - Image */}
          <div className="book-image" >
            <img src={tableImg} alt="Book a Table" />
          </div>

          {/* Right Side - Form */}
          <div className="book-form" >
            <form action="#" method="post" className="php-email-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="text" name="phone" placeholder="Your Phone" required />
              </div>
              <div className="form-group">
                
                <input type="date" name="date" placeholder="Date" required />
                <input type="time" name="time" placeholder="Time" required />
                <input
        type="number"
        name="people"
        placeholder="# of People"
        min="1"
        max="20"
        required
      />
              </div>
              <textarea name="message" rows="5" placeholder="Message" required></textarea>
              <div className="button-container">
              <button type="submit">Book a Table</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookaTable;

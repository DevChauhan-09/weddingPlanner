import React from "react";
import "./VenueDetails.css";

const VenueDetails = () => {
  return (
    <div className="venue-page">
      <div className="venue-container">
        {/* Left Side */}
        <div className="left-panel">
          <img
            src="/images/D1.jpeg"
            alt="Venue"
            className="venue-image"
          />
          <h2 className="venue-title">Hyatt Regency Delhi</h2>
          <p className="location">New Delhi, Delhi NCR</p>
          <p className="address">
            Ring Road, Bhikaji Cama Place, RK Puram, New Delhi, Delhi 110066
          </p>
          <div className="rating-row">
            <span className="rating">⭐ 4.8</span>
            <span className="reviews">13 reviews</span>
          </div>
          <div className="btn-group">
            <button className="btn pink" onClick={() => alert("Review Form Open")}>Write a Review</button>
            <button className="btn gray" onClick={() => navigator.share?.({ title: 'Hyatt Regency', text: 'Check out this venue', url: window.location.href }) || alert('Share this URL')}>Share</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-panel">
          <div className="pricing">
            <h3>Starting Price</h3>
            <p className="veg-price">₹ 5,000 per plate (Veg)</p>
            <p className="nonveg-price">₹ 6,000 per plate (Non-Veg)</p>
          </div>
          <div className="contact-btns">
            <button className="btn green" onClick={() => alert("Call: +91-1234567890")}>📞 View Contact</button>
            <button className="btn pink" onClick={() => alert("Message Sent")}>📩 Send Message</button>
          </div>

          <form className="form-section" onSubmit={(e) => { e.preventDefault(); alert("Availability Checked") }}>
            <h4>Hi Hyatt Regency Delhi,</h4>
            <input type="text" placeholder="Apurva Salphale" required />
            <input type="email" placeholder="salphaleapurva@gmail.com" required />
            <div className="phone-group">
              <input type="text" placeholder="+91" className="code" required />
              <input type="text" placeholder="Phone number" className="phone" required />
            </div>
            <input type="text" placeholder="Function date" required />
            <input type="number" placeholder="No. of guests" required />
            <input type="number" placeholder="No. of rooms" required />

            <div className="radio-group">
              <label>Function Type</label>
              <div>
                <input type="radio" name="type" value="Pre-Wedding" required /> Pre-Wedding
                <input type="radio" name="type" value="Wedding" /> Wedding
              </div>
            </div>
            <div className="radio-group">
              <label>Function Time</label>
              <div>
                <input type="radio" name="time" value="Evening" required /> Evening
                <input type="radio" name="time" value="Day" /> Day
              </div>
            </div>

            <button className="btn pink full" type="submit">
              ✅ Check Availability
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
import React from 'react';

const UserTestimony = ({ testimonials }) => {
  return (
    <section className="user-testimony">
      <h2>User Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-user">- {testimonial.user}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserTestimony;

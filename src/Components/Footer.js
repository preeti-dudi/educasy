import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import '../Styles/FooterStyles.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-logo">
          
        <div className="footer-description">
          <p><span className='colored-text'>Educasy</span><br/>
          Educasy is dedicated to bringing quality education to learners worldwide, making knowledge accessible and engaging for all.</p>
        </div>
        </div>

        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/support">Support</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@educasy.com</p>
          <p>Phone: +1 (800) 123-4567</p>
        <div className="footer-social">
          <a href="https://facebook.com/educasy" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com/educasy" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com/educasy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com/company/educasy" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://youtube.com/educasy" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Educasy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

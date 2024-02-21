import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/prasanth-gavvala-442b4327b" aria-label="checkout my linkedin profile">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/pintuuuuu_2?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" aria-label="checkout my instagram account">
            <i className="fab fa-instagram"></i>
          </a>
          
          <Link to="/about" aria-label="Learn more about rgukt sklm grade calculator for puc and btech">
            <i className="fa fa-info-circle"></i>

          </Link>
        </div>
        <div className="copyright">
          &copy; 2023 Grade Calc 2.0. All Rights Reserved.
        </div>
        <div className="designed-by">Prasanth Gavvala</div>
      </div>
    </footer>
  );
}

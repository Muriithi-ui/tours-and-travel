import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon"></i>
              <div>
                <h4>Address</h4>
                <p>
                  A104 Bellevue <br />
                  Mombasa Road, NBO 535022 - KE<br />
                </p>
              </div>

            </div>

            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-telephone icon"></i>
              <div>
                <h4>Reservations</h4>
                <p>
                  <strong>Phone:</strong> +254 7 1259 0033<br />
                  <strong>Email:</strong> mongarerobert3@gmail.com@example.com<br />
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-clock icon"></i>
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>Mon-Sat: 9:00AM</strong> - 5:30PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
              <a href="#twitter" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#twitter" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#twitter" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#twitter" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>

          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Tours n travel</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="robertmongare.live">Courte Labs</a>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
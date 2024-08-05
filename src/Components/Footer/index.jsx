import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Site Footer Two Start */}
      <footer className="site-footer-two">
        <div
          className="site-footer-two__shape-1 img-bounce"
          style={{
            backgroundImage:
              "url(assets/images/shapes/site-footer-two-shape-1.png",
          }}
        ></div>
        <div className="site-footer-two__top">
          <div className="container">
            <div className="site-footer-two__top-inner">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget-two__column footer-widget-two__about">
                    <div className="footer-widget-two__logo">
                      <Link to="/">
                        <img
                          src="assets/images/resources/footer-logo-2.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <p className="footer-widget-two__about-text">
                      Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is
                      simply
                    </p>
                    <div className="site-footer-two__social">
                      <Link to="#">
                        <i className="icon-facebook"></i>
                      </Link>
                      <Link to="#">
                        <i className="icon-twitter"></i>
                      </Link>
                      <Link to="#">
                        <i className="icon-link-in"></i>
                      </Link>
                      <Link to="#">
                        <i className="icon-pinterest"></i>
                      </Link>
                    </div>
                    <form className="footer-widget-two__about-form mc-form">
                      <div className="footer-widget-two__about-form-input-box">
                        <input
                          type="email"
                          placeholder="Your e-mail"
                          name="EMAIL"
                        />
                        <button
                          type="submit"
                          className="footer-widget-two__about-btn"
                        >
                          <span className="icon-arrow-right"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget-two__column footer-widget-two__service">
                    <div className="footer-widget-two__title-box">
                      <h3 className="footer-widget-two__title">Services</h3>
                    </div>
                    <ul className="footer-widget-two__service-list list-unstyled">
                      <li>
                        <Link to="service-details">
                          {" "}
                          <span className="icon-angle-left"></span>
                          Prestige Construction
                        </Link>
                      </li>
                      <li>
                        <Link to="service-details">
                          {" "}
                          <span className="icon-angle-left"></span>
                          BuildTech Solutions
                        </Link>
                      </li>
                      <li>
                        <Link to="service-details">
                          {" "}
                          <span className="icon-angle-left"></span>
                          Stellar Structures
                        </Link>
                      </li>
                      <li>
                        <Link to="service-details">
                          {" "}
                          <span className="icon-angle-left"></span>
                          Superior Builders
                        </Link>
                      </li>
                      <li>
                        <Link to="service-details">
                          {" "}
                          <span className="icon-angle-left"></span>
                          BuildWise
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget-two__column footer-widget-two__links">
                    <div className="footer-widget-two__title-box">
                      <h3 className="footer-widget-two__title">Useful Links</h3>
                    </div>
                    <ul className="footer-widget-two__service-list list-unstyled">
                      <li>
                        <Link to="about">
                          {" "}
                          <span className="icon-angle-left"></span> About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="team">
                          {" "}
                          <span className="icon-angle-left"></span> Our Team
                        </Link>
                      </li>
                      <li>
                        <Link to="blog">
                          {" "}
                          <span className="icon-angle-left"></span> Recent News
                        </Link>
                      </li>
                      <li>
                        <Link to="projects">
                          {" "}
                          <span className="icon-angle-left"></span> Projects
                        </Link>
                      </li>
                      <li>
                        <Link to="services">
                          {" "}
                          <span className="icon-angle-left"></span> Our All
                          Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget-two__column footer-widget-two__contact">
                    <div className="footer-widget-two__title-box">
                      <h3 className="footer-widget-two__title">Contact Us</h3>
                    </div>
                    <ul className="footer-widget-two__contact-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-up-2"></span>
                        </div>
                        <div className="content">
                          <p>
                            <Link to="mailto:infoname@mail.com">
                              infoname@mail.com
                            </Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-up-2"></span>
                        </div>
                        <div className="content">
                          <p>
                            <Link to="tel:+888123456765">
                              (+888) 123 456 765
                            </Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-up-2"></span>
                        </div>
                        <div className="content">
                          <p>
                            Old city Street,Usa 1212 New <br /> york-3500
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-up-2"></span>
                        </div>
                        <div className="content">
                          <p>
                            <Link to="tel:+51946305307,+51982133108">
                              (+51) 946305307 / (+51) 982133108
                            </Link>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer-two__bottom">
          <div className="container">
            <div className="site-footer-two__bottom-inner">
              <p className="site-footer-two__bottom-text">
                © Starplate 2024 | All Rights Reserved
              </p>
              <ul className="list-unstyled site-footer-two__bottom-menu">
                <li>
                  <Link to="about">Trams & Condition</Link>
                </li>
                <li>
                  <Link to="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Site Footer End */}
    </>
  );
}

import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

const Navbar = ({ scroll, isMobileMenu, handleMobileMenu }) => {
  return (
    <>
      <header
        className={`top-0 main-header-two ${scroll ? "fixed-header" : ""}`}
      >
        <div className="main-header-two__wrap">
          <div className="main-header-two__logo">
            <Link to="/">
              <img src="assets/images/goar/capa_2.png" alt="Logo" />
            </Link>
          </div>
          <div className="main-header-two__top">
            <div className="main-header-two__top-inner">
              <ul className="list-unstyled main-header-two__contact-list">
                <li>
                  <div className="icon">
                    <i className="icon-call"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link to="tel:6295550129">
                        (+51) 946305307
                      </Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-email"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link to="mailto:info@example.com">info@goar.pe</Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-location"></i>
                  </div>
                  <div className="text">
                    <p>Urb. Magisterial Etapa II, Yanahuara, Arequipa</p>
                  </div>
                </li>
              </ul>
              <div className="main-header-two__top-right">
                <div className="main-header-two__social-box">
                  <div className="main-header-two__social-box-inner">
                    <h4 className="main-header-two__social-box-title">
                      Follow On:
                    </h4>
                    <div className="main-header-two__social">
                      <Link to="#">
                        <i className="icon-facebook"></i>
                      </Link>
                      <Link to="#">
                        <i className="icon-instagram"></i>
                      </Link>
                      <Link to="#">
                        <i className="icon-Frame"></i>
                      </Link>
                      <Link to="#">
                        <i className="icon-link-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="main-menu main-menu-two">
            <div className="main-menu-two__wrapper">
              <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__menu-box-and-btn-box">
                  <div className="main-menu-two__menu-box">
                    <div className="main-menu-two__main-menu-box">
                      <button
                        className="mobile-nav__toggler"
                        onClick={handleMobileMenu}
                      >
                        <i className="fa fa-bars"></i>
                      </button>
                      <Menu />
                    </div>
                  </div>
                  <div className="main-menu-two__btn-box">
                    <Link to="contact" className="main-menu-two__btn thm-btn">
                      Get A Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <MobileMenu handleMobileMenu={handleMobileMenu} />
      <div
        className={`stricky-header stricked-menu main-menu main-menu-two ${
          scroll ? "stricky-fixed" : ""
        }`}
      >
        <div className="sticky-header__content">
          <nav className="main-menu main-menu-two">
            <div className="main-menu-two__wrapper">
              <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__menu-box-and-btn-box">
                  <div className="main-menu-two__menu-box">
                    <div className="main-menu-two__main-menu-box">
                      <Link
                        to={"/"}
                        className="mobile-nav__toggler"
                        onClick={handleMobileMenu}
                      >
                        <i className="fa fa-bars"></i>
                      </Link>
                      <Menu />
                    </div>
                  </div>
                  <div className="main-menu-two__btn-box">
                    <Link to="contact" className="main-menu-two__btn thm-btn">
                      Get A Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

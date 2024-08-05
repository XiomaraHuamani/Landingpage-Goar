import { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img
                src="assets/images/resources/footer-logo-1.png"
                width="150"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              {/*    <li className="dropdown">
          <Link to={"/"}>Home </Link>
          <ul>
            <li>
              <Link to={"/"}>Home One</Link>
            </li>
            <li>
              <Link href="index-2">Home Two</Link>
            </li>
            <li>
              <Link href="index-3">Home Three</Link>
            </li>
            <li>
              <Link href="index-4">Home Four</Link>
            </li>
            <li>
              <Link href="index-5">Home Five</Link>
            </li>
          </ul>
        </li> */}
              <li>
                <Link to={"/"}>INICIO</Link>
              </li>
              <li>
                <Link to={"/Nosotros"}>NOSOTROS</Link>
              </li>
              {/*  <li className="dropdown">
          <Link href="#">Services</Link>
          <ul>
            <li>
              <Link href="services">Services</Link>
            </li>
            <li>
              <Link href="service-details">Services Details</Link>
            </li>
          </ul>
        </li> */}
              <li>
                <Link to={"/Proyectos"}>PROYECTOS</Link>
              </li>
              {/*  <li className="dropdown">
          <Link href="#">Blog</Link>
          <ul>
            <li>
              <Link href="blog">Blog</Link>
            </li>
            <li>
              <Link href="blog-details">Blog Details</Link>
            </li>
          </ul>
        </li> */}
              <li>
                <Link href="contact">TRABAJA CON NOSOTROS</Link>
              </li>
              <li>
                <Link href="contact">CONTÁCTO</Link>
              </li>
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link to="mailto:needhelp@elitecons.com">info@goar.pe</Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <div>
                <Link to="tel:+51946305307">(+51) 946305307</Link>
                <br />
                <Link to="tel:+51982133108">(+51) 982133108</Link>
              </div>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link to="#" className="fab fa-twitter"></Link>
              <Link to="#" className="fab fa-facebook-square"></Link>
              <Link to="#" className="fab fa-pinterest-p"></Link>
              <Link to="#" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

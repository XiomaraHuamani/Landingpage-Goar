import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
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
    </>
  );
};

export default Menu;

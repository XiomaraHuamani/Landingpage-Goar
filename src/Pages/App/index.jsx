import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../home";
import AboutUs from "../AboutUs";
import ProjectsUs from "../ProjectsUS";

import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';

const AppRouters = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Nosotros", element: <AboutUs /> },
    { path: "/Proyectos", element: <ProjectsUs /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  );
};

export default App;

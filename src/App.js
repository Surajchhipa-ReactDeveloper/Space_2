// import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Componants/HomePageMain/HomePage";
import Navbar from "./Componants/Navbar/Navbar";
import { Suspense, lazy } from "react";
import DestinationHome from "./Componants/DestaniationHomePage/DestaniationHome";
import ScreenRoutes from "./Routes/RouteLinks";
import CrewHome from "./Componants/CrewHomePage/CrewHome";

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={"Loading..."}>
          <Navbar />
          <Routes>
            {ScreenRoutes.map((item, index) => {
              return (
                <Route
                  path={item.path}
                  name={item.name}
                  element={item.element}
                  key={index + item.path}
                ></Route>
              );
            })}
          </Routes>
        </Suspense>
      </Router>

      {/* <HomePage /> */}
      {/* <CrewHome /> */}
      {/* <DestinationHome /> */}
      {/* <TechnologyHome /> */}
    </>
  );
};

export default App;

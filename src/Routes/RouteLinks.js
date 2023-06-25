import { React, lazy } from "react";
const HomePage = lazy(() => import("../Componants/HomePageMain/HomePage"));
const DestinationHome = lazy(() =>
  import("../Componants/DestaniationHomePage/DestaniationHome")
);
const CrewHome = lazy(() => import("../Componants/CrewHomePage/CrewHome"));
const TechnologyHome = lazy(() =>
  import("../Componants/TechnologyHomePage/TechnologyHome")
);
const Error = lazy(() => import("../Componants/Error/Error"));

const ScreenRoutes = [
  { path: "/", name: "Home", element: <HomePage /> },
  { path: "/destination", name: "Destination", element: <DestinationHome /> },
  { path: "/crew", name: "Crew", element: <CrewHome /> },
  { path: "/technology", name: "Technology", element: <TechnologyHome /> },
  { path: "*", name: "Error", element: <Error /> },
];

export default ScreenRoutes;

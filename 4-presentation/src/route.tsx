import Presentation from "./pages/Presentation/Presentation";
import Home from "./pages/Home/Home";

export enum RoutePath {
  Home = "/",
  Presentation = "/presentation",
}

export interface RouteConfig {
  id: number;
  path: RoutePath;
  element: React.ReactNode;
}

export const routeConfigs: RouteConfig[] = [
  { id: 0, path: RoutePath.Home, element: <Home /> },
  { id: 1, path: RoutePath.Presentation, element: <Presentation /> },
];

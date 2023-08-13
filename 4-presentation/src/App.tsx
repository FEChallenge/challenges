import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { RouteConfig, routeConfigs } from "./route";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            {routeConfigs.map(({ id, path, element }: RouteConfig) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;

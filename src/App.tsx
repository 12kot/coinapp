import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "layouts/Layout";

const Main = lazy(() => import("pages/Home"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

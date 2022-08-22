import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [Overlay, setOverlay] = useState(false);
  const ShowOverlayHandler = () => {
    setOverlay(true);
  };
  const HideOverlayHandler = () => {
    setOverlay(false);
  };

  return (
    <Fragment>
      {Overlay && <Cart HiddenOverlay={HideOverlayHandler}/>}
      <Header OverlayisShow={ShowOverlayHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;

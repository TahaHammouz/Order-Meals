import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
const App = () => {
  const [Overlay, setOverlay] = useState(false);
  const ShowOverlayHandler = () => {
    setOverlay(true);
  };
  const HideOverlayHandler = () => {
    setOverlay(false);
  };

  return (
    <CartProvider>
      {Overlay && <Cart HiddenOverlay={HideOverlayHandler}/>}
      <Header OverlayisShow={ShowOverlayHandler} c/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;

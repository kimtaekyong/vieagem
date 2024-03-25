import React from "react";
import Itemslide from "./Itemslide";
import Visualwrap from "./Visual";
import Collection from "./Collection";
import Wedding from "./Wedding";
import Itemtype from "./Itemtype";
import Productsslide from "./Productsslide";
import Followslide from "./Followslide";

const Main = () => {
  return (
    <>
      <Visualwrap />
      <Itemslide />
      <Collection />
      <Wedding />
      <Itemtype />
      <Productsslide />
      <Followslide />
    </>
  );
};

export default Main;

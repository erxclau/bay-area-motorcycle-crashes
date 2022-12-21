// JS for your graphic
import pym from "pym.js";
import map from "../data/marin.json";
import data from "../data/marin.csv?columns=POINT_X,POINT_Y";

import downloadImage from "./util/download-image";
import setDisplayOptions from "./util/set-display";
import { drawMap } from "./util/map";

const draw = () => {
  drawMap(map, data);
};

window.onresize = () => {};

window.onload = () => {
  const child = new pym.Child({ polling: 500 });
  child.sendHeight();
  child.onMessage("download", downloadImage);
  setDisplayOptions();
  draw();
};

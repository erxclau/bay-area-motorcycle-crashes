import { geoMercator, geoPath, select } from "d3";

const drawMap = (map, data) => {
  const figure = select("figure");
  const width = figure.node().clientWidth;
  const height = 500;

  const projection = geoMercator().fitSize([width, height], map);

  const path = geoPath().projection(projection);

  const svg = figure.append("svg").attr("width", width).attr("height", height);
  svg
    .selectAll("path")
    .data(map.features)
    .join("path")
    .attr("d", path)
    .attr("fill", "black")
    .attr("stroke", "black");

  svg
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", (d) => projection([d.POINT_X, d.POINT_Y])[0])
    .attr("cy", (d) => projection([d.POINT_X, d.POINT_Y])[1])
    .attr("fill", "#2a9df4")
    .attr("stroke", "#1167b1")
    .attr("r", 5);
};

export { drawMap };

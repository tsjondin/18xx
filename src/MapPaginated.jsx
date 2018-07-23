import React from "react";
import games from "./data/games";
import Map from "./Map";
import Svg from "./Svg";
import Title from "./Title";
import HexContext from "./context/HexContext";
import util from "./util";
import * as data from "./data";
import * as R from "ramda";

import "./MapPaginated.css";

const MapPaginated = ({ match }) => {
  let game = games[match.params.game];

  let hexWidth = game.info.width;
  let edge = hexWidth * util.HEX_RATIO;
  let halfHexWidth = 0.5 * hexWidth;
  let maxX = util.maxMapX(game.map.hexes);
  let maxY = util.maxMapY(game.map.hexes);

  let totalWidth = (game.info.extraTotalWidth || 0) + halfHexWidth * (maxX + 1);
  let totalHeight =
    (game.info.extraTotalHeight || 0) + (1.5 * (maxY - 1) * edge + 2 * edge);

  if (game.info.orientation === "horizontal") {
    let tmp = totalWidth;
    totalWidth = totalHeight;
    totalHeight = tmp;
  }

  let pageWidth = data.paper.width - 75;
  let pageHeight = data.paper.height - 75;

  let y = -25; // Start with room for margins
  let mapPages = R.map(height => {
    let x = -25; // Start with room for margins
    let pages = R.map(width => {
      let page = (
        <div className="cutlines">
          <div className="MapPage">
            <svg
              width={width + 25}
              height={height + 25}
              viewBox={`${x - 12.5} ${y - 12.5} ${width + 25} ${height + 25}`}
            >
              <use href={`#${game.info.title}_map`} />
            </svg>
          </div>
        </div>
      );

      x = x + width;
      return page;
    }, util.pages(totalWidth + 50, pageWidth));

    y = y + height;
    return pages;
  }, util.pages(totalHeight + 50, pageHeight));

  return (
    <HexContext.Provider
      value={{
        width: game.info.width,
        rotation: game.info.orientation === "horizontal" ? 0 : 90
      }}
    >
      <Svg>
        <defs>
          <g id={`${game.info.title}_map`}>
            <Title game={game} />
            <Map game={game} />
          </g>
        </defs>
      </Svg>
      {mapPages}
    </HexContext.Provider>
  );
};

export default MapPaginated;
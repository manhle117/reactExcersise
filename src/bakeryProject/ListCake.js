import React, { Component } from "react";

import { CardItem } from "./CardItem";
const style = {
  backgroundHome: {
    backgroundImage:
      "url(https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-bakery-poster-background-psd-image_177018.jpg)",
  },
};
export class ListCake extends Component {
  render() {
    return (
      <div className="row" style={style.backgroundHome}>
        {this.props.bakeryData.map((item) => {
          return (
            <div className="col-4 p-2 d-flex justify-content-center">
              <CardItem item={item} addToCart={this.props.addToCart} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListCake;

import React, { Component } from "react";
import Style from "./itemStyle.module.css";

export class CardItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <div>
        <div className={Style.card}>
          <img
            src={item.hinh_anh}
            style={{ width: `325px`, height: `486px` }}
            alt="zxc"
          />
          <div className="card-content">
            <h2 className="p-2">{item.ten}</h2>
            <h4>{item.thanh_phan}</h4>
            <h5>Giá bán: {item.gia_ban.toLocaleString()}đ</h5>
            <button
              onClick={() => this.props.addToCart(this.props.item)}
              className="btn btn-outline-danger"
              type="button"
            >
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;

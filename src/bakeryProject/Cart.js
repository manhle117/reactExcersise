import React, { Component } from "react";

export class Cart extends Component {
  render() {
    return (
      <div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title"
                  style={{ textTransform: "uppercase" }}
                  id="exampleModalLabel"
                >
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {this.props.cart.length > 0 ? (
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tên bánh</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Tổng tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.cart.map((item) => {
                        console.log(item.product.id);
                        return (
                          <tr key={item.product.id}>
                            <td>{item.product.id}</td>
                            <td>{item.product.ten}</td>
                            <td>
                              <img
                                src={item.product.hinh_anh}
                                width={60}
                                alt="zxc"
                              />
                            </td>
                            <td>
                              <button
                                className="btn btn-info"
                                onClick={() =>
                                  this.props.handleQuantity(item, false)
                                }
                              >
                                -
                              </button>
                              <span
                                style={{
                                  paddingLeft: `5px`,
                                  paddingRight: `5px`,
                                }}
                              >
                                {item.quantity}
                              </span>
                              <button
                                className="btn btn-info "
                                onClick={() =>
                                  this.props.handleQuantity(item, true)
                                }
                              >
                                +
                              </button>
                            </td>
                            <td>{item.product.gia_ban}</td>
                            <td>{item.quantity * item.product.gia_ban}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "Are you sure you want to delete this item?"
                                    )
                                  ) {
                                    this.props.removeItem(item.product.id);
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <h2 style={{ color: "red", textTransform: "uppercase" }}>
                    Have no Item in your Cart, Let choose!!!!
                  </h2>
                )}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;

import React, { Component } from "react";
import ListCake from "./ListCake";
import { bakeryData } from "../bakeryData";
import Header from "./Header";
import Cart from "./Cart";

export class Home extends Component {
  state = {
    cart: [],
  };
  addToCart = (prod) => {
    const cloneMyCart = [...this.state.cart];
    const isExitsItem = cloneMyCart.find((item) => {
      return item.product.id === prod.id;
    });
    if (isExitsItem) {
      isExitsItem.quantity += 1;
    } else {
      const cartItem = {
        product: prod,
        quantity: 1,
      };
      cloneMyCart.push(cartItem);
    }
    this.setState({ cart: cloneMyCart });
  };
  handleQuantity = (cake, isIncrease) => {
    const cloneMyCart = [...this.state.cart];

    const cakeIndex = cloneMyCart.findIndex((item) => {
      return item === cake;
    });

    if (isIncrease) {
      cloneMyCart[cakeIndex].quantity += 1;
    } else if (cloneMyCart[cakeIndex].quantity > 1) {
      cloneMyCart[cakeIndex].quantity -= 1;
    } else if (window.confirm("Are you sure you want to delete this item?")) {
      cloneMyCart.splice(cakeIndex, 1);
    }
    this.setState({
      cart: cloneMyCart,
    });
  };
  removeItem = (prodId) => {
    const cloneMyCart = [...this.state.cart];
    const index = cloneMyCart.findIndex((item) => {
      return item.product.id === prodId;
    });
    console.log(index);
    if (index !== -1) {
      cloneMyCart.splice(index, 1);
    }
    this.setState({ cart: cloneMyCart });
  };
  render() {
    return (
      <>
        <Header cart={this.state.cart} />
        <div className="container-fluid">
          <ListCake bakeryData={bakeryData} addToCart={this.addToCart} />
          <Cart
            cart={this.state.cart}
            removeItem={this.removeItem}
            handleQuantity={this.handleQuantity}
          />
        </div>
      </>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import product4 from "../assets/images/product-4.png";
import product5 from "../assets/images/product-5.png";
import product6 from "../assets/images/product-6.png";

class Products extends Component {
  render() {
    return (
      <div className="products-section">
        <div className="container">
          <div className="products-content">
            <div className="products-title">Most Popular Products</div>
            <div className="products-subtitle">This is the list of products that are most interested in users</div>
            <div className="products-grid">
              <div className="card product-first">
                <img src={product1} className="card-img-top" alt="" />
                <div className="card-text"> Hubstaff Directory </div>
              </div>
              <div className="card product-second">
                <img src={product2} className="card-img-top" alt="" />
                <div className="card-text"> Jira 2017 </div>
              </div>
              <div className="card product-third">
                <img src={product3} className="card-img-top" alt="" />
                <div className="card-text"> Slack Pro </div>
              </div>
              <div className="card product-forth">
                <img src={product4} className="card-img-top" alt="" />
                <div className="card-text"> TraveChat </div>
              </div>
              <div className="card product-fifth">
                <img src={product5} className="card-img-top" alt="" />
                <div className="card-text"> Network </div>
              </div>
              <div className="card product-sixth">
                <img src={product6} className="card-img-top" alt="" />
                <div className="card-text"> Time Camp </div>
              </div>
            </div>
            <a href='/'> All products </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Products;
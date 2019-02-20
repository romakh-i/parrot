import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div className="products-section">
        <div className="container">
          <div className="products-content">
            <div className="products-title">Most Popular Products</div>
            <div className="products-subtitle">This is the list of products that are most interested in users</div>
            <div className="products-grid">
              <div className="first">first</div>
              <div className="second">second</div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

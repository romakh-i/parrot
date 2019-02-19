import React, { Component } from 'react'

class SearchForm extends Component {
  render() {
    return (
      <div>
        <div className="title text-center">
          <p>Quick Search for Your </p>
          <p>Perfect Product </p>
        </div>
        <div className="sub-title text-center">
          <p>INNOVATE &#183; LIST &#183; CONNECT </p>
        </div>
        <form>
          <div className="form-row search-form">
            <div className="col-auto">
              <div className="dropdown">
                <button className="btn bg-white dropdown-toggle" type="button" id="dropdownCategory" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Category</button>

                <div className="dropdown-menu" aria-labelledby="dropdownCategory" x-placement="bottom-start">
                  <button className="dropdown-item" type="button">Action</button>
                  <button className="dropdown-item" type="button">Another action</button>
                  <button className="dropdown-item" type="button">Something else here</button>
                </div>
              </div>
            </div>
            <div className="col-7">
              <input type="text" className="form-control" />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn submit-btn">START SEARCHING</button>
            </div>
          </div>
        </form>
      </div >
    )
  }
}

export default SearchForm
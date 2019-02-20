import React from 'react'
import SearchForm from './SearchForm'
import Wrapper from './Wrapper'
import Products from './Products'

const MainPhoto = () => {
  return (
    <Wrapper headerFixed>
      <div className="main-section">
        <div className="container">
          <SearchForm />
          <div className="top-section-buttons">
            <button type="button" className="btn top-section-btn">All categories</button>
            <button type="button" className="btn top-section-btn">How it works</button>
          </div>
        </div>
      </div>
      <Products />
      <p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p>
      <p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p>
      <p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p>
      <p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p><p>sfsdf</p>
    </Wrapper>
  )
}

export default MainPhoto

import React from 'react';

const ResultInstance = ({ currentResult }) => (
  <li data-pre="VisualSearchProduct">
    <a id="VisualSearchProduct-0" data-pre="ILink" href="https://www.nike.com/t/liverpool-fc-mens-woven-track-jacket-zKhhq9/CZ2780-010" data-type="visualSearchItemClick" data-path={12975779} data-var="vsProduct" tabIndex={0}>
      <figure className="pre-l-vs-product-card d-sm-ib">
        <div className="pre-l-vs-card-placeholder vs-img-loaded">
          <img className="u-full-width" src={currentResult.shoe_image} alt="Liverpool FC" data-var="vsProductImg" />
        </div>
        <figcaption className="va-sm-m mt3-sm mb8-sm mb0-lg prl3-sm pl0-lg pr3-lg body-3">
          <h4 className="u-bold">{currentResult.shoe_name}</h4>
          <p className="text-color-secondary">{currentResult.shoe_subname}</p>
          <p className="pre-vs-price u-bold pt3-sm">{currentResult.shoe_price}</p>
        </figcaption>
      </figure>
    </a>
  </li>
)

export default ResultInstance;
import React from 'react';

import ResultInstance from './ResultInstance.jsx';

const ResultList = ({ VisualSearchResultsClassName, searchResults }) => {
  return (
  <ul className={VisualSearchResultsClassName} data-var="VisualSearchResults" data-pre="VisualSearchResults">
    {searchResults.map((currentResult, index) => {
      return <ResultInstance currentResult={currentResult} key={index}/>
    })}
  </ul>
  )
}

export default ResultList;
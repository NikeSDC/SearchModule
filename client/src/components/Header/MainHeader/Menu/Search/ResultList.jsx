import React from 'react';

import ResultInstance from './ResultInstance.jsx';

const ResultList = ({ VisualSearchResultsClassName, searchResults }) => {
  let fiveResults = searchResults.slice(0, 5)
  return (
  <ul className={VisualSearchResultsClassName} data-var="VisualSearchResults" data-pre="VisualSearchResults">
    {fiveResults.map((currentResult, index) => {
      return <ResultInstance currentResult={currentResult} key={index}/>
    })}
  </ul>
  )
}

export default ResultList;
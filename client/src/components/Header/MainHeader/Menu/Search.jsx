import React from 'react';

const Search = ({ handleVsIsOpen, handleVsIsClosed, closeSearchClassName }) => (
    <div className="pre-l-search" data-pre="VisualSearch">
      <div className="pre-l-search-box">
        <div className="d-sm-flx flx-jc-lg-fe u-position-rel">
          <div className="pre-search-contain">
            <div className="pre-search-input-box d-sm-b flx-dir-lg-c flx-ai-lg-fe d-lg-flx flx-gro-sm-1 flx-gro-lg-0" type="search">
              <input onClick={handleVsIsOpen} type="text" id="VisualSearchInput" className="pre-search-input headline-5" name="search" autoComplete="off" data-var="vsInput" tabIndex={0} placeholder="Search" aria-label="Search Products" role="combobox" aria-controls="VisualSearchSuggestionsList" aria-owns="VisualSearchSuggestionsList" aria-expanded="false" />
              <button className="pre-clear-search ncss-btn pr0-sm z2 d-sm-h" data-var="vsClearSearch" aria-label="Reset Search">
                <svg className="search-clear-icon" fill="#111" height="30px" width="30px" viewBox="0 0 24 24">
                  <path d="M22 20H7.3c-.3 0-.6-.1-.8-.4l-5.3-7c-.3-.4-.3-.9 0-1.2l5.3-7c.2-.3.5-.4.8-.4H22c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1zM7.8 18H21V6H7.8l-4.6 6 4.6 6zm8.2-3c-.3 0-.5-.1-.7-.3L14 13.4l-1.3 1.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l1.3-1.3-1.3-1.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.3 1.3 1.3-1.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4L15.4 12l1.3 1.3c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3z" />
                </svg>
              </button>
              <button className="pre-search-btn ripple" data-var="vsButton" aria-label="Search">
                <svg className="pre-search-input-icon" fill="#111" height="30px" width="30px" viewBox="0 0 24 24">
                  <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z" />
                </svg>
              </button>
            </div>
            <button type="submit" className={closeSearchClassName} onClick={handleVsIsClosed}data-var="vsCloseSearch" aria-label="Close Search">
              <span className="pre-grey-circle">
                <svg fill="#111" height="30px" width="30px" viewBox="0 0 24 24"><path d="M15.04 12L24 2.96 21.04 0 12 8.96 3.04 0 0 2.96 9.04 12 0 20.96 3.04 24 12 14.96 21.04 24 24 20.96z" /></svg>
              </span>
            </button>
          </div>
        </div>
        <div className="pre-l-vs-box ta-sm-l" data-var="vsContainer">
          <div className="pre-l-vs-popular pl9-sm pr5-sm prl0-lg mauto-sm" data-var="vsPopularTerms" data-pre="VisualSearchPopularTerms">
            <p className="headline-5 text-color-secondary pb4-sm"><span id="hf_header_label_popular_search_terms">Popular Search Terms</span></p>
            <ul>
              <li>
                <a tabIndex={0} data-type="click_popularSearchSelection" data-path="Air Force 1" className="pre-l-vs-popular-term ncss-cta-primary-dark ta-sm-l d-sm-b mb3-sm" href="https://www.nike.com/w/air-force-1-5sj3y?vst=Air%20Force%201" data-pre="ILink">
                  Air Force 1
                </a>
              </li>
              <li>
                <a tabIndex={0} data-type="click_popularSearchSelection" data-path="Jordan" className="pre-l-vs-popular-term ncss-cta-primary-dark ta-sm-l d-sm-b mb3-sm" href="https://www.nike.com/w/jordan-37eef?vst=Jordan" data-pre="ILink">
                  Jordan
                </a>
              </li>
              <li>
                <a tabIndex={0} data-type="click_popularSearchSelection" data-path="Air Max" className="pre-l-vs-popular-term ncss-cta-primary-dark ta-sm-l d-sm-b mb3-sm" href="https://www.nike.com/w/air-max-shoes-a6d8hzy7ok?vst=Air%20Max" data-pre="ILink">
                  Air Max
                </a>
              </li>
              <li>
                <a tabIndex={0} data-type="click_popularSearchSelection" data-path="Blazer" className="pre-l-vs-popular-term ncss-cta-primary-dark ta-sm-l d-sm-b mb3-sm" href="https://www.nike.com/w/blazer-shoes-9gw3azy7ok?vst=Blazer" data-pre="ILink">
                  Blazer
                </a>
              </li>
            </ul>
          </div>
          <div className="pre-l-vs-overlay bg-white u-full-width flx-dir-lg-r z1 d-sm-h" data-var="VisualSearchOverlay" data-pre="VisualSearchOverlay">
            <div className="pre-l-vs-suggestions va-sm-t pl9-sm pr5-sm pl0-lg flx-dir-sm-c">
              <p className="headline-5 text-color-secondary pb4-sm"><span id="hf_header_label_search_topSuggestions">Top Suggestions</span></p>
              <ul id="VisualSearchSuggestionsList" data-var="vsSuggestionList" role="listbox" data-pre="VisualSearchSuggestionList" />
            </div>
            <div className="pre-vs-spinner"><div className="pre-spinner" data-var="vsSpinner" /></div>
            <span aria-live="polite" data-var="visualSearchResultsCount" className="pre-visually-hidden" />
            <ul className="pre-l-vs-results bg-white pt12-sm pt0-lg mb12-sm d-sm-flx flx-dir-sm-r flx-wr-sm-w flx-wr-lg-nw" data-var="VisualSearchResults" data-pre="VisualSearchResults" />
          </div>
        </div>
      </div>
    </div>
);

export default Search;

import algoliasearch from "algoliasearch/lite";

import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  ClearRefinements,
  RefinementList,
  Configure,
} from "react-instantsearch-dom";

import Hit from "./Hit";
import "../App.css";

const appId = process.env.REACT_APP_ALGOLIA_APP_ID;
const searchKey = process.env.REACT_APP_ALGOLIA_SEARCH_KEY;

// Create const holding my search client
const searchClient = algoliasearch(appId, searchKey);
console.log(appId, searchKey);
function Search() {
  return (
    <div className="ais-InstantSearch">
      <h1>React InstantSearch e-commerce</h1>
      <InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
        <div className="left-panel">
          <ClearRefinements />
          <h2>Brands</h2>
          <RefinementList attribute="brand" />
          <Configure hitsPerPage={8} />
        </div>
        <div className="right-panel">
          <SearchBox />
          <Hits hitComponent={Hit} />
          <Pagination />
        </div>
      </InstantSearch>
    </div>
  );
}

export default Search;

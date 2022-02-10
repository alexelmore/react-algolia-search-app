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
import Hit from "./components/Hit";
import "./App.css";

// Create const holding my search client
const searchClient = algoliasearch(
  "382ZC2MIQQ",
  "b291b92ef1dfe915a21286a87e8e74ce"
);

function App() {
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

export default App;

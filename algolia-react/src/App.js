import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

import "./App.css";
const searchClient = algoliasearch(
  "382ZC2MIQQ",
  "b291b92ef1dfe915a21286a87e8e74ce"
);

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}

export default App;

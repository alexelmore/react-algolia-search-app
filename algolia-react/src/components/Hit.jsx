import { Highlight } from "react-instantsearch-dom";
import PropTypes from "prop-types";
import "../App.css";

function Hit({ hit }) {
  return (
    <div className="hit">
      <div className="hit-image">
        <img src={hit.image} align="left" alt={hit.name} />
      </div>
      <div className="hit-content">
        <div className="hit-price">${hit.price}</div>
        <div className="hit-name">
          <Highlight attribute="name" hit={hit} />
        </div>
        <div className="hit-description">
          <Highlight attribute="description" hit={hit} />
        </div>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;

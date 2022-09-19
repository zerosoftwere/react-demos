import React from "react";
import PropTypes from "prop-types";

import "./ChartBar.css";

const ChartBar = ({ dataPoint, fill }) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            height: `${fill}%`,
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{dataPoint.label}</div>
    </div>
  );
};

ChartBar.propTypes = {
  dataPoint: PropTypes.shape({
    label: PropTypes.string.isRequired,
    fill: PropTypes.number.isRequired,
  }),
};

export default ChartBar;

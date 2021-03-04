import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Slider = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="">
      
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.array,
};

Slider.defaultProps = {
  children: [],
};

export default Slider;

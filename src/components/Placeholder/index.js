import React from 'react';

const Slider = () => (
  <div className="flex flex-col items-center">
    <h1 className="mb-2">This is a component.</h1>
    <button
      onClick={() => alert("hello!")}
      type="button"
      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Click here
    </button>
  </div>
)

Slider.propTypes = {
};

Slider.defaultProps = {
};

export default Slider;

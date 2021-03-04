import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

let timerId = null;

const Slider = ({ children }) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    timerId = setInterval(() => setSliderIndex(index => (index + 1) % children.length), 3000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="p-8 border-dashed border-2 rounded w-3/5 bg-white">
      <div className="relative h-60 bg-blue-100">
        {children.map((item, index) => (
          <div
            className={`
              flex
              items-center
              justify-center
              overflow-hidden
              duration-500
              top-0
              absolute
              w-full
              h-full
              ${index === sliderIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="pt-4 text-center flex justify-center">
        <div className="flex">
          {children.map((_, index) => (
            <div
              className={`
                ${index + 1 < children.length ? 'mr-4' : ''}
                ${sliderIndex === index ? '' : 'opacity-30'}
                bg-blue-400
                w-3
                h-3
                cursor-pointer
                rounded-2xl
              `}
              key={index}
              onClick={() => {
                clearInterval(timerId);
                timerId = setInterval(() => setSliderIndex(index => (index + 1) % children.length), 3000);
                setSliderIndex(index);
              }}
            />
          ))}
        </div>
      </div>
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

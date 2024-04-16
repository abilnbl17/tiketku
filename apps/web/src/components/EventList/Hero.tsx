'use client';

import React from 'react';

const Hero = () => {
  return (
    // <div className="flex items-center bg-black">
    <section
      className="w-full bg-cover bg-center "
      style={{ backgroundImage: 'url(/hero.jpg)' }}
    >
      <div className="flex items-center h-full px-20 py-40 bg-gray-900 bg-opacity-40">
        <div className="container relative mx-auto text-center text-black">
          {/* <div className="container"> */}
          <div className="justify-center row-auto">
            {/* <div className="grid-"> */}
            <h1 className="text-6xl font-bold mb-6 text-white">
              Discover Events & Workshops Around You
            </h1>
            <p className="text-xl mb-12 text-white">
              Dont miss out on the experience of a lifetime - secure your spot
              at your preferable events with our easy online ticket purchasing
              system and join it for building a good community.
            </p>
            <button>
              <a
                href="#"
                className="bg-indigo-500 text-white py-1 px-12 rounded-full hover:bg-indigo-600"
              >
                Demo
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
    // {/* </div> */}
    // {/* </div> */}
    // </div>
  );
};

export default Hero;

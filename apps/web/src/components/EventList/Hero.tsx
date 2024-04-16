import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center bg-[#14233c] bg-opacity-60">
      <section
        style={{ backgroundImage: 'url(/hero.jpg)' }}
        className="w-full bg-cover bg-center py-32 "
      >
        <div className="container relative mx-auto text-center text-black">
          {/* <div className="container"> */}
          <div className="justify-center row-auto">
            {/* <div className="grid-"> */}
            <h1 className="text-6xl font-bold mb-6 text-white">
              Discover Events & Workshops Around You
            </h1>
            <p class="text-xl mb-12 text-white">
              Dont miss out on the experience of a lifetime - secure your spot
              at your preferable events with our easy online ticket purchasing
              system and join it for building a good community.
            </p>
            <button>
              <a
                href="#"
                class="bg-indigo-500 text-white py-1 px-12 rounded-full hover:bg-indigo-600"
              >
                Demo
              </a>
            </button>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </section>
    </div>
  );
};

export default Hero;

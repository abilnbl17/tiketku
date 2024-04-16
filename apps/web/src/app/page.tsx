import React from 'react';
import Hero from '../components/EventList/Hero';
import UpcomingEvent from '../components/UpcomingEvent';

const Page = () => {
  return (
    <div className="">
      {/* Komponen Re-usebility */}
      <section>
        <Hero />
        <UpcomingEvent />
      </section>
    </div>
  );
};

export default Page;

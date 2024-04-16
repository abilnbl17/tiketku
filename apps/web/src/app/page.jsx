import Hero from '@/components/EventList/Hero';
import UpcomingEvent from '@/components/UpcomingEvent';

import React from 'react';

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

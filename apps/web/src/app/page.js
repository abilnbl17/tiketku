import Header from '@/components/EventList/Header';
import React from 'react';

const Page = () => {
  return (
    <div className="">
      {/* Komponen Re-usebility */}
      <section>
        <Header
          title="Paling Populer"
          LinkTitle="Lihat Semua"
          LinkHref="/populer"
        />
      </section>
    </div>
  );
};

export default Page;

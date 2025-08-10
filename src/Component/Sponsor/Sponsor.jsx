import React, { use } from 'react';
import Marquee from "react-fast-marquee";

const sponsorss = fetch('/sponsor.json').then((res) => res.json());

const Sponsor = () => {
  const sponsors = use(sponsorss);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl py-6">
      <Marquee gradient={false} speed={50}>
        {sponsors.map(res => (
          <img
            key={res.id}
            src={res.logo}
            alt={`Sponsor ${res.id}`}
            className="h-20 ml-20 object-contain rounded-xl transition-transform
                       mix-blend-multiply dark:mix-blend-screen"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Sponsor;

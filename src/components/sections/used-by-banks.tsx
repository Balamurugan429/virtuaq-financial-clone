import Image from 'next/image';
import React from 'react';

const logos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/logo-1-8.png?",
    alt: "Banamex",
    width: 170,
    height: 35
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/logo-2-9.png?",
    alt: "Citi",
    width: 75,
    height: 38
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/logo-4-10.png?",
    alt: "Scotiabank",
    width: 200,
    height: 40
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/logo-3-11.png?",
    alt: "UBA United Bank for Africa",
    width: 140,
    height: 50
  },
];

const UsedByBanks = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-5">
        <div className="text-center">
          <h3 className="text-2xl font-medium text-dark-text">
            Used By
          </h3>
          <hr className="mt-4 mb-12 mx-auto w-[70px] border-t border-border" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 md:gap-x-24">
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsedByBanks;
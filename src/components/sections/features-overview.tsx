import Image from 'next/image';

interface Feature {
  imageSrc: string;
  title: string;
  altText: string;
}

const features: Feature[] = [
  {
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/vp-smart-3.jpg?',
    title: 'Smart queue management',
    altText: 'A hand holding a credit card, symbolizing smart queue management',
  },
  {
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/vp-integration-4.jpg?',
    title: 'Effortless integration',
    altText: 'Gears reflecting city buildings, symbolizing effortless integration',
  },
  {
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/vp-operational-5.jpg?',
    title: 'Operational efficiency',
    altText: 'A modern conference room setup, symbolizing operational efficiency',
  },
];

const FeaturesOverview = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <Image
                  src={feature.imageSrc}
                  alt={feature.altText}
                  width={140}
                  height={140}
                  className="rounded-full border-[10px] border-white shadow-lg object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium text-dark-text">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
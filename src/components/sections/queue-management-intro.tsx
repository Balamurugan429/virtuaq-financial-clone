import React from 'react';
import Image from 'next/image';

const QueueManagementIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-[36px] font-bold text-dark-text mb-6">
              Queue management system for branch transformation
            </h2>
            <p className="text-base text-medium-gray leading-relaxed">
              After a round of digital transformation, institutions offering digital banking services have found that branch and staff functions had to undergo radical change since routine transactions are done with net banking, phone banking and payment apps. The banking sector is now in the process of branch transformation, where bank branches are being re-engineered into the customer journey. The first step in this is a queue management system in banks that greatly improves the customer experience, and provides the bank with an invaluable treasure chest of customer data to help in designing the bank branch of the future. <a href="https://virtuaq.com/financial#target" className="text-accent-blue">Read more...</a>
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/queue-management-system-in-banks-2.png?"
              alt="queue management system in banks"
              width={464}
              height={463}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueueManagementIntro;
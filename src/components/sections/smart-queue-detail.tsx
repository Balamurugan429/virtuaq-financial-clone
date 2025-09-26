import Image from 'next/image';

const SmartQueueDetail = () => {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <div className="text-left">
            <h2 className="mb-6 text-4xl font-bold text-dark-text">
              Smart queue management
            </h2>
            <p className="text-base leading-[1.6] text-medium-gray">
              A smart queue management system reduces wait times at your branches, improving the customer experience and letting you serve more customers faster. The bank queue management solution makes use of multi-service queues to ensure your staff are consistently and accurately allocated. It allows banking institutions to offer a consistent brand experience for your premier customers.
            </p>
          </div>
          <div>
            <Image
              src="https://virtuaq.com/img/smart-queue.min.png"
              alt="A keyboard with blue keys spelling 'Queue' and 'Management'"
              width={1920}
              height={1280}
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartQueueDetail;
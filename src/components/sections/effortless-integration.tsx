import Image from "next/image";

const EffortlessIntegrationSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Column */}
          <div>
            <Image
              src="https://virtuaq.com/img/financial-services-integration.jpg"
              alt="A tablet showing a banking application interface with charts and data."
              width={555}
              height={370}
              className="w-full h-auto"
            />
          </div>

          {/* Text Column */}
          <div>
            <h2 className="text-[36px] font-bold text-dark-text mb-6">
              Effortless integration
            </h2>
            <p className="text-base text-medium-gray leading-relaxed mb-6">
              <strong className="font-bold text-dark-text">
                VirtuaQ is hardware agnostic
              </strong>
              , so you can continue using your existing hardware systems. Our
              APIs and HTML5 skinnable themes integrate directly with your core
              banking software, CRM, digital signage, and with third-party apps
              that access your data.
            </p>
            <p className="text-base text-medium-gray leading-relaxed">
              Lower your bank queue management system setup costs with fast and
              easy in-branch deployment. The queuing solution can be hosted on
              the cloud, or can be implemented in your data center.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffortlessIntegrationSection;
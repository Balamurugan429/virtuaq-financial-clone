import React from 'react';

const OperationalEfficiency = () => {
  const imageUrl = "https://virtuaq.com/img/operational-efficiency.jpg";

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-full">
        <div className="flex flex-col lg:flex-row">
          <div
            role="img"
            aria-label="A businessman drawing a diagram about customer satisfaction, quality, efficiency, and service, all leading to a happy customer."
            className="w-full lg:w-1/2 lg:order-2 bg-cover bg-center min-h-[480px]"
            style={{ backgroundImage: `url('${imageUrl}')` }}
          />
          <div className="w-full lg:w-1/2 lg:order-1 flex items-center">
            <div className="p-12 lg:p-28 w-full">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-text mb-4">
                Operational efficiency
              </h2>
              <p className="text-xl font-light text-medium-gray leading-relaxed">
                Set service level alerts and reports for group and branch
                performance that will help you outperform service audit
                requirements. VirtuaQ’s virtual landscape server enables{' '}
                <strong className="font-semibold text-dark-text">
                  centralized management
                </strong>{' '}
                of all branch level systems. Powerful command and control,
                remotely administer and deploy central policy changes across
                all branches. Real-time monitoring and tracking of all connected
                branches allowing for instant error detection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalEfficiency;
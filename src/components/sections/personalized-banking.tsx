import React from 'react';

const PersonalizedBanking = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <img 
              src="https://virtuaq.com/img/personalised-banking.jpg" 
              alt="Business professionals in a meeting reviewing documents" 
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="lg:pl-4">
              <h2 className="text-[36px] font-bold text-foreground mb-4">
                Personalized banking experience
              </h2>
              <p className="text-base text-muted-foreground" style={{ lineHeight: 1.6 }}>
                Offer every single customer the same <strong className="font-bold text-foreground">personalised banking</strong> experience at every branch. It will improve your customer experience through identification and segmentation when people join a digital queue - from anywhere, with paper or SMS tokens issued by phone, mobile app, or online on your website. Improve operational efficiency and repurpose waiting spaces, so that you can add more counters to serve customers faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedBanking;
"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "Digital banking is not just about digitization of branch banking services. Banks must foster a culture of digital, and embrace open banking APIs that allow third-party apps access to your data core.",
  "What will be the bank branch of the future like? We work with the world’s largest banks on modernizing their branch networks and improving their customer experience.",
  "In this digital era, customers who come to the bank branch don’t like to wait in line for an appointment. Implementing a queue management system in banks makes it possible to call customers just in time, and provide the service requested quickly.",
  "Queue management helps identify customers at the first point of contact, segment them as per the service requested. This kind of data is invaluable for customer-centric branch design and transformation. How do you make the customer journey seamless, from your website to email or mobile app, and then to phone and/or to your branch, and back to email?",
];

const images = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/bank-branch-future-conference-6.jpg?",
    alt: "A man presenting at a 'Bank Branch of the Future' conference.",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/zal-dastur-digital-banking-7.jpg?",
    alt: "A speaker at a 'Digital Banking Day' event by KrisFinSoft.",
  },
];

export default function DigitalBankingCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = (api: CarouselApi) => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const CarouselNavigation = () => {
    const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

    return (
      <>
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-[-20px] sm:left-[-60px] lg:left-[-120px] top-1/2 -translate-y-1/2 disabled:opacity-30 z-10"
          aria-label="Previous slide"
        >
          <div className="flex items-center text-white opacity-80 hover:opacity-100 transition-opacity">
            <ChevronLeft className="h-6 w-6" />
            <span className="ml-1 text-lg hidden md:inline">Previous</span>
          </div>
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-[-20px] sm:right-[-60px] lg:right-[-120px] top-1/2 -translate-y-1/2 disabled:opacity-30 z-10"
          aria-label="Next slide"
        >
          <div className="flex items-center text-white opacity-80 hover:opacity-100 transition-opacity">
            <span className="mr-1 text-lg hidden md:inline">Next</span>
            <ChevronRight className="h-6 w-6" />
          </div>
        </button>
      </>
    );
  };

  return (
    <section className="bg-[#1A2332] text-white py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What is digital banking?
        </h2>

        <div className="relative w-full max-w-4xl mx-auto">
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent className="min-h-[180px]">
              {slides.map((text, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 h-full flex items-center justify-center">
                    <p className="text-center text-lg leading-relaxed text-gray-200 max-w-3xl">
                      {text}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNavigation />
          </Carousel>
        </div>

        <div className="flex justify-center gap-2 mt-8 mb-16">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 w-10 transition-colors ${
                index === current ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="w-full h-auto">
              <Image
                src={image.src}
                alt={image.alt}
                width={560}
                height={373}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countries = [
  { code: "us", name: "United States", dial: "+1", flag: "🇺🇸" },
  { code: "in", name: "India", dial: "+91", flag: "🇮🇳" },
  { code: "sg", name: "Singapore", dial: "+65", flag: "🇸🇬" },
  { code: "gb", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { code: "ca", name: "Canada", dial: "+1", flag: "🇨🇦" },
];

const HeroSection = () => {
  return (
    <div className="font-roboto">
      <header
        className="relative text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/banner-financial-12.jpg?')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 flex flex-col items-center justify-center min-h-[500px] pt-[78px]">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-5 leading-tight">
              Smart Queue Management System
              <br />
              For Banks
            </h1>
            <h3 className="text-2xl font-medium text-white/90">
              Powering personalisation in branch transformation and digital banking
            </h3>
          </div>
        </div>
      </header>
      <section className="bg-[#EAE6DE] py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-dark-text mb-6 max-w-4xl mx-auto">
              You're sitting on a treasure trove of information. Enter your
              details to find out more about VirtuaQ - a queue system used by
              the world’s largest banks:
            </p>
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto items-end">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-white border-input placeholder:text-muted-foreground h-10"
                  aria-label="Name"
                />
              </div>
              <div>
                <div className="flex h-10 w-full items-center rounded-md border border-input bg-white text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 overflow-hidden">
                  <Select defaultValue="us">
                    <SelectTrigger className="border-0 bg-transparent focus:ring-0 focus:ring-offset-0 h-full w-auto pl-3 pr-2">
                      <SelectValue placeholder="🇺🇸" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          <span className="mr-2">{country.flag}</span>
                          <span>
                            {country.name} ({country.dial})
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    type="tel"
                    placeholder="Telephone"
                    className="border-0 rounded-none h-full flex-1 p-2 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
                    aria-label="Telephone"
                  />
                </div>
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white border-input placeholder:text-muted-foreground h-10"
                  aria-label="Email"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-secondary-blue hover:bg-button-hover text-white uppercase font-medium text-base h-10"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-[#f7f1e3] py-12">
      <div className="container mx-auto px-4">
        <p className="max-w-4xl mx-auto mb-6 text-base text-center text-muted-foreground">
          Want to talk about your queue management requirements? Enter your name
          and number. We’ll call you back right away:
        </p>
        <form
          className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)_minmax(0,3fr)_minmax(0,2fr)] gap-4 max-w-5xl mx-auto items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="text"
            placeholder="Name"
            className="bg-white border-input h-12 text-base"
          />
          <div className="flex w-full h-12 items-center rounded-md border border-input bg-white ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
            <Select defaultValue="+1">
              <SelectTrigger className="w-auto flex-shrink-0 h-full rounded-r-none bg-transparent text-base border-0 focus:ring-0 shadow-none px-3">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+1">+1 (US)</SelectItem>
                <SelectItem value="+91">+91 (IN)</SelectItem>
                <SelectItem value="+65">+65 (SG)</SelectItem>
                <SelectItem value="+44">+44 (UK)</SelectItem>
                <SelectItem value="+61">+61 (AU)</SelectItem>
              </SelectContent>
            </Select>
            <div className="w-px h-6 bg-border" />
            <Input
              type="tel"
              placeholder="Telephone"
              className="bg-transparent h-full flex-1 text-base border-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none px-3"
            />
          </div>
          <Input
            type="email"
            placeholder="Email"
            className="bg-white border-input h-12 text-base"
          />
          <Button
            type="submit"
            className="w-full h-12 bg-[#5A7FB8] hover:bg-[#3A5A95] text-white uppercase text-sm font-medium rounded-md"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
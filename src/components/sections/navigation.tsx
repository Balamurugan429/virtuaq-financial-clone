"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { href: "/", label: "Home" },
  {
    label: "Industries",
    dropdown: [
      { href: "#smart-queue", label: "Smart queue management" },
      { href: "#integration", label: "Effortless integration" },
      { href: "#efficiency", label: "Operational efficiency" },
      { href: "#personalized", label: "Personalized banking" },
      { href: "#used-by", label: "Used By" },
    ],
  },
  { href: "#features", label: "Features" },
  { href: "#carousel", label: "Blog" },
  { href: "#used-by", label: "Partners" },
  { href: "#footer", label: "About" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIndustriesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (isIndustriesOpen) {
      setIndustriesOpen(false);
    }
  };
  
  const toggleIndustries = () => {
    setIndustriesOpen(!isIndustriesOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setIndustriesOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1030] flex h-[78.6875px] w-full items-center bg-white py-[4.8px] shadow-lg font-roboto">
      <div className="mx-auto flex w-full max-w-[1140px] items-center justify-between px-[15px]">
        
        <div className="flex-shrink-0">
          <Link href="/" aria-label="VirtuaQ Home" onClick={closeMobileMenu}>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/VirtuaQ-Black-Logo-High-Res.min-1.png?"
              alt="VirtuaQ Logo"
              width={120}
              height={62}
              className="py-[5px] h-auto"
              priority
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <li key={item.label} className="relative">
                  <button onClick={toggleIndustries} className="flex items-center bg-transparent border-none text-[16px] text-[#555] hover:text-primary transition-colors">
                    {item.label}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isIndustriesOpen && (
                    <ul className="absolute top-full mt-[10px] w-max min-w-[230px] bg-white rounded-[4px] shadow-md py-[8px] z-[1000] border border-border">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.label}>
                          <Link href={subItem.href} className="block whitespace-nowrap py-[3.2px] px-[24px] text-[16px] text-[#212529] hover:bg-light-gray transition-colors">
                             {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link href={item.href!} className="text-[16px] text-[#555] hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              )
            ))}
          </ul>
          <Link href="#contact" className="ml-8 py-3 px-5 bg-primary text-primary-foreground rounded-full text-[16px] font-medium whitespace-nowrap hover:bg-button-hover transition-colors">
            Get An Instant call back
          </Link>
        </div>

        <div className="lg:hidden">
            <button onClick={toggleMobileMenu} aria-label="Toggle navigation" className="text-foreground">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="absolute top-[78.6875px] left-0 w-full bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col p-4">
              {navItems.map((item) => (
              item.dropdown ? (
                  <li key={item.label} className="py-2 border-b border-border">
                  <button onClick={toggleIndustries} className="flex justify-between w-full items-center text-foreground text-[16px]">
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isIndustriesOpen && (
                      <ul className="pl-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                          <Link href={subItem.href} className="block text-[15px] text-muted-foreground" onClick={closeMobileMenu}>
                              {subItem.label}
                          </Link>
                          </li>
                      ))}
                      </ul>
                  )}
                  </li>
              ) : (
                  <li key={item.label} className="py-2 border-b border-border">
                  <Link href={item.href!} className="block text-foreground text-[16px]" onClick={closeMobileMenu}>
                      {item.label}
                  </Link>
                  </li>
              )
              ))}
              <li className="mt-4">
                  <Link href="#contact" className="block w-full text-center py-3 px-5 bg-primary text-primary-foreground rounded-full text-[16px] font-medium whitespace-nowrap hover:bg-button-hover transition-colors" onClick={closeMobileMenu}>
                  Get An Instant call back
                  </Link>
              </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
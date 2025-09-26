import Image from "next/image";

type LinkItem = {
  name: string;
  href: string;
};

const productLinks: LinkItem[] = [
  { name: "About", href: "#" },
  { name: "FAQ", href: "#" },
];

const featureLinks: LinkItem[] = [
  { name: "Reduce waiting time", href: "#" },
  { name: "Appointment scheduling software", href: "#" },
  { name: "Paper and SMS tokens", href: "#" },
  { name: "Personalized customer experience", href: "#" },
  { name: "Easy integration", href: "#" },
  { name: "Service operational efficiency", href: "#" },
  { name: "Bank branch transformation", href: "#" },
];

const industryLinks: LinkItem[] = [
  { name: "Financial", href: "#" },
  { name: "Healthcare", href: "#" },
  { name: "Government", href: "#" },
  { name: "SME Singapore", href: "#" },
  { name: "Retail", href: "#" },
  { name: "Temples", href: "#" },
  { name: "Airports", href: "#" },
];

const LinkColumn = ({ title, links }: { title: string; links: LinkItem[] }) => (
  <div>
    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/images/VirtuaQ-Black-Logo-High-Res.min-1.png?"
                alt="VirtuaQ Logo"
                width={120} 
                height={28}
                className="h-auto"
              />
            </a>
          </div>

          <div className="lg:col-span-1">
            <LinkColumn title="Product" links={productLinks} />
          </div>

          <div className="sm:col-span-1 lg:col-span-2">
            <LinkColumn title="Features" links={featureLinks} />
          </div>

          <div className="sm:col-span-1 lg:col-span-2">
            <LinkColumn title="Industries" links={industryLinks} />
          </div>
          
          <div className="lg:col-span-1">
            <a href="#" className="text-sm font-bold uppercase tracking-wider text-foreground mb-4 hover:text-primary transition-colors">VirtuaQ Blog</a>
          </div>
          
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Singapore</h3>
            <address className="not-italic text-sm text-muted-foreground leading-relaxed">
              <p>Lucep Pte Ltd,</p>
              <p>60 Paya Lebar Road</p>
              <p>#07-54 Paya Lebar Square</p>
              <p>Singapore 409051</p>
            </address>
          </div>

          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">India</h3>
            <address className="not-italic text-sm text-muted-foreground leading-relaxed">
              <p>Lucep Technologies India Pvt Ltd</p>
              <p>902-904, 9th Floor,</p>
              <p>Prestige Meridian-1, 29 M C Road</p>
              <p>Bangalore, India - 560001.</p>
            </address>
            <a href="#" className="mt-6 inline-block bg-primary text-primary-foreground text-sm font-medium py-3 px-5 rounded-md hover:bg-button-hover transition-colors">
              Click here to contact
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col-reverse md:flex-row justify-between items-center gap-y-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © Copyright 2025, VirtuaQ. All rights reserved. 
            <a href="#" className="hover:text-primary ml-2">Legal</a>
            <span className="mx-1">/</span>
            <a href="#" className="hover:text-primary">Privacy</a>
            <span className="mx-1">/</span>
            <a href="#" className="hover:text-primary">Cookie Settings</a>
            <span className="mx-1">/</span>
            <a href="#" className="hover:text-primary">T&amp;C</a>
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Facebook">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/svgs/template-icon-facebook-1.svg?" alt="Facebook" width={24} height={24} />
            </a>
            <a href="#" aria-label="Twitter">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/svgs/X_icon_2-2.svg?" alt="Twitter X" width={24} height={24} className="bg-foreground rounded-[4px] p-1" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/301f427f-a2a9-4769-ac87-f5fb3b7573b6-virtuaq-com/assets/svgs/template-icon-linkedin-3.svg?" alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
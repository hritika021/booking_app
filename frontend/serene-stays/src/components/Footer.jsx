const footerLinks = {
  Product: ["Features", "Pricing", "Rooms", "Destinations"],
  Company: ["About", "Careers", "Press", "Blog"],
  Resources: ["Help Center", "Privacy", "Terms", "FAQ"],
  Social: ["Instagram", "Twitter", "Facebook", "LinkedIn"],
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background/80 pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-2xl font-bold text-background">
              Luxe<span className="text-accent">Stay</span>
            </span>
            <p className="mt-4 text-sm text-background/50 leading-relaxed">
              Curating luxury travel experiences since 2010.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-background text-sm mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-background/40 hover:text-accent transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/30">
            © 2026 LuxeStay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

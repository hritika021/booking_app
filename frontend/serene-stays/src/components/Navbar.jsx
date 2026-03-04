import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Suites", href: "#suites" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

useEffect(()=>{
  function handleScroll(){
    if(window.scrollY>50){
      setScrolled(true)
    }else{
      setScrolled(false);
    }
  }
  window.addEventListener("scroll",handleScroll);
return()=>{
  window.removeEventListener("scroll",handleScroll)
}
},[])
  return (
    <nav
      className={`fixed py-7 top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <a href="#home" className="font-display text-2xl font-bold tracking-tight text-primary-foreground">
          <span className={scrolled ? "text-foreground" : ""}>
            Luxe<span className={scrolled ? "text-primary" : "text-accent"}>Stay</span>
          </span>
        </a>

        
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary ${
                  scrolled ? "text-foreground" : "text-primary-foreground/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            className={`text-sm font-medium ${
              scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
            }`}
          >
            Login
          </button>
          <button className="gold-gradient text-sm font-semibold rounded-full px-6 border-0 text-primary-foreground">
            Register
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-xl p-6 animate-fade-up">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-foreground font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-6">
            <Button variant="outline" className="flex-1 rounded-full">Login</Button>
            <Button className="flex-1 gold-gradient rounded-full border-0 text-primary-foreground">Register</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

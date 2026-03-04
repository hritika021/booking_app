import { Search, MapPin, Home, DollarSign } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative z-20 -mt-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-strong rounded-full p-2 md:p-3 flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0">
          {/* Location */}
          <div className="flex items-center gap-3 flex-1 px-5 py-3 md:border-r border-border/50">
            <MapPin size={18} className="text-primary shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</p>
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none mt-0.5"
              />
            </div>
          </div>

          {/* Room Type */}
          <div className="flex items-center gap-3 flex-1 px-5 py-3 md:border-r border-border/50">
            <Home size={18} className="text-primary shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Room Type</p>
              <select className="w-full bg-transparent text-sm text-foreground focus:outline-none mt-0.5 cursor-pointer">
                <option>All Types</option>
                <option>Resort</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Lodge</option>
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex items-center gap-3 flex-1 px-5 py-3">
            <DollarSign size={18} className="text-primary shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Price Range</p>
              <select className="w-full bg-transparent text-sm text-foreground focus:outline-none mt-0.5 cursor-pointer">
                <option>Any Price</option>
                <option>$100 - $300</option>
                <option>$300 - $500</option>
                <option>$500+</option>
              </select>
            </div>
          </div>

          <button className="gold-gradient rounded-full h-12 w-12 md:h-14 md:w-14 p-0 shrink-0 border-0 shadow-lg mx-auto md:mx-2">
            <Search size={20} className="text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

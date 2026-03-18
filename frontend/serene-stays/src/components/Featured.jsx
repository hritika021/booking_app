import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
   const {data,loading,error}=useFetch("http://localhost:3000/api/hotel/countByCity?cities=berlin,london,goa");
useEffect(()=>{

},[data])
  const featuredPlaces = [
    {
      name: "Maldives",
      properties: "120 luxury stays",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Dubai",
      properties: "350 premium hotels",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    },
    {
      name: "Bali",
      properties: "200 beach resorts",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 mt-12">
      {featuredPlaces.map((place) => (
        <div
          key={place.name}
          className="relative group overflow-hidden rounded-xl h-[260px] cursor-pointer"
        >

          <img
            src={place.img}
            alt={place.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

        
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>

    
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-2xl font-semibold tracking-wide">
              {place.name}
            </h1>
            <p className="text-sm text-gray-200">{place.properties}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
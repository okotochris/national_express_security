"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const categories = [
   {
    title: "Fruit",
    content:
      "Our cold-chain logistics keeps fruits fresh and nutritious from farm to international markets, with strict temperature control and fast transit times.",
    image: "/fruit.jpg",
    url:"/fruit"
  },
  {
    title: "Pharmaceutical",
    content:
      "We transport sensitive medical goods with regulatory compliance, secure handling, and temperature-controlled solutions to maintain product integrity.",
    image: "/pharma.jpg",
    url:"/pharmacy"
  },
  {
    title: "Cars Part",
    content:
      "From engines to small components, we ensure reliable and timely delivery to assembly lines and distributors through optimized automotive logistics.",
    image: "/carparts.jpg",
    url:"carpart"
  },
  {
    title: "Mining and Minerals",
    content:
      "Heavy-duty logistics for moving mining equipment, raw minerals, and resources from remote sites to global markets efficiently and safely.",
    image: "/mining.jpg",
    url:"mining"
  },
   {
    title: "Agriculture",
    content:
      "We support the movement of agricultural goods — grains, fertilizers, and machinery — ensuring seamless farm-to-market logistics through reliable supply chains and temperature-controlled solutions.",
    image: "/agriculture.jpg",
    url:"/agriculture"
  },
  {
    title: "Plastic and Rubber Product",
    content:
      "Comprehensive logistics solutions for plastic and rubber industries, supporting international trade with flexible, cost-effective transport.",
    image: "/plastic.jpg",
    url:"/plastic"
  },
  {
    title: "Chemical and Petrochemical",
    content:
      "Specialized handling and secure transport of hazardous and non-hazardous chemicals with safety as top priority.",
    image: "/chemical.jpg",
    url:"/chemical"
  },
  {
    title: "Food and Beverage",
    content:
      "Reliable logistics for perishable and non-perishable food items, ensuring freshness, safety, and timely delivery across continents.",
    image: "/food.jpg",
    url:"/food"
  },
  {
    title: "Pulp Paper and Forestry Product",
    content:
      "Efficient movement of forestry products and pulp & paper materials to support industries and global supply chains.",
    image: "/pulp.jpg",
    url:"/pulp"
  },
  {
    title: "Retail",
    content:
      "Agile logistics solutions for retail businesses, supporting fast restocking, warehousing, and last-mile delivery worldwide.",
    image: "/retail.jpg",
    url:'retail'
  },
];

export default function IndustryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const router = useRouter()
  // Adjust itemsPerView based on screen size
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const scrollLeft = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? categories.length - itemsPerView : prev - 1
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prev) =>
      prev >= categories.length - itemsPerView ? 0 : prev + 1
    );
  };

  const totalSlides = categories.length - itemsPerView + 1;

  return (
    <section className="relative max-w-full mx-auto px-4 sm:px-6 md:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Industries We Serve
      </h2>
     <div className=" my-5">
         <p className="text-slate-600 mt-3">
                At NES we pride ourselves on being a global container shipping company that delivers 
                tailored solutions designed to meet the specific needs of each of our customers. 
                Regardless of your cargo type, or final destination, we offer versatile solutions 
                that cover air, land, and sea.
                </p>
                 <p className="text-slate-600 mt-3">
                Thanks to the extensive capacity of our container fleet, NES is the trusted transportation 
                partner and shipping company for numerous companies the world over. Combining this with 
                our global port coverage and extensive equipment availability means, we are able to deliver a 
                professional, efficient shipping service, tailored to the specific needs of your business.
                </p>
     </div>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg z-10 transition"
      >
        <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 text-slate-800" />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg z-10 transition"
      >
        <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 text-slate-800" />
      </button>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
          }}
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 p-3 ${
                itemsPerView === 1 ? "w-full" : "w-full md:w-1/3"
              }`}
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03] flex flex-col h-full overflow-hidden">
                <div className="relative h-44 md:h-52 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base line-clamp-4">
                    {item.content}
                  </p>
                  <button 
                    onClick={()=>router.push(item.url)}
                    className="mt-auto text-blue-600 font-semibold hover:underline text-sm md:text-base">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
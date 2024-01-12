"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  {
    url: "/images/logo/logo-16.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-3.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-4.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-5.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-6.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-7.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-8.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-9.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-10.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-11.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-12.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-13.svg",
    alt: "Logo",
  },
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div
        className="flex justify-center items-center text-3xl font-bold px-10 md:pb-10 bg-gradient-to-r
         from-blue-500 to-green-300 bg-clip-text text-transparent"
      >
        More than 100+ brands have built their businesses with Bird Software
      </div>

      <div className="grid grid-cols-3 p-4 md:flex">
        <AnimatePresence custom={currentImageIndex}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.8,
                scale: index === currentImageIndex ? 1.2 : 1,
                transition: { duration: 0.5 },
              }}
              className="flex justify-center items-center h-40 w-40"
              exit={{ opacity: 0 }}
              custom={index}
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={200}
                height={200}
                className="object-contain h-20 w-20 flex justify-center items-center mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    name: "Customizable",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-cloud.png",
    alt: "Customizable",
    color: "blue",
  },
  {
    name: "Fast ",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-fast.png",
    alt: "Customizable",
  },
  {
    name: "Integrations",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-journey.png",
    alt: "Customizable",
  },
  {
    name: "Full Stack",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-layer.png",
    alt: "Customizable",
  },
  {
    name: "Loyalty",
    description:
      "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
    image: "/images/icon-location.png",
    alt: "Customizable",
  },
  {
    name: "Support",
    image: "/images/icon-support-1.png",
    description:
      "Get 24/7 support from our team to help you with any issues you have.",
    alt: "Customizable",
  },
];

const SecondSection = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="justify-center p-5 md:w-1/2">
          <div className="bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text text-transparent text-4xl md:text-6xl font-bold pb-10">
            From startup to enterprise, Bird is built for every type of
            business.
          </div>
          <div className="text-2xl mb-8">
            Built for all businesses and communities, Bird is the only platform
            you need to grow your business.
          </div>
          <button className="bg-blue-500 text-white p-4 flex justify-center rounded-lg md:w-1/3 hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <video
          className="h-full rounded-xl md:w-2/5  p-4 md:p-0"
          autoPlay
          muted
          loop
        >
          <source src="/content/video-2.mp4" type="video.mp4" />
        </video>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl md:text-5xl flex justify-center font-bold pt-5 pb-10 bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent">
          Product Features
        </div>
        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col space-y-6 pb-10 border p-8 rounded-xl justify-center items-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
            >
              <div className="text-3xl text-gray-600 font=bold">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={300}
                  height={300}
                  className="object-contain flex justify-center items-center w-20 h-20 mb-10"
                />
                <div>
                  <div className="text-2xl pb-4 bg-gradient-to-t from-black to-gray-400 bg-clip-text text-transparent font-bold">
                    {feature.name}
                  </div>
                  <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

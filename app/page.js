"use client";
import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHandHoldingUsd, FaGraduationCap, FaRobot } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { GoLaw } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Banking",
        "Govt Yojana",
        "Investment",
        "Loans",
        "Expense tracking",
        "वित्त",
      ],
      typeSpeed: 50,
    });
    return () => typed.destroy();
  }, []);

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <main>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[80vh] flex items-center px-4 py-10 lg:space-x-8"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/163067728/photo/happy-woman-working.webp?a=1&b=1&s=612x612&w=0&k=20&c=gUzbtPmMvuZwe6QljAz8cU9qdjZiNyh8F_zpdbBijiI=")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">ONE STOP </span> solution for all
            <br /> finance-related issues{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
        </div>
      </motion.section>

      {/* Services Section with Scrolling Animation */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Our Services
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {[
              {
                icon: GoLaw,
                title: "Government Schemes",
                description: "Information about financial schemes and benefits.",
                color: "text-blue-600",
              },
              {
                icon: FaHandHoldingUsd,
                title: "Finance Tracker",
                description: "Track and manage your finances efficiently.",
                color: "text-green-600",
              },
              {
                icon: GiReceiveMoney,
                title: "Avail Loans",
                description: "Find loans tailored to your needs.",
                color: "text-yellow-600",
              },
              {
                icon: FaGraduationCap,
                title: "Learning",
                description: "Enhance your financial knowledge.",
                color: "text-red-600",
              },
              {
                icon: FaRobot,
                title: "AI Assistance",
                description: "Smart AI financial advisors at your service.",
                color: "text-purple-600",
              },
              {
                icon: FaLocationDot,
                title: "Offline Support",
                description: "Locate support centers near you.",
                color: "text-indigo-600",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full sm:w-1/2 lg:w-1/3 p-4"
              >
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center">
                  <service.icon className={`mx-auto text-5xl mb-4 ${service.color}`} />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Scrolling Animation */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Testimonials
            </h2>
          </div>
          <motion.div
            className="flex flex-wrap justify-center"
            initial="hidden"
            whileInView="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                name: "Aditi A G",
                role: "Small Farmer",
                comment: "“This service has been a game-changer for our business!”",
              },
              {
                name: "Maheshappa",
                role: "Dairy Owner",
                comment: "“Amazing experience! Highly professional and outstanding results.”",
              },
              {
                name: "Pappu Yadav",
                role: "Farmer from UP",
                comment: "“Exceptional support and great service.”",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                className="w-full sm:w-1/2 lg:w-1/3 p-4"
              >
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center dark:bg-gray-800">
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonial.comment}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Featured Videos Section with Scroll Animation */}
<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Featured Videos</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular videos</p>
    </div>
    <motion.div
      className="flex flex-wrap justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {[
        {
          title: "Financial Literacy for Rural Women",
          src: "https://www.youtube.com/embed/Wsy5CWOL3yE",
          description: "Learn how financial education empowers women in rural areas.",
        },
        {
          title: "Financial Literacy",
          src: "https://www.youtube.com/embed/Wsy5CWOL3yE",
          description: "An essential guide to understanding finance basics.",
        },
        {
          title: "Financial Inclusion in Rural India",
          src: "https://www.youtube.com/embed/mp_uLydCQA8",
          description: "Exploring the steps towards rural financial inclusion.",
        },
      ].map((video, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="w-full sm:w-1/2 lg:w-1/3 p-4"
        >
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
            <div className="w-full aspect-video rounded-t-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{video.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{video.description}</p>
              <Button className="mt-4" variant="outline" href="/video">
                Watch Full Video
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
    </main>
  );
}

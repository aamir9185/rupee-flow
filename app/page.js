"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';
import { FaHandHoldingUsd, FaGraduationCap, FaRobot } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { GoLaw } from 'react-icons/go';
import { FaLocationDot } from "react-icons/fa6";
export default function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Banking', 'Govt Yojana', 'Investment', 'Loans', 'Expense tracking','वित्त'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []); 

  return (
    <main>
{/* Hero section */}
<section 
  className="w-full h-[80vh] flex items-center px-4 py-10 lg:space-x-8"
  style={{
    backgroundImage: 'url("https://media.istockphoto.com/id/163067728/photo/happy-woman-working.webp?a=1&b=1&s=612x612&w=0&k=20&c=gUzbtPmMvuZwe6QljAz8cU9qdjZiNyh8F_zpdbBijiI=")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}
>
  <div className="w-full text-center lg:text-left lg:w-1/2">
    <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
      A <span className="font-semibold">ONE STOP </span> solution for all<br className="hidden lg:block" /> finance related issues <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
    </h1>
    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
       <br className="hidden lg:block" /> 
    </p>
    <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
      <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
        {/* Add form fields here */}
      </form>
    </div>
  </div>
</section>





<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Our Services</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Comprehensive financial solutions for your needs</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Government Schemes */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <GoLaw className="mx-auto text-5xl mb-4 text-blue-600" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Government Schemes</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Access information about various government financial schemes and benefits</p>
        </div>
      </div>
      
      {/* Finance Tracking*/}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <FaHandHoldingUsd className="mx-auto text-5xl mb-4 text-green-600" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Finance Tracker</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Discover and apply for government financial assistance programs</p>
        </div>
      </div>

      {/* Avail Loans */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <GiReceiveMoney className="mx-auto text-5xl mb-4 text-yellow-600" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Avail Loans</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Find and compare loan options tailored to your requirements</p>
        </div>
      </div>

      {/* Learning */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <FaGraduationCap className="mx-auto text-5xl mb-4 text-red-600" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Learning</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Educational resources to improve your financial literacy</p>
        </div>
      </div>

      {/* AI Assistance */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2">
          <FaRobot className="mx-auto text-5xl mb-4 text-purple-600" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">AI Assistance</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Get intelligent financial advice powered by AI</p>
        </div>
      </div>

      {/* Offline */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <FaLocationDot className="mx-auto text-5xl mb-4 text-indigo-600" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Offline Support</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Locate the nearest offline center</p>
        </div>
      </div>
    </div>
  </div>
</section>

 <section className="py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Testimonials</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"This service has been a game-changer for our business. Highly recommend!"</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Aditi A G</h3>
          <p className="text-gray-500 dark:text-gray-300">A small farmer</p>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Amazing experience! The team was professional and the results were outstanding."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Maheshappa</h3>
          <p className="text-gray-500 dark:text-gray-300"> Dairy Owner</p>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Exceptional service and support. We couldn't be happier with the results."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Pappu Yadav</h3>
          <p className="text-gray-500 dark:text-gray-300">Farmer from UP</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Featured Videos</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular videos</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Video 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <div className="w-full aspect-video rounded-t-lg overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Wsy5CWOL3yE"
              title="Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Financial Literacy for Rural Women</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the video goes here. It should be engaging and informative.</p>
            <Button className="m-2" variant="outline" href="/video-1">Watch Full Video</Button>
          </div>
        </div>
      </div>
      {/* Video 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <div className="w-full aspect-video rounded-t-lg overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Wsy5CWOL3yE"
              title="Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Financial Literacy</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the video goes here. It should be engaging and informative.</p>
            <Button className="m-2" variant="outline" href="/video-2">Watch Full Video</Button>
          </div>
        </div>
      </div>
      {/* Video 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <div className="w-full aspect-video rounded-t-lg overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/mp_uLydCQA8"
              title="Video 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Financial Inclusion in Rural India</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the video goes here. It should be engaging and informative.</p>
            <Button className="m-2" variant="outline" href="/video-3">Watch Full Video</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </main>
  );
};









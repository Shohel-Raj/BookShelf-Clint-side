import React, { Suspense, use, useEffect } from "react";
import Slider from "../Component/Slider/Slider";
import PopularBookCard from "../Component/PopularBook/PopularBookCard";
import CatagoryCard from "../Component/CatagoryCard/CatagoryCard";
import SponsorSec from "../Component/Sponsor/SponsorSec";
import FaqComponent from "../Component/FAQ/FaqComponent";
import FaqLottie from "../Component/FAQ/FaqLottie";

import "aos/dist/aos.css";
import Aos from "aos";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

Aos.init();

const promisecard = fetch("/Catagory.json").then((res) => res.json());

const Home = () => {
  const catagorydata = use(promisecard);
  const data = useLoaderData();

  useEffect(() => {
    document.title = `${import.meta.env.VITE_site_name} | Home`;
  }, []);

 const handleSubscription = async (e) => {
  e.preventDefault();

  const email = e.target.elements.email.value;
  if (!email) return;

  try {
    const res = await fetch(`${import.meta.env.VITE_ApiCall}/subscription`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Subscribed successfully!");
      e.target.reset(); // clear input
    } else {
      toast.error("Something went wrong. Try again.");
      console.error(data);
    }
  } catch (err) {
    toast.error("Failed to subscribe. Check your network.");
    console.error(err);
  }
};

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Slider />

      {/* Popular Books */}
      <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="w-11/12 md:w-10/12 mx-auto py-6">
          <div className="text-center my-3.5 space-y-2">
            <h1 className="font-bold text-2xl md:text-3xl uppercase italic mb-3">
              Discover the most-loved reads by our community.
            </h1>
            <p className="md:w-3/4 mx-auto mb-3 text-sm text-gray-700 dark:text-gray-300">
              From chart-topping fiction to must-read nonfiction, explore a
              diverse range of books that readers across the globe can't stop
              talking about. Whether it's a gripping mystery, a heartwarming
              romance, an inspiring biography, or a groundbreaking piece of
              journalism, these titles continue to spark curiosity,
              conversation, and a genuine love for reading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {data?.map((cardData) => (
              <PopularBookCard key={cardData._id} cardData={cardData} />
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="my-8">
        <div className="w-11/12 md:w-10/12 mx-auto py-6">
          <div className="text-center my-3.5">
            <h1 className="font-bold text-2xl md:text-3xl uppercase italic mb-3">
              Explore Our Book Categories.
            </h1>
            <p className="md:w-3/4 mx-auto mb-3 text-sm text-gray-700 dark:text-gray-300">
              Discover books across every genre and interest. From gripping
              thrillers to inspiring biographies, timeless classics to trending
              bestsellers—our curated categories make it easy to find your next
              great read.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <Suspense>
              {catagorydata.map((cat) => (
                <CatagoryCard key={cat.id} data={cat} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>

      {/* Sponsors */}
      <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="w-11/12 md:w-10/12 mx-auto py-6">
          <SponsorSec />
        </div>
      </div>

      {/* FAQ */}
      <div className="my-16">
        <div className="w-11/12 md:w-10/12 mx-auto py-6">
          <div className="text-center my-3.5">
            <h1 className="font-bold text-2xl md:text-3xl uppercase italic mb-3">
              Frequently Asked Questions
            </h1>
            <p className="md:w-3/4 mx-auto mb-3 text-sm text-gray-700 dark:text-gray-300">
              We’re happy to answer your questions and share helpful insights —
              making it easier for you to explore, enjoy, and get the most out
              of your journey with Books Shelf. Whether you're new here or a
              longtime reader, we’re here to support your love of books every
              step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-10">
            <FaqComponent />
            <FaqLottie />
          </div>
        </div>
      </div>

      {/* Stay Updated Section */}
      <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 py-12 border-b-1  border-gray-400">
        <div className="w-11/12 md:w-10/12 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 italic uppercase">
            Stay Updated
          </h2>
          <p className="md:w-3/4 mx-auto mb-6 text-sm md:text-base text-gray-700 dark:text-gray-300">
            Subscribe to our newsletter and never miss the latest book
            recommendations, reading tips, and updates from{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Books Shelf
            </span>
            .
          </p>

          <form
            className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto"
            onSubmit={handleSubscription} // <--- attach here
          >
            <input
              type="email"
              name="email" // <--- important to identify input
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3 dark:text-gray-400">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

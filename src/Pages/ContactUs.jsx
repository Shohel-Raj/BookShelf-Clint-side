import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import anim from "../../public/contact.json";
import axios from "axios";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `${import.meta.env.VITE_site_name} | Contact Us`;
  }, []);

  const style = {
    height: 300,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !message) {
      return toast.error("Name and message are required");
    }

    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_ApiCall}/contact-us-by-user`, {
        name,
        email,
        message,
      });

      toast.success(res.data.message || "Message sent successfully!");
      form.reset();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mb-10 min-h-[calc(100vh-200px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
        {/* Left side with animation */}
        <div className="flex flex-col justify-between overflow-hidden">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
            <p className="italic">"Reach out—because every great connection starts with a message."</p>
          </div>
          <div className="md:-ml-24 -ml-10">
            <Lottie animationData={anim} style={style} />
          </div>
        </div>

        {/* Form */}
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset space-y-2">
              <h1 className="text-2xl text-center font-bold">Contact Us</h1>

              <div className="space-y-1.5">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  required
                  placeholder="Name"
                />
              </div>

              <div className="space-y-1.5">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />
              </div>

              <div className="space-y-1.5">
                <label className="label">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message"
                  required
                  className="textarea w-full"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn mt-4 bg-[#34eb74] text-white hover:bg-[#97f7b9] hover:text-black"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
